import { useState } from 'react';
import { useAppDispatch } from '../app/hooks';
import {
  setAllergens,
  selectForm,
  setNotLikedProducts,
} from '../reducers/formReducer';
import BigTile from '../components/BigTile';
import './JoinForm.scss';
import { Link } from "react-router-dom";
import NotLikedProductsData from '../data/NotLikedProductsData';
import Tile from '../components/Tile';
import DescriptionTile from '../components/DescriptionTile';

export default function JoinFormStep7() {
  const dispatch = useAppDispatch();
  const [notLikedProductsData, setNotLikedProductsData] = useState(NotLikedProductsData);

  interface NotLikedProductsDataProps {
    id: number,
    img: string,
    name: string,
    clicked: boolean
}

  function toggle(event: any, name: string){
    let newNotLikedProductsData: NotLikedProductsDataProps[];
    if(name === 'Nie posiadam'){
      newNotLikedProductsData = notLikedProductsData.map(tile => ({...tile, clicked: tile.id === Number(event.currentTarget.id) ? !tile.clicked : false}))
    } else {
      newNotLikedProductsData = notLikedProductsData.map(tile => ({...tile, clicked: tile.name === 'Nie posiadam' ? false : tile.id === Number(event.currentTarget.id) ? !tile.clicked : tile.clicked}))
    }
    setNotLikedProductsData(newNotLikedProductsData);
    dispatch(setNotLikedProducts(name));
  }

  const notLikedProductsTiles = notLikedProductsData.map(product => {
    return (
      <Tile
        key={product.id}
        id={product.id}
        className={product.clicked ? 'tile selected' : 'tile'}
        img={product.img}
        name={product.name}
        handleClick={toggle}
      />
    )
  })

  const pictureWithText = 
  <DescriptionTile title='Lubie, nie lubię..'
description='Najczęściej odrzucane produkty'
img='zdjecie'
imgPosition='middle' />



  const notLikedProductsForm = 
  <div className='tiles-form'>
    <h2>Czego nie lubisz?</h2>
    <div className='tiles-container'>
      {notLikedProductsTiles}
    </div>
    <Link to='/join-form-step-8'><button>Przejdź dalej</button></Link>
  </div>

  return (
    <div className="form-container">
      <BigTile content={pictureWithText} color="orange"/>
      <BigTile content={notLikedProductsForm} color="white"/>
    </div>
  );
}

