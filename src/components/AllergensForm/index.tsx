import './index.scss';
import { RadioSelector } from '..';
import { AllergensFormProps } from '../../services/interfaces';
import { Title } from '..';

export default function AllergensForm(props: AllergensFormProps) {
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
    <form className="allergen-form">
      <Title title={props.title} />
      <div className="description">{props.description}</div>
      <div className="selector-container">{radioSelectors}</div>
    </form>
  );
}
