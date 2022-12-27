import './index.scss';
import { Title } from '..'
import { TypeButton } from ".."
import { Description } from ".."

export default function DietTypeAndActivityForm(props: any) {
    const buttons = props.data.map((button: any, index: number) => {
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

    const description= props.data.filter((button: any) => button.selected)[0].description;
    
    return(
        <div className='diet-type-form'>
            <div className='title-and-buttons'>
                <Title title={props.title}/>
                <div className='diet-buttons'>
                    {buttons}
                </div>
            </div>
            <Description 
                title={description.title}
                text={description.description}
                video={description.video}
            />
        </div>
    );
  }

