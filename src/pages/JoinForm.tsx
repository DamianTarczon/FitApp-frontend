import './JoinForm.scss';
import { FormContainer, Header, StepBar, StepHeader } from '../components';

export default function JoinForm() {
  //temporary data, later it will be from separated json
  const buttonsProps = [
    {
      number: '1',
      text: 'Informacje',
      selected: true,
      completed: false,
    },
    {
      number: '2',
      text: 'Dieta',
      selected: false,
      completed: false,
    },
    {
      number: '3',
      text: 'Alergeny',
      selected: false,
      completed: false,
    },
    {
      number: '4',
      text: 'Aktywnosc',
      selected: false,
      completed: false,
    },
    {
      number: '5',
      text: 'Preferencje i choroby',
      selected: false,
      completed: false,
    }
  ];

  //temporary data
  const formData = [
    {
      value: 'female',
      text: 'Jestem Kobieta',
      selected: true,
    },
    {
      value: 'male',
      text: 'Jestem Mezczyzna',
      selected: false,
    },
  ];

  return (
    <div>
      <Header title="KeepFit" />
      <StepHeader buttons={buttonsProps} />
      <FormContainer buttons={formData} />
      <StepBar buttons={buttonsProps} />
    </div>
  );
}
