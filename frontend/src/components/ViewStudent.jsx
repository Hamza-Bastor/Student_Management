import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewStudent() {
  const [student, setStudent] = useState({
    nom: "",
    prenom: "",
    genre: "",
    centre: "",
    filiere: "",
    annee: "",
    groupe: "",
  });

  const { id } = useParams();

  const loadStudent = useCallback(async () => {
    const result = await axios.get(`http://localhost:8080/student/${id}`);
    setStudent(result.data);
  }, [id]);

  useEffect(() => {
    loadStudent();
  }, [loadStudent]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Détails sur l'étudiant</h2>

          <div className="card">
            <div className="card-header">
               Id : {student.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Nom:</b>
                  {student.nom}
                </li>
                <li className="list-group-item">
                  <b>Prénom:</b>
                  {student.prenom}
                </li>
                <li className="list-group-item">
                  <b>Genre:</b>
                  {student.genre}
                </li>
                <li className="list-group-item">
                  <b>Site:</b>
                  {student.centre}
                </li>
                <li className="list-group-item">
                  <b>Filière:</b>
                  {student.filiere}
                </li>
                <li className="list-group-item">
                  <b>Année:</b>
                  {student.annee}
                </li>
                <li className="list-group-item">
                  <b>Groupe:</b>
                  {student.groupe}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
          Accueil
          </Link>
        </div>
      </div>
    </div>
  );
}