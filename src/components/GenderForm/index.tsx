import './index.scss'
import {RadioSelector} from '../../components'
import { GenderFormProps } from '../../services/interfaces'

export default function GenderForm({buttons}: GenderFormProps) {

  const radioSelectors = buttons.map(button => {
    return <RadioSelector selected={button.selected} text={button.text} gender={button.value}/>
  })

  return (
      <form className='form'>
        {/* Damian ten div to placeholder na twojego labela */}
        <div>Wybierz swoją płeć</div>
        {radioSelectors}
      </form>
  );
}
