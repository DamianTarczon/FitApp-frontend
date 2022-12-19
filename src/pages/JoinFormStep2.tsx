import { useAppDispatch,useAppSelector } from '../app/hooks';
import { useNavigate } from "react-router-dom"
import {
  setAge,
  setHeight,
  setWeight,
  selectForm
} from '../reducers/formReducer';
import BigTile from '../components/BigTile';
import './JoinForm.scss';
import DescriptionTile from '../components/DescriptionTile';

export default function JoinFormStep2() {
  const form = useAppSelector(selectForm);
  const dispatch = useAppDispatch();
  const navigate = useNavigate()



  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void{
    event.preventDefault()
    navigate("/join-form-step-3")
  }

  const description = <DescriptionTile
    title = 'ZACZYNAJMY!'
    description='To niezwykle ważne!
    Na podstawie twoich danych jesteśmy w stanie określić twoje zapotrzebowanie na różne składniki,
    określić dietę, itp.'
    img='zdjecie'
    imgPosition='top'
  />

  const basicForm = 
  <div className='form-div'>
    <form onSubmit={handleSubmit}>
      <input 
        type='text'
        placeholder='Wiek'
        name='age'
        value={form.form.age}
        onChange={(e) => dispatch(setAge(e.target.value))}
        pattern="\d*"
        required
      />
      <input 
        type='text'
        placeholder='Wzrost(cm)'
        name='height'
        value={form.form.height}
        onChange={(e) => dispatch(setHeight(e.target.value))}
        pattern="\d*"
        required
      />
      <input 
        type='text'
        placeholder='Waga(kg)'
        name='weight'
        value={form.form.weight}
        onChange={(e) => dispatch(setWeight(e.target.value))}
        pattern="\d*"
        required
      />
      <button>Przejdź dalej</button>
    </form>
  </div>

  return (
    <div className="form-container">
      <BigTile content={description} color="#f8bb4b"/>
      <BigTile content={basicForm} color="#ffffff"/>
    </div>
  );
}
