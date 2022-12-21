import './index.scss';
import { RoundIconProps } from '../../services/interfaces';

export default function RoundIconWithText(props: RoundIconProps) {
  const styles = props.completed ? 'round-icon completed' : props.selected ? 'round-icon selected' : 'round-icon';
  return <div className={styles}>{props.text}</div>;
}
