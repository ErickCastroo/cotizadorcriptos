
import { currencies } from '@/data'

import '@/components/Form/form.css'


function FormCriptos() {
  return (
    <form className='form'>
      <div className='field'>
        <label htmlFor='currency'>Moneda</label>
        <select
          name='currency'
          id='currency'
        >
          <option value=' '>-- Seleccione --</option>
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>

      <div className='field'>
        <label htmlFor='cripto'>CriptoMoneda</label>
        <select
          name='cripto'
          id='cripto'
        >
          <option value=' '>-- Seleccione --</option>
        </select>
      </div>
      <input type='submit' value='cotizar' />
    </form>
  )
}

export { FormCriptos }