import './index.scss';
import { RadioSelector } from '../../components';
import { GenderFormProps } from '../../services/interfaces';
import { Title } from '../../components'

export default function BasicInfoForm(props: any) {
  const radioSelectors = props.buttons.map((button: any, index: any) => {
    return <RadioSelector key={index} selected={button.selected} text={button.text} gender={button.value} />;
  });

  return (
    <form className="form">
      <Title title={props.title}/>
      {radioSelectors}
    </form>
  );
}
