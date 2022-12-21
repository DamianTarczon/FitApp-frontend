import './index.scss';
import { StepButtonProps } from '../../services/interfaces';
import { RoundIconWithText } from '../../components';

export default function StepButton(props: StepButtonProps) {
  return (
    <button className="step-button">
      <RoundIconWithText text={props.number} selected={props.selected} completed={props.completed} />
      {props.text}
      {props.selected && <div className="triangle"></div>}
    </button>
  );
}
