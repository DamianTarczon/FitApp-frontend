import React from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import {
  setAge,
  setHeight,
  setWeight,
  selectForm,
} from '../reducers/formReducer';
import BigTile from '../components/BigTile';
import './JoinFormStep2.scss';
import { Link } from "react-router-dom";

export default function JoinFormStep2() {
  const form = useAppSelector(selectForm);
  const dispatch = useAppDispatch();

  const pictureWithText = <div>Tutaj będzie zdjęcie i tekst</div>
  const basicForm = 
  <div className='form--div'>
    <form>
      <input 
        type='text'
        placeholder='Wiek'
        onChange={(e) => dispatch(setAge(e.target.value))}
      />
      <input 
        type='text'
        placeholder='Wzrost'
        onChange={(e) => dispatch(setHeight(e.target.value))}
      />
      <input 
        type='text'
        placeholder='Waga'
        onChange={(e) => dispatch(setWeight(e.target.value))}
      />
    </form>
    <Link to='/join-form-step-3'><button>Przejdź dalej</button></Link>
  </div>

  return (
    <div className="form-container">
      <BigTile content={pictureWithText} color="orange"/>
      <BigTile content={basicForm} color="white"/>
    </div>
  );
}
