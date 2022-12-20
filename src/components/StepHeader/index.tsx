import './index.scss'
import { StepHeaderProps } from '../../services/interfaces';
import {StepButton} from '../../components'

export default function StepHeader({buttons}: StepHeaderProps) {
  const buttonsComponent = buttons.map(button => {
    return <StepButton
      number={button.number}
      text={button.text}
      selected={button.selected}
      completed={button.completed}
      />
  })

  return (
    <div className='step-header-container'>
      {buttonsComponent}
    </div>
  );
}
