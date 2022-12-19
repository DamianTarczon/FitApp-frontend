import { useAppSelector, useAppDispatch } from '../app/hooks';
import React, {useState} from 'react';
import {
  selectForm,
  setDietType,
} from '../reducers/formReducer';
import BigTile from '../components/BigTile';
import './JoinFormStep3.scss';
import DietsData from '../data/DietsData';
import DescriptionTile from '../components/DescriptionTile';
import Tile from '../components/Tile';

export default function JoinFormStep3() {
  const form = useAppSelector(selectForm);
  const dispatch = useAppDispatch();
  const [dietsData, setDietsData] = useState(DietsData);


  function toggle(event: any, name: string){
    const newDietsData = dietsData.map(tile => ({...tile, clicked: tile.id === Number(event.currentTarget.id) ? true : false}))
    setDietsData(newDietsData)
    dispatch(setDietType(name));
  }

  const dietsTiles = dietsData.map(tile => {
    return (
      <Tile
        key={tile.id}
        id={tile.id}
        className={tile.clicked ? 'tile selected' : 'tile'}
        img={tile.img}
        name={tile.name}
        handleClick={toggle}
      />
    )
  })

  const description = dietsData
  .filter(data => data.clicked)
  .map(data => {
    return <DescriptionTile key={data.id} title={data.title}
    description={data.description}
    url='/join-form-step-4'
    buttonText='Przejdź dalej' />
  });

    

  return (
    <div className="form-container">
      <BigTile content={dietsTiles} color="#f8bb4b"/>
      <BigTile content={description} color="#ffffff"/>
    </div>
  );
}

