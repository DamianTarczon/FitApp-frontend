import './index.scss'
import {GenderForm} from '../../components'
import { FormContainerProps } from '../../services/interfaces';

export default function FormContainer({buttons}: FormContainerProps) {
  return (
    <div className='form-container'>
      <GenderForm buttons={buttons}/>
    </div>
  );
}
