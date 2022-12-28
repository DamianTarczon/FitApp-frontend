import './index.scss';
import { RadioSelector } from '../..';
import { DiseasesFormProps } from '../../../services/interfaces';
import { Title } from '../..';

export default function DiseasesForm(props: DiseasesFormProps) {
  const radioSelectors = props.data.map((button: any, index: any) => {
    return (
      <RadioSelector
        key={index}
        icon={button.icon}
        form_name={button.form_name}
        selected={button.selected}
        text={button.text}
        value={button.value}
        isLast={index===(props.data.length-1)}
      />
    );
  });

  return (
    <form className="diseases-form">
      <Title title={props.title} />
      <div className="diseases-form-container">{radioSelectors}</div>
    </form>
  );
}
