import { useAppDispatch } from '../app/hooks';
import { setGender } from '../reducers/formReducer';
import BigTile from '../components/BigTile';
import './JoinForm.scss';
import { Link } from 'react-router-dom';

export default function JoinFormStep1() {
  const dispatch = useAppDispatch();

  const button1 = (
    <Link to="/join-form-step-2">
      <button className="gender-button" onClick={() => dispatch(setGender('male'))}>
        Male
      </button>
    </Link>
  );

  const button2 = (
    <Link to="/join-form-step-2">
      <button className="gender-button" onClick={() => dispatch(setGender('female'))}>
        Female
      </button>
    </Link>
  );

  return (
    <div className="form-container">
      <BigTile content={button1} color="#f8bb4b" />
      <BigTile content={button2} color="#ffffff" />
    </div>
  );
}
