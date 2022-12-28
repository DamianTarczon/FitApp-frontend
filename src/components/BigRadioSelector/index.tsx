import './index.scss';
import { BigRadioSelectorProps } from '../../services/interfaces';

export default function BigRadioSelector(props: BigRadioSelectorProps) {
  const styles = {
    backgroundColor: props.selected ? '#FFF8EB' : '#fff'
  }
  return (
    <button className="big-radio-button" style={styles}>
      <span className="big-radio-text">{props.text}</span>
      <span className="big-radio-icon">
        {props.selected ? <img src="/assets/icons/selected.svg" alt={props.text}/> : <img src="/assets/icons/no-selected.svg" alt={props.text}/>}
      </span>
      <span className="icon">
        <img src={props.icon} alt={props.text} />
      </span>
      <span className="big-radio-description">{props.description}</span>
    </button>
  );
}
