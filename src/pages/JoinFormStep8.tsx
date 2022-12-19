import { useState } from 'react';
import { useAppDispatch } from '../app/hooks';
import {
  setDiseases
} from '../reducers/formReducer';
import BigTile from '../components/BigTile';
import './JoinFormStep8.scss';
import { Link } from "react-router-dom";
import diseasesData from '../data/DiseasesData';
import Tile from '../components/Tile';

export default function JoinFormStep8() {
  const dispatch = useAppDispatch();
  const [diseaseData, setDiseaseData] = useState(diseasesData);

  interface DiseaseDataProps {
    id: number
    name: string,
    clicked: boolean
}

  function toggleDiseases(event: any, name: string){
    let newDiseaseData: DiseaseDataProps[];
    if(name === 'NIE POSIADAM'){
      newDiseaseData = diseaseData.map(tile => ({...tile, clicked: tile.id === Number(event.currentTarget.id) ? !tile.clicked : false}))
    } else {
      newDiseaseData = diseaseData.map(tile => ({...tile, clicked: tile.name === 'NIE POSIADAM' ? false : tile.id === Number(event.currentTarget.id) ? !tile.clicked : tile.clicked}))
    }
    setDiseaseData(newDiseaseData);
    dispatch(setDiseases(name));
  }

  const diseasesTiles = diseaseData.map(disease => {
    return (
      <Tile
        key={disease.id}
        id={disease.id}
        className={disease.clicked ? 'disease-clicked' : 'disease-tile'}
        name={disease.name}
        handleClick={toggleDiseases}
      />
    )
  })

  const pictureWithText = 
  <div>
    <h1>Choroby</h1>
    <p>Zdjecie</p>
  </div>

  const diseasesForm = 
  <div className='diseases-div'>
    <h2>WYBIERZ CHOROBY</h2>
    <div className='container'>
      {diseasesTiles}
    </div>
    <Link to='/join-form-step-9'><button>Przejdź dalej</button></Link>
  </div>

  return (
    <div className="form-container">
      <BigTile content={pictureWithText} color="orange"/>
      <BigTile content={diseasesForm} color="white"/>
    </div>
  );
}