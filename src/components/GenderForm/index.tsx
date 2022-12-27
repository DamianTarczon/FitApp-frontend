import './index.scss';
import { RadioSelector } from '../../components';
import { GenderFormProps } from '../../services/interfaces';
import { Title } from '../../components';

export default function GenderForm(props: GenderFormProps) {
  const radioSelectors = props.data.map((button: any, index: any) => {
    return (
      <RadioSelector
        key={index}
        icon={button.icon}
        form_name={button.form_name}
        selected={button.selected}
        text={button.text}
        value={button.value}
      />
    );
  });

  return (
    <form className="gender-form">
      <Title title={props.title} />
      <div className="gender-form-container">{radioSelectors}</div>
    </form>
  );
}
