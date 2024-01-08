package com.backend.controller;

import com.backend.exception.StudentNotFoundException;
import com.backend.model.Student;
import com.backend.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class StudentController {

    @Autowired
    private StudentRepository studentRepository;

    @PostMapping("/student")
    Student newUser(@RequestBody Student newStudent) {
        return studentRepository.save(newStudent);
    }

    @GetMapping("/students")
    List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    @GetMapping("/student/{id}")
    Student getStudentById(@PathVariable Long id) {
        return studentRepository.findById(id)
                .orElseThrow(() -> new StudentNotFoundException(id));
    }

    @PutMapping("/student/{id}")
    Student updateStudent(@RequestBody Student newStudent, @PathVariable Long id) {
        return studentRepository.findById(id)
                .map(student -> {
                    student.setPrenom(newStudent.getPrenom());
                    student.setNom(newStudent.getNom());
                    student.setGenre(newStudent.getGenre());
                    student.setCentre(newStudent.getCentre());
                    student.setFiliere(newStudent.getFiliere());
                    student.setAnnee(newStudent.getAnnee());
                    student.setGroupe(newStudent.getGroupe());
                    return studentRepository.save(student);
                }).orElseThrow(() -> new StudentNotFoundException(id));
    }

    @DeleteMapping("/student/{id}")
    String deleteStudent(@PathVariable Long id){
        if(!studentRepository.existsById(id)){
            throw new StudentNotFoundException(id);
        }
        studentRepository.deleteById(id);
        return  "Student with id "+id+" has been deleted success.";
    }
}
