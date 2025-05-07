import './App.css'
import Cart from './components/Cart'
import Datos from './components/Datos'


function App() {
  return (
    <>
      <section class='bg-gray-300 w-full grid grid-cols-[4fr_2fr] pt-8'>
        <section class=' flex flex-col pl-32'>
          <div> 
            <h1 class='font-bold text-4xl pb-8'>Desserts</h1>
          </div>
            <Datos></Datos>
        </section>
        <aside>
          <Cart></Cart>
        </aside>
      </section>
    </>
  )
}

export default App
