import './App.css'
import Cart from './components/Cart'
import Datos from './components/Datos'


function App() {
  return (
    <>
      <section class='bg-[#FDF8F4] w-11/12 mx-auto grid grid-cols-1 px-12 pt-8 mt-12 lg:grid-cols-[4fr_2fr]'>
        <section class='flex flex-col justify-center items-center md:block'>
          <div> 
            <h1 class='font-bold text-4xl md:text-5xl pb-8'>Desserts</h1>
          </div>
            <Datos></Datos>
        </section>
        <aside class='flex justify-center md:block mx-auto'>
          <Cart></Cart>
        </aside>
      </section>
    </>
  )
}

export default App
