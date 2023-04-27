import React, { useEffect,useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import Header from './components/Header';
// import { BrowserRouter as Router } from 'react-router-dom';
import Herocard from './components/Herocard';
import Notification from './components/Notification';
import About from './components/About';
import Achievements from './components/Achievements';
import UpcomingEvents from './components/UpcomingEvents';
import Gallery from './components/Gallery';
import ExtraActivity from './components/ExtraActivity';
import Cocurricular from './components/Cocurricular';
import Facility from './components/Facility';
import Curriculum from './components/Curriculum';
import Faculty from './components/Faculty';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function Website() {
const [Data,setData]=useState({})
const [loading,setLoading]=useState(false)
useEffect(async()=>{
setLoading(true)
await fetch("http://localhost:3000/api/v1/websites/schools/69a4b6ed-ae04-4553-8342-15a43e914f4a").then(async(res)=>{//bfff4c75-5eb5-445c-bfd1-bb4b62a586fb
  if(res?.data?.length>0){
    await fetch(`http://localhost:3000/api/v1/sites/${res?.data[res?.data?.length-1]?._id}/pages`).then( async(pages)=>{
      if(pages?.data?.length>0){
        await fetch(`http://localhost:3000/api/v1/sites/${res?.data[res?.data?.length-1]?._id}/pages/${pages?.data[pages?.data?.length-1]?._id}`).then((page)=>{
          setData(page?.data)
          console.log("page?.data",page?.data);
        })
      }

    })
  }
}).catch((err)=>{
  console.log("err in website", err);
}).finally(()=>{
  setLoading(false)
})
},[])
  return (
          <div id="home" className="flex flex-col min-h-screen overflow-hidden bg-white">
              <Header ContactNo={Data?.data?.contact_number}
              image={Data?.data?.logo_image} 
              />
              <Herocard
              title={Data?.data?.title}
              Description={Data?.data?.description}
              Hero_image={Data?.data?.hero_image}
              />
              <Notification
              Notification={Data?.Notification}
              />
              <About About={Data?.data?.about}/>
              <Achievements Achievements={Data?.Achievement}/>
              <UpcomingEvents Events={Data?.Event}/>
              <Gallery Gallery={Data?.Gallery}/>
              <ExtraActivity ExtraActivity={Data?.Activity?.find((x)=>x.category==="extra-curricular")}/>
              <Cocurricular CoActivity={Data?.Activity?.find((x)=>x.category==="co-curricular")}/>
              <Facility Facility={Data?.Facility}/>
              <Curriculum Curriculum={Data?.Curriculum}/>
              <Faculty Faculty={Data?.Faculty}/>
              <Footer image={Data?.data?.logo_image} 
              Address={Data?.data?.address}
              Email={Data?.data?.email}
              ContactNo={Data?.data?.contact_number}
              Media={Data?.data?.media}
              />
          <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
          </div>
  );
}

export default Website;
