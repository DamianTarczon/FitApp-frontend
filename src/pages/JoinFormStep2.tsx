import { useState } from 'react';
import { useAppDispatch } from '../app/hooks';
import { useNavigate } from 'react-router-dom';
import { setAge, setHeight, setWeight } from '../reducers/formReducer';
import BigTile from '../components/BigTile';
import './JoinForm.scss';
import DescriptionTile from '../components/DescriptionTile';

export default function JoinFormStep2() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [basicInfo, setBasicInfo] = useState({
    age: '',
    height: '',
    weight: '',
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setBasicInfo((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    dispatch(setAge(basicInfo.age));
    dispatch(setHeight(basicInfo.height));
    dispatch(setWeight(basicInfo.weight));
    navigate('/join-form-step-3');
  }

  const description = (
    <DescriptionTile
      title="ZACZYNAJMY!"
      description="To niezwykle ważne!
    Na podstawie twoich danych jesteśmy w stanie określić twoje zapotrzebowanie na różne składniki,
    określić dietę, itp."
      img="zdjecie"
      imgPosition="top"
    />
  );

  const basicForm = (
    <div className="form-div">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Wiek"
          name="age"
          value={basicInfo.age}
          onChange={handleChange}
          pattern="\d*"
          required
        />
        <input
          type="text"
          placeholder="Wzrost(cm)"
          name="height"
          value={basicInfo.height}
          onChange={handleChange}
          pattern="\d*"
          required
        />
        <input
          type="text"
          placeholder="Waga(kg)"
          name="weight"
          value={basicInfo.weight}
          onChange={handleChange}
          pattern="\d*"
          required
        />
        <button>Przejdź dalej</button>
      </form>
    </div>
  );

  return (
    <div className="form-container">
      <BigTile content={description} color="#f8bb4b" />
      <BigTile content={basicForm} color="#ffffff" />
    </div>
  );
}
