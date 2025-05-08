function Cart() {
    return (
        <div class='w-[400px] h-auto bg-gray-200 p-5 rounded-2xl flex flex-col gap-4 overflow-hidden'>
            <h1 class='text-orange-700 font-bold text-2xl'>Your Cart (0)</h1>
            <div class='flex flex-col items-center p-4'>
                <img src="/public/assets/images/illustration-empty-cart.svg" alt="" class='w-[150px]' />
                <p>Your added items will appear here</p>
            </div>
        </div>
    )
}

export default Cart