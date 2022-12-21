import './index.scss'
import { leftArrowIcon, rightArrowIcon } from '../../../assets/svg_icons';

export default function StepBarButtons(props: {number: string}){

    const style={
        display: props.number === '1' ? 'none' : ''
    };

    return(
        <div className="buttons">
            <button className="previous" style={style}>
                {leftArrowIcon}
            </button>
            <button className="next">
                Dalej
                {rightArrowIcon}
            </button>
        </div>
    );
}