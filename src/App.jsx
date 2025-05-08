import './App.css'
import Cart from './components/Cart'
import Datos from './components/Datos'


function App() {
  return (
    <>
      <section class='bg-gray-300 w-full grid grid-cols-1 px-12 pt-8 lg:grid-cols-[4fr_2fr]'>
        <section class='flex flex-col justify-center items-center md:block'>
          <div> 
            <h1 class='font-bold text-4xl pb-8'>Desserts</h1>
          </div>
            <Datos></Datos>
        </section>
        <aside class='flex justify-center md:block'>
          <Cart></Cart>
        </aside>
      </section>
    </>
  )
}

export default App
