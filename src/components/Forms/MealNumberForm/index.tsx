import './index.scss';
import { BigRadioSelector } from '../..';
import { MealNumberFormProps } from '../../../services/interfaces';
import { Title } from '../..';

export default function MealNumberForm(props: MealNumberFormProps) {
  const radioSelectors = props.data.map((button: any, index: any) => {
    return (
      <BigRadioSelector
        key={index}
        icon={button.icon}
        form_name={button.form_name}
        selected={button.selected}
        text={button.text}
        description={button.description}
        value={button.value}
      />
    );
  });

  return (
    <form className="meal-number-form">
      <Title title={props.title} />
      <div className="meal-number-form-container">{radioSelectors}</div>
    </form>
  );
}
