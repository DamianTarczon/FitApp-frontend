import React from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import {
  setGender,
  selectForm,
} from './JoinFormSlice';
import BigTile from '../components/BigTile';

export default function JoinFormStep1() {
  const form = useAppSelector(selectForm);
  const dispatch = useAppDispatch();
  const content1 = <><button onClick={() => dispatch(setGender('male'))}>Male</button>
  <button onClick={() => dispatch(setGender('female'))}>Female</button>
  {form.gender}</>
  const content2 = <div>Hello world</div>

  return (
    <div className="form-container">
      <BigTile content={content1} color="red"/>
      <BigTile content={content2} color="blue"/>
      
    
    </div>
  );
}

