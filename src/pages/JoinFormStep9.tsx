import { useAppSelector } from '../app/hooks';
import {
  selectForm,
} from '../reducers/formReducer';
import './JoinFormStep9.scss';


export default function JoinFormStep9() {
  const form = useAppSelector(selectForm);

  const allergensList = form.form.allergens.map(a => a + ', ')

  const notLikedProductsList = form.form.notLikedProducts.map(a => a + ', ')

  return (
    <div className="form-results">
      <p>Płeć: {form.form.gender}</p>
      <p>Wiek: {form.form.age}</p>
      <p>Wzrost: {form.form.height}</p>
      <p>Waga: {form.form.weight}</p>
      <p>Typ diety: {form.form.dietType}</p>
      <p>Alergeny: {allergensList}</p>
      <p>Poziom aktywności: {form.form.activityLevel}</p>
      <p>Liczba posiłków: {form.form.numberOfMeals}</p>
      <p>Niechciane produkty: {notLikedProductsList}</p>
      <p>Choroby: {form.form.disease}</p>
    </div>
  );
}

