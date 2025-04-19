import './App.css'
import data from './data/data.json'

function App() {
  return (
    <>
      <section className='bg-gray-300 w-full h-lvh flex justify-center items-center'>
          {data.map((item,index)=>{
            return(
              <div key={index}>
                <h2>{item.name}</h2>
              </div>
            )
          })}
      </section>
    </>
  )
}

export default App
