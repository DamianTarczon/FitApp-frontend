import './index.scss';

export default function TypeButton(props: any) {
  const selectedIcon: string = '/assets/icons/selected.svg'
  const noSelectedIcon: string = '/assets/icons/no-selected.svg'

    return (
      <button className="select-button">
        <div className='icon-with-select'>
            <span className="icon"><img src={props.icon}/></span>
            <span className="selected-icon"><img src={props.selected ? selectedIcon : noSelectedIcon}/></span>
        </div>
        <div className="text">{props.text}</div>
        {props.trainings && <div className='trainings'>{props.trainings}</div>}
      </button>
    );
  }