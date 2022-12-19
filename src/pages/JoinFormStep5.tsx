import React, {useState} from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import {
  setGender,
  selectForm,
  setDietType,
  setActivityLevel,
} from '../reducers/formReducer';
import BigTile from '../components/BigTile';
import './JoinFormStep3.scss';
import { Link } from "react-router-dom";
import ActivityData from '../data/ActivityData';
import Tile from '../components/Tile';
import DescriptionTile from '../components/DescriptionTile';

export default function JoinFormStep5() {
  const form = useAppSelector(selectForm);
  const dispatch = useAppDispatch();
  const [activityTilesData, setActivityTilesData] = useState(ActivityData);


  function toggleActivityTile(event: any, name: string){
    const newActivityTiles = activityTilesData.map(tile => ({...tile, clicked: tile.id === Number(event.currentTarget.id) ? true : false}))
    setActivityTilesData(newActivityTiles)
    dispatch(setActivityLevel(name));
  }

  const activityTiles = activityTilesData.map(tile => {
    return (
      <Tile
        key={tile.id}
        id={tile.id}
        className={tile.clicked ? 'tile selected' : 'tile'}
        img={tile.img}
        name={tile.name}
        handleClick={toggleActivityTile}
      />
    )
  })

  const description = activityTilesData
  .filter(data => data.clicked)
  .map(data => {
    return <DescriptionTile key={data.id} title={data.name}
    description={data.description}
    url='/join-form-step-6'
    buttonText='Przejdź dalej' />
  });

  

  return (
    <div className="form-container">
      <BigTile content={activityTiles} color="#f8bb4b"/>
      <BigTile content={description} color="#ffffff"/>
    </div>
  );
}

