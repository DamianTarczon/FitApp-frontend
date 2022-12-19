import { useState } from 'react';
import { useAppDispatch } from '../app/hooks';
import {
  setAllergens,
  selectForm,
  setNotLikedProducts,
} from '../reducers/formReducer';
import BigTile from '../components/BigTile';
import './JoinFormStep7.scss';
import { Link } from "react-router-dom";
import NotLikedProductsData from '../data/NotLikedProductsData';
import Tile from '../components/Tile';

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
        className={product.clicked ? 'product-clicked' : 'product-tile'}
        img={product.img}
        name={product.name}
        handleClick={toggle}
      />
    )
  })

  const pictureWithText = 
  <div>
    <h1>Lubie, nie lubię..</h1>
    <p>Zdjecie</p>
    <h4>Najczęściej odrzucane produkty</h4>
  </div>

  const notLikedProductsForm = 
  <div className='products-div'>
    <h2>Czego nie lubisz?</h2>
    <div className='container'>
      {notLikedProductsTiles}
    </div>
    <Link to='/join-form-step-5'><button>Przejdź dalej</button></Link>
  </div>

  return (
    <div className="form-container">
      <BigTile content={pictureWithText} color="orange"/>
      <BigTile content={notLikedProductsForm} color="white"/>
    </div>
  );
}

