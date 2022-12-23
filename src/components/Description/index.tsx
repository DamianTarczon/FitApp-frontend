import './index.scss'

export default function Description(props: any){
    return(
        <div className='description'>
            <div className='description-title'>{props.title}</div>
            <div className='description-text'>{props.text}</div>
        </div>
    );
}