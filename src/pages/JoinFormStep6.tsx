import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import {
  setNumberOfMeals,
  selectForm,
} from './JoinFormSlice';
import BigTile from '../components/BigTile';
import './JoinFormStep6.scss';
import { Link } from "react-router-dom";
import mealsData from '../data/NumberOfMealsData';
import Tile from '../components/Tile';

export default function JoinFormStep6() {
  const form = useAppSelector(selectForm);
  const dispatch = useAppDispatch();
  const [mealTiles, setTiles] = useState(mealsData);


  function toggleMealsTile(event: any, name: string){
    const newMealTiles = mealTiles.map(tile => ({...tile, clicked: tile.id === Number(event.currentTarget.id) ? true : false}))
    setTiles(newMealTiles)
    dispatch(setNumberOfMeals(name));
  }

  const numberOfMealsTiles = mealTiles.map(tile => {
    return (
      <Tile
        key={tile.id}
        id={tile.id}
        className={tile.clicked ? 'meal-tileClicked' : 'meal-tile'}
        img={tile.img}
        name={[tile.number + (tile.number > 4 ? ' POSIŁKÓW' : ' POSIŁKI')]}
        handleClick={toggleMealsTile}
      />
    )
  })

  const pictureWithText = 
  <div className='meal-info-div'>
    <p>Tutaj będzie zdjęcie</p>
    <h1>{form.form.numberOfMeals ? form.form.numberOfMeals : 'Wybierz ile posiłków chcesz mieć w ciągu dnia'}</h1>
    <h4>Mam dużo czasu i chcę próbować nowych rzeczy</h4>
    <Link to='/join-form-step-7'><button>Przejdź dalej</button></Link>
  </div>

  const mealsForm = 
  <div className='meal-tiles-div'>
    <h2>LICZBA POSIŁKÓW</h2>
    <div className='container'>
      {numberOfMealsTiles}
    </div>
  </div>

  return (
    <div className="form-container">
      <BigTile content={mealsForm} color="orange"/>
      <BigTile content={pictureWithText} color="white"/>
    </div>
  );
}

