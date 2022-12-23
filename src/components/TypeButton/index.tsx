import './index.scss';

export default function TypeButton(props: any) {
  const maleIcon: string = '/assets/icons/male-icon.svg'
  const femaleIcon: string = '/assets/icons/female-icon.svg'
  const selectedIcon: string = '/assets/icons/selected.svg'
  const noSelectedIcon: string = '/assets/icons/no-selected.svg'



    return (
      <button className="select-button">
        <div className='icon-with-select'>
            <span className="icon"><img src={props.value === 'male' ? maleIcon : femaleIcon}/></span>
            <span className="selected-icon"><img src={props.selected ? selectedIcon : noSelectedIcon}/></span>
        </div>
        <div className="text">{props.text}</div>
      </button>
    );
  }