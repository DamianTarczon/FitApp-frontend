import React from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import {
  setGender,
  selectForm,
  setDietType,
} from '../reducers/formReducer';
import BigTile from '../components/BigTile';
import './JoinFormStep3.scss';
import { Link } from "react-router-dom";
import DietsData from '../data/DietsData'; 

export default function JoinFormStep3() {
  const form = useAppSelector(selectForm);
  const dispatch = useAppDispatch();

  const diets = DietsData.map(diet => 
    {return <button 
      onClick={() => dispatch(setDietType(diet))}>{diet.shortTitle}
      </button>})

  const description = <div className="diet-description">
    <h2>{form.dietDescription.title}</h2>
    <p>{form.dietDescription.description}</p>
    <Link to="/join-form-step-4"><button>Przejdź dalej</button></Link>
    </div>

  return (
    <div className="form-container">
      <BigTile content={diets} color="#f8bb4b"/>
      <BigTile content={description} color="#ffffff"/>
    </div>
  );
}

