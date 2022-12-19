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
    diseases: string[],
}

const initialState: JoinFormState = {
    gender: '',
    age: '',
    height: '',
    weight: '',
    dietType: 'Reukcyjna',
    allergens: [],
    activityLevel: 'Niska',
    numberOfMeals: '5 POSIŁKÓW',
    notLikedProducts: [],
    diseases: [],
};

function updateList(list: string[],newElement: string){
    if (list.includes(newElement)) {
        list.splice(list.indexOf(newElement), 1)
       }
       else if(newElement === 'NIE POSIADAM' || list.includes('NIE POSIADAM')) {
        list.splice(0, list.length);
        list.push(newElement);
       } else {
        list.push(newElement);
       }
}

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
       updateList(state.allergens,action.payload);
    },
    setActivityLevel: (state, action: PayloadAction<string>) => {
        state.activityLevel = action.payload;
    },
    setNumberOfMeals: (state, action: PayloadAction<string>) => {
        state.numberOfMeals = action.payload;
    },
    setNotLikedProducts: (state, action: PayloadAction<string>) => {
        updateList(state.notLikedProducts,action.payload);
    },
    setDiseases: (state, action: PayloadAction<string>) => {
        updateList(state.diseases,action.payload);
    },
    
  },
});

export const { setGender, setAge, setActivityLevel, setAllergens, setDietType, setDiseases, setHeight, setNotLikedProducts, setNumberOfMeals, setWeight } = joinFormSlice.actions;

export const selectForm = (state: RootState) => state.form;

export default joinFormSlice.reducer;
