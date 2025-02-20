import { FormCriptos } from '@/components/Form'
import './index.css'

function App() {
  return (
    <div className='container'>
      <h1 className='app-tittle'>Cotizador <span>
        de criptomonedas</span></h1>
      <div className='content'>
        <FormCriptos />
      </div>
    </div>
  )
}

export { App }