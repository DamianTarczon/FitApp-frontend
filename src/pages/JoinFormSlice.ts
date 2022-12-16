import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';


export interface JoinFormState {
    gender: string,

}

const initialState: JoinFormState = {
    gender: '',
};



export const joinFormSlice = createSlice({
  name: 'joinForm',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setGender: (state, action: PayloadAction<string>) => {
      state.gender = action.payload;
    },
  },
});

export const { setGender } = joinFormSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectForm = (state: RootState) => state.form;



export default joinFormSlice.reducer;
