import './JoinForm.scss';
import {FormContainer, Header, StepBar, StepHeader} from '../components'


export default function JoinForm() {
  const buttonsProps = [
    {
      number: '1',
      text: 'Informacje',
      selected: true
    },
    {
      number: '2',
      text: 'Dieta',
      selected: false
    },
  ]
  return (
    <div>
      <Header title="KeepFit"/>
      <StepHeader buttons={buttonsProps} />
      <FormContainer />
      <StepBar />
    </div>
  );
}
