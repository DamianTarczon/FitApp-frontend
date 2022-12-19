import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';


export interface JoinFormState {
    form: {gender: string,
    age: string,
    height: string,
    weight: string,
    dietType: string,
    allergens: string[],
    activityLevel: string,
    numberOfMeals: string,
    notLikedProducts: string[],
    disease: string[]},
}

const initialState: JoinFormState = {
    form: {gender: '',
    age: '',
    height: '',
    weight: '',
    dietType: 'Reukcyjna',
    allergens: [],
    activityLevel: '',
    numberOfMeals: '',
    notLikedProducts: [],
    disease: []},
};



export const joinFormSlice = createSlice({
  name: 'joinForm',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setGender: (state, action: PayloadAction<string>) => {
      state.form.gender = action.payload;
    },
    setAge: (state, action: PayloadAction<string>) => {
        state.form.age = action.payload;
    },
    setHeight: (state, action: PayloadAction<string>) => {
        state.form.height = action.payload;
    },
    setWeight: (state, action: PayloadAction<string>) => {
        state.form.weight = action.payload;
    },
    setDietType: (state, action: PayloadAction<string>) => {
        state.form.dietType = action.payload;
    },
    setAllergens: (state, action: PayloadAction<string>) => {
       if (state.form.allergens.includes(action.payload)) {
        state.form.allergens.splice(state.form.allergens.indexOf(action.payload), 1)
       }
       else if(action.payload === 'NIE POSIADAM' || state.form.allergens.includes('NIE POSIADAM')) {
        state.form.allergens.splice(0, state.form.allergens.length);
        state.form.allergens.push(action.payload);
       } else {
        state.form.allergens.push(action.payload);
       }

    },
    setActivityLevel: (state, action: PayloadAction<string>) => {
        state.form.activityLevel = action.payload;
    },
    setNumberOfMeals: (state, action: PayloadAction<string>) => {
        state.form.numberOfMeals = action.payload;
    },
    setNotLikedProducts: (state, action: PayloadAction<string>) => {
        if (state.form.notLikedProducts.includes(action.payload)) {
            state.form.notLikedProducts.splice(state.form.notLikedProducts.indexOf(action.payload), 1)
           }
           else {
            state.form.notLikedProducts.push(action.payload)
           }
    },
    setDiseases: (state, action: PayloadAction<string>) => {
        if (state.form.disease.includes(action.payload)) {
            state.form.disease.splice(state.form.disease.indexOf(action.payload), 1)
           }
           else {
            state.form.disease.push(action.payload)
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
