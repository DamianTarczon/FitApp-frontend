import './index.scss';
import { RadioSelectorProps } from '../../services/interfaces';

export default function RadioSelector(props: RadioSelectorProps) {
  const styles = {
    backgroundColor: props.isLast ? 'transparent' : props.selected ? '#FFF8EB' : '#fff'
  }
  return (
    <button className="radio-selector-button" style={styles}>
      {props.icon !== '' && <span className="radio-icon">
        <img src={props.icon} />
      </span>}
      <span className="select-text">{props.text}</span>
      <span className="select-icon">
        {props.selected ? <img src="/assets/icons/selected.svg" /> : <img src="/assets/icons/no-selected.svg" />}
      </span>
    </button>
  );
}
