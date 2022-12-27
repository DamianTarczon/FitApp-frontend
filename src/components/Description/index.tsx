import './index.scss';

export default function Description(props: any){
    return(
        <div className='description-div'>
            <div className='description-title'>{props.title}</div>
            <div className='description-text'>
                {props.text}
            </div>
            <br/>
            <br/>
            <a href="https://www.youtube.com/"> Zobacz video</a>
        </div>
    );
}
