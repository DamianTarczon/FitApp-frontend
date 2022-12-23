import './index.scss';
import { RadioSelectorProps } from '../../services/interfaces';

export default function RadioSelector(props: RadioSelectorProps) {
  return (
    <button className="gender-select-button">
      <span className="gender-icon">
        <img src={props.icon} />
      </span>
      <span className="select-text">{props.text}</span>
      <span className="select-icon">
        {props.selected ? <img src="/assets/icons/selected.svg" /> : <img src="/assets/icons/no-selected.svg" />}
      </span>
    </button>
  );
}
