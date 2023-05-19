import React, { useState, useEffect } from 'react';
import { AddAlert } from './AddAlert';
import { ErrorAlert } from './ErrorAlert';
import { UploadingAudio } from './UploadingAudio';
import '../styles/Add.css';

export function Add({ see, notSee }) {
  //campos del form
  const [nameFile, setNameFile] = useState('');
  const [nameAuthor, setNameAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [genres, setGenres] = useState('');
  const [file, setFile] = useState('');
  const [fileUrl, setFileUrl] = useState('');
  //validacion de form
  const [errors, setErrors] = useState({});
  //categorias y generos
  const [categories, setCategories] = useState([]);
  const [genders, setGenders] = useState([]);
  //alerta
  const [alert, setAlert] = useState(false)
  const [alertError, setAlertError] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const [dataFile, setDataFile] = useState({})
  //canga mientras se envia el audio
  const [loadingAudio, setLoadingAudio] = useState(false)

  useEffect(() => {
    //obtengo las categorías
    fetch('http://18.117.98.49:5000/api/v1/categories')
      .then(response => response.json())
      .then(data => setCategories(data))
  }, []);

  useEffect(() => {
    //obtengo los géneros
    fetch('http://18.117.98.49:5000/api/v1/genders')
      .then(response => response.json())
      .then(data => setGenders(data))
  }, []);

  const validateForm = () => {
  let formIsValid = true;
  const newErrors = {};

  //validar campo nombre
  //trim() hace que si hay solo espacios en blanco los elimina
  if (!nameFile.trim()) {
    formIsValid = false;
    newErrors.nameFile = 'El campo Nombre es obligatorio.';
  }

  //validar campo artista / autor
  if (!nameAuthor.trim()) {
    formIsValid = false;
    newErrors.nameAuthor = 'El campo Artista / Autor es obligatorio.';
  }

  //validar campo categorías
  if (!category) {
    formIsValid = false;
    newErrors.category = 'Debes seleccionar una categoría.';
  }

  //validar campo géneros
  if (!genres) {
    formIsValid = false;
    newErrors.genres = 'Debes seleccionar un género.';
  }

  //validar campo archivo
  if (!file) {
    formIsValid = false;
    newErrors.file = 'Debes seleccionar un audio.';
  }

  setErrors(newErrors);
  return formIsValid;
};

  const handleSubmit = (e) => {
    e.preventDefault();

    validateForm() ? setLoadingAudio(true) : setLoadingAudio(false)

    //objeto que se enviará
    const formData = new FormData();
    formData.append('nameFile', nameFile);
    formData.append('nameAuthor', nameAuthor);
    formData.append('categoryId', category);
    formData.append('genderId', genres);
    formData.append('file', file);
    formData.append('fileUrl', fileUrl);

    const url = 'http://18.117.98.49:5000/api/v1/files/upload';

    if (validateForm()) {
      fetch(url, {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setDataFile(data)
          setFileUrl(data.Location);
          setLoadingAudio(false);
          setAlert(true)
          setIsLoading(true)
        })
        .catch(error => {
          setAlertError(true)
          console.error('Ocurrió un error:', error);
        });
    }
  };

  const handleFileInputChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleClick = () => {
    notSee(false);
  };

  return (
    <>
      {see &&
        <div className='Add'>
          <div className="Add-container">
            <h2>Agrega Tu Audio</h2>
            <form onSubmit={handleSubmit} className='Add-content'>
              <div className='Add-content-input'>
                <label className='name'>Nombre</label>
                <input
                  className='Add-input'
                  type="text"
                  id='name'
                  value={nameFile}
                  onChange={(e) => setNameFile(e.target.value)}
                />
                {errors.nameFile && <div className="Add-error">{errors.nameFile}</div>}
              </div>
              <div className='Add-content-input'>
                <label className='artist'>Artista / Autor</label>
                <input
                  className='Add-input'
                  type="text"
                  id='artist'
                  value={nameAuthor}
                  onChange={(e) => setNameAuthor(e.target.value)}
                />
                {errors.nameAuthor && <div className="Add-error">{errors.nameAuthor}</div>}
              </div>
              <div className='Add-content-input'>
                <label className='category'>Categorías</label>
                <select
                  className='Add-input'
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option disabled selected hidden></option>
                  {categories.map((category) => {
                    return (
                      <option
                        key={category.id}
                        value={category.id}
                      >
                        {category.nameCategory}
                      </option>
                    )
                  })}
                </select>
                {errors.category && <div className="Add-error">{errors.category}</div>}
              </div>
              <div className='Add-content-input'>
                <label className='genres'>Géneros</label>
                <select
                  className='Add-input'
                  onChange={(e) => setGenres(e.target.value)}
                >
                  <option disabled selected hidden></option>
                  {genders.map((genres) => {
                    return (
                      <option
                        key={genres.id}
                        value={genres.id}
                      >
                        {genres.nameGender}
                      </option>
                    )
                  })}
                </select>
                {errors.genres && <div className="Add-error">{errors.genres}</div>}
              </div>
              <div className='Add-content-input'>
                <label className='file'>Audio</label>
                <input
                  className='Add-input-audio'
                  type="file"
                  name="uploads"
                  accept=".mp3, .mp4, .m4a"
                  multiple
                  onChange={handleFileInputChange}
                />
                {errors.file && <div className="Add-error">{errors.file}</div>}
              </div>
              <div className="Add-container-btn">
                <button className='Add-btn-cancel' onClick={handleClick}>Cancelar</button>
                <button
                  type='submit'
                  className='Add-btn-save'
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
          {alert && isLoading ? <AddAlert
            see={see}
            notSee={notSee}
            alert={alert}
            setAlert={setAlert}
            dataFile={dataFile}
          /> : null}
          {alertError ? <ErrorAlert
            see={see}
            notSee={notSee}
            alert={alertError}
            setAlert={setAlertError}
          /> : null}
          {loadingAudio ? <UploadingAudio /> : null}
        </div>
      }
    </>
  );
}
