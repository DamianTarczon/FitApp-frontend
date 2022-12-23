import './index.scss';
import { noSelectedIcon, selectedIcon, femaleIcon, maleIcon } from '../../assets/svg_icons';
import { SelectorProps } from '../../services/interfaces';

export default function Selector(props: SelectorProps) {

  const options = props.values.map(v =>{
    return <option value={v}>{v} {props.unit}</option>
  })

  return (
    <div className="select-container">
    <label className='select-label'>{props.text}</label>
    <select className="select-button">
      {options}
    </select>
    </div>
  );
}
