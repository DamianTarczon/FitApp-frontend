import './index.scss';
import { Title } from '../../components'
import { TypeButton } from "../../components"
import { Description } from "../../components"

export default function DietTypeForm(props: any) {
    const buttons = props.data.map((button: any, index: any) => {
        return <TypeButton 
            key={index}
            form_name='name'
            selected={button.selected}
            text={button.text}
            value={button.value}

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
            />
        </div>
    );
  });

  const description = props.buttons.filter((button: any) => button.selected)[0].description;

  return (
    <div className="diet-type-form">
      <div className="title-and-buttons">
        <Title title={props.title} />
        {buttons}
      </div>
      <Description title={description.title} text={description.description} />
    </div>
  );
}
