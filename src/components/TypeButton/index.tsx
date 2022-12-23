import './index.scss';
import { noSelectedIcon, selectedIcon, femaleIcon, maleIcon } from '../../assets/svg_icons';

export default function TypeButton(props: any) {
    return (
      <button className="select-button">
        <div className='icon-with-select'>
            <span className="icon">{props.value === 'male' ? maleIcon : femaleIcon}</span>
            <span className="selected-icon">{props.selected ? selectedIcon : noSelectedIcon}</span>
        </div>
        <div className="text">{props.text}</div>
      </button>
    );
  }