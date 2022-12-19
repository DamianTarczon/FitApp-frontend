import { useState } from 'react';
import { useAppDispatch } from '../app/hooks';
import {
  setAllergens
} from '../reducers/formReducer';
import BigTile from '../components/BigTile';
import './JoinForm.scss';
import { Link } from "react-router-dom";
import allergensData from '../data/AllergensData';
import Tile from '../components/Tile';
import DescriptionTile from '../components/DescriptionTile';

export default function JoinFormStep4() {
  const dispatch = useAppDispatch();
  const [allergenData, setAllergenData] = useState(allergensData);

  interface AllergenDataProps {
    id: number,
    img: string,
    name: string,
    clicked: boolean
  }

  function toggleAllergens(event: React.ChangeEvent<HTMLInputElement>, name: string){
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
        className={allergen.clicked ? 'tile selected' : 'tile'}
        img={allergen.img}
        name={allergen.name}
        handleClick={toggleAllergens}
      />
    )
  })

  const description = <DescriptionTile 
    title='ALERGIE'
    description='Czy cierpisz na alergie pokarmowe?'
    img='Zdjecie'
    imgPosition='middle'
  />
  

  const alergensForm = 
  <div className="tiles-form">
    <h2>WYBIERZ ALERGENY</h2>
      <div className="tiles-container">{allergensTiles}</div>
    <Link to='/join-form-step-5'><button>Przejdź dalej</button></Link>
  </div>

  return (
    <div className="form-container">
      <BigTile content={description} color="orange"/>
      <BigTile content={alergensForm} color="white"/>
    </div>
  );
}

