import './index.scss'
import { StepButtonProps } from '../../services/interfaces';
import RoundIcon from '../RoundIcon';

export default function StepButton(props: StepButtonProps) {
  return (
    <button className='step-button'>
      <RoundIcon 
      text={props.number} 
      selected={props.selected} 
      completed={props.completed} />
      {props.text}
    </button>
  );
}
