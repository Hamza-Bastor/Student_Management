import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddStudent() {
  let navigate = useNavigate();

  const [student, setStudent] = useState({
    nom: "",
    prenom: "",
    genre: "",
    centre: "",
    filiere: "",
    annee: "",
    groupe: "",
  });

  const { nom, prenom, genre, centre, filiere, annee, groupe } = student;

  const onInputChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/student", student);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Ajouter un étudiant</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Nom" className="form-label">
              Nom
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Entrez le nom"
                name="nom"
                value={nom}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Prenom" className="form-label">
              Prénom
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Entrez le prénom"
                name="prenom"
                value={prenom}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
  <label htmlFor="Genre" className="form-label">
    Genre</label>
  <select id="genre" name="genre" value={genre} onChange={(e) => onInputChange(e)}>
  <option value="null" selected>-</option>
    <option value="homme">Homme</option>
    <option value="femme">Femme</option>
  </select>
</div>

<div className="mb-3">
  <label htmlFor="Centre" className="form-label">
    Site
  </label>
  <select id="centre" name="centre" value={centre} onChange={(e) => onInputChange(e)}>
  <option value="null" selected>-</option>
    <option value="BirAnzarane">Bir Anzarane</option>
    <option value="Roudani">Roudani</option>
    <option value="Centre">Centre</option>
  </select>
</div>

<div className="mb-3">
  <label htmlFor="Filiere" className="form-label">
    Filière
  </label>
  <select id="filiere" name="filiere" value={filiere} onChange={(e) => onInputChange(e)}>
  <option value="null" selected>-</option>
    <option value="IIR">IIR</option>
    <option value="IFA">IFA</option>
    <option value="GI">GI</option>
  </select>
</div>

<div className="mb-3">
  <label htmlFor="Annee" className="form-label">
    Année
  </label>
  <select id="annee" name="annee" value={annee} onChange={(e) => onInputChange(e)}>
  <option value="null" selected>-</option>
    <option value="1">1ème AP</option>
    <option value="2">2ème AP</option>
    <option value="3">3ème</option>
    <option value="4">4ème</option>
    <option value="5">5ème Master</option>
  </select>
</div>

<div className="mb-3">
  <label htmlFor="Groupe" className="form-label">
    Groupe
  </label>
  <select id="groupe" name="groupe" value={groupe} onChange={(e) => onInputChange(e)}>
  <option value="null" selected>-</option>
    <option value="1">G1</option>
    <option value="2">G2</option>
    <option value="3">G3</option>
    <option value="4">G4</option>
    <option value="5">G5</option>
    <option value="6">G6</option>
    <option value="7">G7</option>
    <option value="8">G8</option>
  </select>
</div>

            <button type="submit" className="btn btn-outline-primary">
              Ajouter
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Annuler
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}