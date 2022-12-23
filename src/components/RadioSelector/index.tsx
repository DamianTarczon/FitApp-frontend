import './index.scss';
import { noSelectedIcon, selectedIcon, femaleIcon, maleIcon } from '../../assets/svg_icons';
import { RadioSelectorProps } from '../../services/interfaces';

export default function RadioSelector(props: RadioSelectorProps) {
  return (
    <button className="gender-select-button">
      <span className="gender-icon">{props.value === 'male' ? maleIcon : femaleIcon}</span>
      <span className="select-text">{props.text}</span>
      <span className="select-icon">{props.selected ? selectedIcon : noSelectedIcon}</span>
    </button>
  );
}
