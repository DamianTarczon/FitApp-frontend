import './index.scss';
import { Title } from '../../components'
import { RadioSelector } from "../../components"

export default function DietTypeForm(props: any) {
    console.log(props);
    const buttons = props.data.map((button: any, index: any) => {
        // return <RadioSelector />
    });

    return(
        <div className='diet-type-form'>
            <div className='title-and-buttons'>
                <Title title={props.title}/>
            </div>
            <div className='description'>
                test
            </div>
        </div>
    );
}