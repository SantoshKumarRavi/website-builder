import React from 'react'

const Notification = () => {
  return (
    <>
    <h1 className='text-left my-4 px-8 text-3xl'>Important Notification</h1>
    <div
    class=" py-3  flex  justify-between px-8"
  >
    <h1 className='bg-orange-300'>logo</h1>
    <p class="  font-medium text-left">
      Love Alpine JS?
      Check out this new deep dive course!
      Love Alpine JS?
      Check out this new deep dive course!Love Alpine JS?
      Check out this new deep dive course!Love Alpine JS?
      Check out this new deep dive course!
    </p>
  <div className='flex w-32  pr-4 justify-end items-end '>
  <a
      class="text-sm font-medium text-indigo-600 hover:text-indigo-300"
      href="#home"
    >
      {false?"Download":"Checkout"}
    </a>
  </div>
  </div>
  <div
    class=" py-3  flex  justify-between px-8"
  >
    <h1 className='bg-orange-300'>logo</h1>
    <p class="  font-medium text-left">
      Love Alpine JS?
      Check out this new deep dive course!
      Love Alpine JS?
      Check out this new deep dive course!Love Alpine JS?
      Check out this new deep dive course!Love Alpine JS?
      Check out this new deep dive course!
    </p>
  <div className='flex w-32  pr-4 justify-end items-end '>
  <a
      class="text-sm font-medium text-indigo-600 hover:text-indigo-300"
      href="#home"
    >
      {true?"Download":"Checkout"}
    </a>
  </div>
  </div>
  </>
  )
}

export default Notification