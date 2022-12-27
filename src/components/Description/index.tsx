import './index.scss';

export default function Description(props: any){
    return(
        <div className='description-div'>
            <div className='description-title'>{props.title}</div>
            <div className='description-text'>
                {props.text.split("\n").map((i: any,key: any) => {
                    return <div key={key}>{i}</div>;
                })}
            </div>
        </div>
    );
}
