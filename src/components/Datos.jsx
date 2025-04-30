import data from '../data/data.json'

function Datos() {
    return (
        <section>
        <div className='grid grid-cols-3 gap-4'>
            {data.map((item,index)=>{
                return(
                <div key={index} className='flex flex-col gap-2'>
                    <img src={item.image.desktop} alt="" className='w-[250px] rounded-lg' />

                    <div className='pt-3'>
                        <p className='text-gray-500 text-sm'>{item.category}</p>
                        <h2 className='font-bold'>{item.name}</h2>
                        <p className='text-orange-600 font-bold'>${item.price}</p>
                    </div>
                        <button className='bg-amber-300 w-[250px] rounded-lg cursor-pointer'> 🛒 Add To Cart </button>
                </div>
                )
            })}
        </div>

        </section>
    )
}

export default Datos