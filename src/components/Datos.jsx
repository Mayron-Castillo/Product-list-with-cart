import data from '../data/data.json'

function Datos() {
    return (
        <section>
        <div className='grid grid-cols-3 gap-2'>
            {data.map((item,index)=>{
                return(
                <div key={index} className='flex flex-col gap-2 items-start'>
                    <div className="relative flex flex-col items-center">
                        <img src={item.image.desktop} alt="" className="w-[280px] rounded-lg" />
                        
                        <div className="bg-yellow-50 w-[180px] rounded-full flex justify-center p-3 border border-amber-600 -mt-6">
                            <button class='flex gap-2 cursor-pointer'>
                                <img src="/public/assets/images/icon-add-to-cart.svg" alt="" />
                                <p>Add To Cart</p>
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