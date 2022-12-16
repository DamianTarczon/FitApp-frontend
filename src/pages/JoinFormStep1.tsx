import React from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import {
  setGender,
  selectForm,
} from './JoinFormSlice';

export default function JoinFormStep1() {
  const form = useAppSelector(selectForm);
  const dispatch = useAppDispatch();


  return (
    <div>
      <button onClick={() => dispatch(setGender('male'))}>Male</button>
      <button onClick={() => dispatch(setGender('female'))}>Female</button>
      {form.gender}
    
    </div>
  );
}

