import './index.scss'
import {RadioSelector} from '../../components'

export default function GenderForm() {
  return (
      <form className='form'>
        <div>Wybierz swoją płeć</div>
        <RadioSelector />
        <RadioSelector />
      </form>
  );
}
