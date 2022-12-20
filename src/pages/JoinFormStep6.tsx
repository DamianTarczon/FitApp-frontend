import { useState } from 'react';
import { useAppDispatch } from '../app/hooks';
import { setNumberOfMeals } from '../reducers/formReducer';
import BigTile from '../components/BigTile';
import './JoinForm.scss';
import { Link } from 'react-router-dom';
import mealsData from '../data/NumberOfMealsData';
import Tile from '../components/Tile';
import DescriptionTile from '../components/DescriptionTile';

export default function JoinFormStep6() {
  const dispatch = useAppDispatch();
  const [mealData, setTiles] = useState(mealsData);

  function toggleMealsTile(event: React.MouseEvent<HTMLDivElement, MouseEvent>, name: string) {
    const newMealTiles = mealData.map((tile) => ({
      ...tile,
      clicked: tile.id === Number(event.currentTarget.id) ? true : false,
    }));
    setTiles(newMealTiles);
    dispatch(setNumberOfMeals(name));
  }

  const numberOfMealsTiles = mealData.map((tile) => {
    return (
      <Tile
        key={tile.id}
        id={tile.id}
        className={tile.clicked ? 'tile selected' : 'tile'}
        img={tile.img}
        name={[tile.number + (tile.number > 4 ? ' POSIŁKÓW' : ' POSIŁKI')].toString()}
        handleClick={toggleMealsTile}
      />
    );
  });

  const description = mealData
    .filter((data) => data.clicked)
    .map((data) => {
      return (
        <div className="description-container">
          <DescriptionTile
            key={data.id}
            title={[data.number + (data.number > 4 ? ' POSIŁKÓW' : ' POSIŁKI')].toString()}
            description={data.description}
            img="zdjecie"
            imgPosition="top"
          />
          <Link to="/join-form-step-7">
            <button>Przejdź dalej</button>
          </Link>
        </div>
      );
    });

  const mealsForm = (
    <div className="tiles-form">
      <h2>LICZBA POSIŁKÓW</h2>
      <div className="tiles-container">{numberOfMealsTiles}</div>
    </div>
  );

  return (
    <div className="form-container">
      <BigTile content={mealsForm} color="#f8bb4b" />
      <BigTile content={description} color="#ffffff" />
    </div>
  );
}
