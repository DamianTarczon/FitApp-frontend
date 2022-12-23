import './index.scss';
import { StepCounterProps } from '../../../services/interfaces';
import { RoundIconWithText } from '../..';

export default function StepCounter(props: StepCounterProps) {
  return (
    <div className="step">
      <p>Krok</p>
      <RoundIconWithText text={props.number} selected={props.selected} completed={props.completed} />
      <p>z {props.numberOfButtons}</p>
    </div>
  );
}
