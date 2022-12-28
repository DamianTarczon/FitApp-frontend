import './index.scss';

export default function TypeButton(props: any) {
  const selectedIcon: string = '/assets/icons/selected.svg'
  const noSelectedIcon: string = '/assets/icons/no-selected.svg'

    return (
      <button className={props.selected ? "select-button button-selected" : "select-button"}>
        <span className="selected-icon"><img src={props.selected ? selectedIcon : noSelectedIcon} alt="select-icon"/></span>
        <span className="picture"><img src={props.icon} alt={props.icon}/></span>
        <div className="text">{props.text}</div>
        {props.trainings && <div className="training">{props.trainings.number}</div>}
      </button>
    );
  }