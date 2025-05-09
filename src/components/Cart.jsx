function Cart() {
    return (
        <section class='h-auto w-[450px] bg-white p-5 lg:ml-3 rounded-2xl flex flex-col gap-4'>
            <h1 class='text-orange-700 font-bold text-2xl'>Your Cart (0)</h1>

            {/* Esto aparece solamente cuando no hay items agregados al carrito */}
            <div class='flex flex-col items-center p-4'>
                <img src="assets/images/illustration-empty-cart.svg" alt="" class='w-[150px]' />
                <p>Your added items will appear here</p>
            </div>

            {/* Cuando se agreguen items al carrito se deben mostrar en este estilo */}
            <div class='flex justify-between'>
                <div class='flex gap-4'>
                    <img src="assets/images/image-macaron-thumbnail.jpg" alt="" class='w-16' />
                    <div class='flex flex-col'>
                        <p class='font-bold'>Classic Tiramisu</p>
                        <div class='flex gap-8'>
                            <span class='text-orange-700'>1x</span>
                            <p>$5.50</p>
                        </div>
                    </div>
                </div>
                <div class='flex items-center cursor-pointer'>
                    <img src="assets/images/icon-remove-item.svg" alt="" class='border rounded-full p-1 border-gray-400' />
                </div>
            </div>
            <hr class='text-gray-100'/>

            {/* Apartado de el total del precio de la orden */}
            <div class='flex justify-between text-xl pt-4 pb-4'>
                <p>Order Total:</p>
                <p class=' font-bold'>$46.50</p>
            </div>

            {/* Mensaje de carbon neutral y boton para confirmar compra */}
            <div class='flex justify-center bg-gray-100 p-3 rounded-lg'>
                <img src="assets/images/icon-carbon-neutral.svg" alt="" class='w-6' />    
                <p >This is a <span class='font-bold'>carbon-neutral</span> delivery</p>
            </div>
            <button class='bg-orange-600 text-white p-3 rounded-full cursor-pointer hover:bg-orange-700'>Confirm Order</button>
        </section>
    )
}

export default Cart