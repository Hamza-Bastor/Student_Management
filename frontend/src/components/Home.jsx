import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const result = await axios.get("http://localhost:8080/students");
    setStudents(result.data);
  };

  const deleteStudent = async (id) => {
    await axios.delete(`http://localhost:8080/student/${id}`);
    loadStudents();
  };

  return (
    <div>
    <h1 className="py-3">Gestion des étudiants</h1>
    <div className="container ">
      <div className="py-3">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nom</th>
              <th scope="col">Prénom</th>
              <th scope="col">Genre</th>
              <th scope="col">Site</th>
              <th scope="col">Filière</th>
              <th scope="col">Année</th>
              <th scope="col">Groupe</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{student.nom}</td>
                <td>{student.prenom}</td>
                <td>{student.genre}</td>
                <td>{student.centre}</td>
                <td>{student.filiere}</td>
                <td>{student.annee}</td>
                <td>{student.groupe}</td>
                <td>
                  <Link
                    className="btn btn-info mx-2"
                    to={`/viewstudent/${student.id}`}
                  >
                    Détails
                  </Link>
                  <Link
                    className="btn btn-warning mx-2"
                    to={`/editstudent/${student.id}`}
                  >
                    Modifier
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteStudent(student.id)}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <h6 className="py-4">Copyright © - Hamza BASTOR</h6>
    </div>
  );
}