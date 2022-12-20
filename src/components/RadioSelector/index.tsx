import './index.scss'
import { noSelectedIcon, selectedIcon, femaleIcon, maleIcon } from '../../assets/svg_icons';

export default function RadioSelector() {
  return (
    <button className='gender-select-button'>
      <span className='gender-icon'>{femaleIcon}</span>
      <span className='select-text'>Text</span>
      <span className='select-icon'>{noSelectedIcon}</span>
    </button>
  );
}
