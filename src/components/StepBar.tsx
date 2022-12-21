import { StepBarButtons } from '../components'
import { StepHeaderProps } from './../services/interfaces';
import { StepCounter } from '../components';

export default function StepBar(props: StepHeaderProps) {
  const selectedButton = props.buttons.filter((button) => button.selected)[0];

  return (
    <div className="footer">
      <StepCounter 
        number={selectedButton.number}
        selected={selectedButton.selected}
        completed={selectedButton.completed}
        numberOfButtons={props.buttons.length}
      />
      <StepBarButtons />
    </div>
  );
}
