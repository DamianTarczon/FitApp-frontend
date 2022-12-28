import { DescriptionProps } from '../../services/interfaces';
import './index.scss';

export default function Description(props: DescriptionProps){
    return(
        <div className='description-div'>
            <div className='description-title'>{props.title}</div>
            <div className='description-text'>
                {props.text}
            </div>
            {props.video && 
            <>
                <br/>
                <a href={props.video}><img src="/assets/icons/film.svg" />Zobacz video</a>
            </>}
            {props.trainings && 
            <div className='training-description'>
                <p>{props.trainings.number}</p>
                <div className='vl'></div>
                <p>{props.trainings.shortDescription}</p>
            </div>}
        </div>
    );
}
