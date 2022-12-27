import './index.scss';

export default function Description(props: any){
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
            <>
                <br/>
                <p>{props.trainings}</p>
            </>}
        </div>
    );
}
