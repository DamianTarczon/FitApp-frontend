import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';


export interface JoinFormState {
    gender: string,
    age: string,
    height: string,
    weight: string,
    dietType: string,
    allergens: string[],
    activityLevel: string,
    numberOfMeals: string,
    notLikedProducts: string[],
    disease: string[]
}

const initialState: JoinFormState = {
    gender: '',
    age: '',
    height: '',
    weight: '',
    dietType: '',
    allergens: [],
    activityLevel: '',
    numberOfMeals: '',
    notLikedProducts: [],
    disease: []
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
    setAge: (state, action: PayloadAction<string>) => {
        state.age = action.payload;
    },
    setHeight: (state, action: PayloadAction<string>) => {
        state.height = action.payload;
    },
    setWeight: (state, action: PayloadAction<string>) => {
        state.weight = action.payload;
    },
    setDietType: (state, action: PayloadAction<string>) => {
        state.dietType = action.payload;
    },
    setAllergens: (state, action: PayloadAction<string>) => {
       if (state.allergens.includes(action.payload)) {
        state.allergens.splice(state.allergens.indexOf(action.payload), 1)
       }
       else {
        state.allergens.push(action.payload)
       }
    },
    setActivityLevel: (state, action: PayloadAction<string>) => {
        state.activityLevel = action.payload;
    },
    setNumberOfMeals: (state, action: PayloadAction<string>) => {
        state.numberOfMeals = action.payload;
    },
    setNotLikedProducts: (state, action: PayloadAction<string>) => {
        if (state.notLikedProducts.includes(action.payload)) {
            state.notLikedProducts.splice(state.notLikedProducts.indexOf(action.payload), 1)
           }
           else {
            state.notLikedProducts.push(action.payload)
           }
    },
    setDiseases: (state, action: PayloadAction<string>) => {
        if (state.disease.includes(action.payload)) {
            state.disease.splice(state.disease.indexOf(action.payload), 1)
           }
           else {
            state.disease.push(action.payload)
           }
    },
    
  },
});

export const { setGender, setAge, setActivityLevel, setAllergens, setDietType, setDiseases, setHeight, setNotLikedProducts, setNumberOfMeals, setWeight } = joinFormSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectForm = (state: RootState) => state.form;



export default joinFormSlice.reducer;
