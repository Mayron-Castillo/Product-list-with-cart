import data from '../data/data.json'

function Datos() {
    return (
        <section>
        <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3'>
            {data.map((item,index)=>{
                return(
                <div key={index} className='flex flex-col gap-2 items-start'>
                    <div className="relative flex flex-col items-center">
                        <img src={item.image.desktop} alt="" className="w-[280px] rounded-lg" />
                        
                        <div className="bg-[#FEFFFF] w-[180px] rounded-full flex justify-center p-3 border border-[#AB9F9F] -mt-6">
                            <button class='flex gap-2 cursor-pointer'>
                                <img src="assets/images/icon-add-to-cart.svg" alt="" />
                                <p class='font-bold text-sm'>Add To Cart</p>
                            </button>
                        </div>
                    </div>

                    <div className='pb-6 pt-2'>
                        <p className='text-gray-500 text-sm'>{item.category}</p>
                        <h2 className='font-bold text-lg'>{item.name}</h2>
                        <p className='text-orange-600 font-bold text-lg'>${item.price}</p>
                    </div>
                        
                </div>
                )
            })}
        </div>

        </section>
    )
}

export default Datos