import './index.scss';
import { Title } from '../..'
import { TypeButton } from "../.."
import { Description } from "../.."
import { ButtonProps, DietTypeAndActivityFormProps } from '../../../services/interfaces';

export default function DietTypeAndActivityForm(props: DietTypeAndActivityFormProps) {
    const buttons = props.data.map((button: ButtonProps, index: number) => {
        return <TypeButton 
            key={index}
            form_name='name'
            selected={button.selected}
            text={button.text}
            value={button.value}
            icon={button.icon}
            trainings={button.trainings}
        />
    });

    const selectedButton= props.data.filter((button: ButtonProps) => button.selected)[0];
    
    return(
        <div className='diet-type-form'>
            <div className='title-and-buttons'>
                <Title title={props.title}/>
                <div className='diet-buttons'>
                    {buttons}
                </div>
            </div>
            <Description 
                title={selectedButton.description.title}
                text={selectedButton.description.description}
                video={selectedButton.description.video}
                trainings={selectedButton.trainings}
            />
        </div>
    );
  }

