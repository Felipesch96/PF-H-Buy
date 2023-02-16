import styled from 'styled-components'
import { useState,useEffect } from "react";

const CarrouselImg=styled.img`
max-width:200px;
width:100%;
height:200px;
opacity:0;
transition:1s;
&.loaded{
  opacity:1;
}
`

const LandingPage = () => {
  const images= ["banner1.jpg","banner2.jpg","banner3.jpg"];  
  const [selectedIndex,setSelectedIndex]=useState(0)
  const [selectedImages,setSelectedImages]=useState(images[0])
  const [loaded,setLoaded]=useState(false)

  const selectNewImage=(index,images,next=true)=>{
    setLoaded(false)
    setTimeout(() => {
      const condition=next?selectedIndex<images.length-1:selectedIndex>0;
      const nextIndex=next?condition?selectedIndex+1:0:condition?selectedIndex-1:images.length-1;
      setSelectedImages(images[nextIndex])
      setSelectedIndex(nextIndex)
    }, 500);
  }
  
  const previous=()=>{
    selectNewImage(selectedIndex,images,false)
  }
  const next=()=>{
    selectNewImage(selectedIndex,images) 
  }

  useEffect(()=>{
    const reloj=setInterval(() => {
      selectNewImage(selectedIndex,images)
    }, 1000);
    return()=>clearInterval(reloj)
  })

  return (
    <div className="rounded-circle">
      <CarrouselImg src={require(`./media/${selectedImages}`)} alt="no funciona" className={loaded?"loaded":""} onLoad={()=>setLoaded(true)}/>
      <button onClick={previous}>{"<"}</button>
      <button onClick={next}>{">"}</button>
    </div>
  );
};

export default LandingPage;
