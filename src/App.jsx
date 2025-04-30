import './App.css'
import Datos from './components/Datos'


function App() {
  return (
    <>
      <section className='w-full grid grid-cols-[4fr_2fr]'>
        <section className='bg-gray-300 flex flex-col pl-32'>
          <div> 
            <h1 className='font-bold text-4xl pb-8 pt-4'>Desserts</h1>
          </div>
            <Datos></Datos>
        </section>
        <aside className=' bg-red-500'>
          <p>Hola</p>
        </aside>
      </section>
    </>
  )
}

export default App
