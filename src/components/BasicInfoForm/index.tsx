import './index.scss';
import { Selector } from '../../components';
import { GenderFormProps } from '../../services/interfaces';
import { Title } from '../../components'

export default function BasicInfoForm(props: any) {
  const selectors = props.buttons.map((button: any, index: any) => {
    return <Selector key={index} unit={button.unit} form_name={button.form_name} selected={button.selected} text={button.text} values={button.value} />;
  });

  return (
    <form className="basic-info-form">
      <Title title={props.title}/>
      <div className="description">{props.description}</div>
      {selectors}
    </form>
  );
}
