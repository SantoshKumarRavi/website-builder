import React from "react";
import NotificationCard from "../subcomponents/NotificationCard";
import bell from "../assests/bell.svg"

const Notification = ({Notification}) => {
  return (
    <>
    {Notification?.length>0&&
      <div className="my-4">
        <div className="flex  px-8  items-center">
        <div  className="text-left   text-xl font-semibold	text-gray-800">
          Important Notification
          </div>
        <img  src={bell}  className="w-8 h-8 "  alt=""/>
        </div>
        {Notification?.map((obj,i)=>{
          if(obj?.pdf==="true"){
            return <NotificationCard key={i} data={obj} download/>
          }
           return <NotificationCard key={i} data={obj}/>
        })
        }
      </div>
    }
    </>
  );
};

export default Notification;
