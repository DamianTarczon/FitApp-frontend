import './index.scss';
import { RadioSelector } from '../../components';
import { GenderFormProps } from '../../services/interfaces';
import { Title } from '../../components'

export default function GenderForm({ buttons }: GenderFormProps) {
  const radioSelectors = buttons.map((button, index) => {
    return <RadioSelector key={index} selected={button.selected} text={button.text} gender={button.value} />;
  });

  return (
    <form className="form">
      <Title title='Wybierz swoją płeć'/>
      {radioSelectors}
    </form>
  );
}
