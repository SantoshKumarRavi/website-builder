import React from 'react'

const Herocard = () => {
   const FeatImage01="https://thumbs.dreamstime.com/b/boy-red-super-hero-cape-mask-flying-air-happiness-freedom-childhood-movement-people-concept-62398244.jpg"
  return (
<div className="grid gap-20 ">{/*mt-24 md:mt-0 */}
<div className="md:grid md:grid-cols-12 md:gap-6 items-center">
  {/* Image */}
  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
    <img className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01} width="540" height="405" alt="Features 01" />
  </div>
  {/* Content */}
  <div className="max-w-xl  md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
    <div className="md:pr-4 lg:pr-12 xl:pr-16">
      <div className="font-architects-daughter text-left text-6xl pl-16  mb-2">World Class Education for the Future</div>
      <h3 className="h3 px-16 mt-6 mb-3 text-xl text-justify">We give you to  in the world that is and to help bring about a world that ought to be</h3>
    </div>
  </div>
</div>
</div>

    
    )
}

export default Herocard