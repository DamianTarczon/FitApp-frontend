import { useState } from 'react';
import { useAppDispatch,useAppSelector } from '../app/hooks';
import {
  setNotLikedProducts,
  selectForm
} from '../reducers/formReducer';
import BigTile from '../components/BigTile';
import './JoinForm.scss';
import { Link } from "react-router-dom";
import NotLikedProductsData from '../data/NotLikedProductsData';
import Tile from '../components/Tile';
import DescriptionTile from '../components/DescriptionTile';

export default function JoinFormStep7() {
  const form = useAppSelector(selectForm);
  const dispatch = useAppDispatch();
  const [notLikedProductsData, setNotLikedProductsData] = useState(NotLikedProductsData);

  interface NotLikedProductsDataProps {
    id: number,
    img: string,
    name: string,
    clicked: boolean
}

  function toggle(event: React.ChangeEvent<HTMLInputElement>, name: string){
    let newNotLikedProductsData: NotLikedProductsDataProps[];
    if(name === 'NIE POSIADAM'){
      newNotLikedProductsData = notLikedProductsData.map(tile => ({...tile, clicked: tile.id === Number(event.currentTarget.id) ? !tile.clicked : false}))
    } else {
      newNotLikedProductsData = notLikedProductsData.map(tile => ({...tile, clicked: tile.name === 'NIE POSIADAM' ? false : tile.id === Number(event.currentTarget.id) ? !tile.clicked : tile.clicked}))
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
    <Link to='/join-form-step-8'><button disabled={form.form.notLikedProducts.length === 0}>Przejdź dalej</button></Link>
  </div>

  return (
    <div className="form-container">
      <BigTile content={pictureWithText} color="#f8bb4b"/>
      <BigTile content={notLikedProductsForm} color="#ffffff"/>
    </div>
  );
}

