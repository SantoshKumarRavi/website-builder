import React,{useEffect, useLayoutEffect, useRef,useState} from 'react'

const AchievementCard = ({data}) => {
  const Imageref = useRef(null);
  const [ImageContainerwidth, setImageContainerwidth] = useState(0);
  const [ImageContainerheight, setImageContainerheight] = useState(0);
  const[imageWH,setimageWH]=useState(0)
  function getListSize(){
    console.log("working",Imageref.current.offsetWidth);
    setImageContainerwidth(Imageref.current.offsetWidth);
    setImageContainerheight(Imageref.current.offsetHeight);
  }
  useEffect(()=>{
    getListSize()
  },[])
  useEffect(() => {
    window.addEventListener("resize", getListSize);
    return ()=>window.removeEventListener("resize", getListSize)
  });
  useEffect(()=>{
    if(ImageContainerwidth<=ImageContainerheight){
      setimageWH(ImageContainerwidth)
    }else{
      setimageWH(ImageContainerheight)
    }
  },[ImageContainerheight,ImageContainerwidth])
  return (
    <div  className="w-full px-5 h-96 xl:h-[calc(600px)] flex justify-center items-center      ">
    <div style={{}} ref={Imageref}   className="flex-1  h-full  flex justify-center items-center">{/*flex-1 w-4/5  h-4/5  style={{height:"70%"}} */}
      <div className='flex justify-end pr-2 md:pr-8 w-full h-full items-center rounded-full'>{/*lg:w-96 lg:h-96 md:w-72 md:h-72 sm:w-60 sm:h-60 w-44 h-44 */}
      <div
              style={{width:imageWH,height:imageWH}}
              className="h-36 md:w-96 md:h-96 w-36 border-4 md:border-8 border-theme	border-solid		  rounded-full "//
              >
        <img
              className="w-full h-full rounded-full "
              alt=""
              src={`${data?.image}`}
            />
  
      </div>
         {/* <video controls className="w-full h-full">
        <source className="w-full h-full" src={src} type="video/mp4" />
      </video> */}
      </div>
      
    </div>
    <div  className="flex-1 flex  h-full   flex-col justify-center items-start">{/*flex-1 w-1/5 style={{height:"20%"}} */}
    <h1 className=" text-xs text-left  md:text-xl my-1 md:my-4 font-semibold ">
      {data?.title}
    </h1>
    <p className=" text-xs md:text-lg text-left ">
      {data?.description}
    </p>
    </div>
  </div>
  )
}

export default AchievementCard