import './index.scss'
import { leftArrowIcon, rightArrowIcon } from '../../assets/svg_icons';

export default function StepBarButtons(){
    return(
        <div className="buttons">
            <button className="previous">
                {leftArrowIcon}
            </button>
            <button className="next">
                Dalej
                {rightArrowIcon}
            </button>
        </div>
    );
}