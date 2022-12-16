import React from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import {
  setAllergens,
  selectForm,
} from './JoinFormSlice';
import BigTile from '../components/BigTile';
import './JoinFormStep4.scss';
import { Link } from "react-router-dom";
import allergensData from '../data/AllergensData';
import AllergenTile from '../components/AllergenTile';

export default function JoinFormStep4() {
  const form = useAppSelector(selectForm);
  const dispatch = useAppDispatch();

  function toggleAllergens(event: any, name: string){
    const allergentTileClass = event.currentTarget.classList.length > 1 ? event.currentTarget.classList[0] : `${event.currentTarget.className} allergen--border`;
    event.currentTarget.className = allergentTileClass;
    dispatch(setAllergens(name));
  }

  const allergensTiles = allergensData.map(allergen => {
    return (
      <AllergenTile
        key={allergen.id}
        img={allergen.img}
        name={allergen.name}
        handleClick={toggleAllergens}
      />
    )
  })

  const pictureWithText = 
  <div>
    <h1>Alergie</h1>
    <p>Tutaj będzie zdjęcie</p>
    <h4>Czy cierpisz na alergie pokarmowe?</h4>
  </div>

  const alergensForm = 
  <div className='allergens--div'>
    <h2>WYBIERZ ALERGENY</h2>
    <div className='container'>
      {allergensTiles}
    </div>
    <Link to='/join-form-step-5'><button>Przejdź dalej</button></Link>
  </div>

  return (
    <div className="form-container">
      <BigTile content={pictureWithText} color="orange"/>
      <BigTile content={alergensForm} color="white"/>
    </div>
  );
}

