import { useAppSelector } from '../app/hooks';
import {
  selectForm,
} from '../reducers/formReducer';
import { Link } from "react-router-dom";
import './JoinForm.scss';


export default function JoinFormStep9() {
  const form = useAppSelector(selectForm);


  return (
    <div className="form-results">
      <pre>{JSON.stringify(form,null, 2)}</pre>
      <Link to="/">Start over</Link>
    </div>
  );
}

