import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { useNavigate } from "react-router-dom"
import {
  setAge,
  setHeight,
  setWeight,
  selectForm,
} from '../reducers/formReducer';
import BigTile from '../components/BigTile';
import './JoinForm.scss';

export default function JoinFormStep2() {
  const form = useAppSelector(selectForm);
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const[basicInfo, setBasicInfo] = useState({
    age: '',
    height: '',
    weight: ''
  })

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setBasicInfo(prevFormData => {
        return {
            ...prevFormData,
            [event.target.name]: event.target.value
        }
    })
}

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void{
    event.preventDefault()
    dispatch(setAge(basicInfo.age))
    dispatch(setHeight(basicInfo.height))
    dispatch(setWeight(basicInfo.weight))
    navigate("/join-form-step-3")
  }

  const pictureWithText = <div>Tutaj będzie zdjęcie i tekst</div>
  const basicForm = 
  <div className='form-div'>
    <form onSubmit={handleSubmit}>
      <input 
        type='text'
        placeholder='Wiek'
        name='age'
        value={basicInfo.age}
        onChange={handleChange}
        pattern="\d*"
        required
      />
      <input 
        type='text'
        placeholder='Wzrost(cm)'
        name='height'
        value={basicInfo.height}
        onChange={handleChange}
        pattern="\d*"
        required
      />
      <input 
        type='text'
        placeholder='Waga(kg)'
        name='weight'
        value={basicInfo.weight}
        onChange={handleChange}
        pattern="\d*"
        required
      />
      <button>Przejdź dalej</button>
    </form>
    
  </div>

  return (
    <div className="form-container">
      <BigTile content={pictureWithText} color="orange"/>
      <BigTile content={basicForm} color="white"/>
    </div>
  );
}
