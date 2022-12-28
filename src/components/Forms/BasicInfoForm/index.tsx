import './index.scss';
import { Selector } from '../..';
import { BasicInfoFormProps } from '../../../services/interfaces';
import { Title } from '../..';

export default function BasicInfoForm(props: BasicInfoFormProps) {
  const selectors = props.data.map((button: any, index: any) => {
    return (
      <Selector
        key={index}
        unit={button.unit}
        form_name={button.form_name}
        selected={button.selected}
        text={button.text}
        values={button.value}
      />
    );
  });

  return (
    <form className="basic-info-form">
      <Title title={props.title} />
      <div className="description">{props.description}</div>
      {selectors}
    </form>
  );
}
