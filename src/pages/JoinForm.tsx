import './JoinForm.scss';
import {FormContainer, Header, StepBar, StepHeader} from '../components'


export default function JoinForm() {
  const buttonsProps = [
    {
      number: '1',
      text: 'Informacje',
      selected: false,
      completed: true,
    },
    {
      number: '2',
      text: 'Dieta',
      selected: true,
      completed: false,
    },
    {
      number: '3',
      text: 'Alergeny',
      selected: false,
      completed: false,
    },
    {
      number: '2',
      text: 'Dieta',
      selected: false,
      completed: false,
    },
    {
      number: '2',
      text: 'Dieta',
      selected: false,
      completed: false,
    },
    {
      number: '2',
      text: 'Dieta',
      selected: false,
      completed: false,
    },
  ]

  return (
    <div>
      <Header title="KeepFit"/>
      <StepHeader buttons={buttonsProps} />
      <FormContainer />
      <StepBar buttons={buttonsProps} />
    </div>
  );
}
