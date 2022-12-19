import { useState } from 'react';
import { useAppDispatch } from '../app/hooks';
import {
  setAllergens,
  selectForm,
} from '../reducers/formReducer';
import BigTile from '../components/BigTile';
import './JoinFormStep4.scss';
import { Link } from "react-router-dom";
import allergensData from '../data/AllergensData';
import Tile from '../components/Tile';

export default function JoinFormStep4() {
  const dispatch = useAppDispatch();
  const [allergenData, setAllergenData] = useState(allergensData);

  interface AllergenDataProps {
    id: number,
    img: string,
    name: string,
    clicked: boolean
}

  function toggleAllergens(event: any, name: string){
    let newAllergenData: AllergenDataProps[];
    if(name === 'NIE POSIADAM'){
      newAllergenData = allergenData.map(tile => ({...tile, clicked: tile.id === Number(event.currentTarget.id) ? !tile.clicked : false}))
    } else {
      newAllergenData = allergenData.map(tile => ({...tile, clicked: tile.name === 'NIE POSIADAM' ? false : tile.id === Number(event.currentTarget.id) ? !tile.clicked : tile.clicked}))
    }
    setAllergenData(newAllergenData);
    dispatch(setAllergens(name));
  }

  const allergensTiles = allergenData.map(allergen => {
    return (
      <Tile
        key={allergen.id}
        id={allergen.id}
        className={allergen.clicked ? 'allergen-clicked' : 'allergen-tile'}
        img={allergen.img}
        name={allergen.name}
        handleClick={toggleAllergens}
      />
    )
  })

  const pictureWithText = 
  <div>
    <h1>Alergie</h1>
    <p>Zdjecie</p>
    <h4>Czy cierpisz na alergie pokarmowe?</h4>
  </div>

  const alergensForm = 
  <div className='allergens-div'>
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

