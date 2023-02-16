import styled from 'styled-components'
import { useState,useEffect } from "react";

const CarrouselImg=styled.img`
width:100%;
height:500px;
opacity:0;
transition:1s;
&.loaded{
  opacity:1;
}
`

const LandingPage = () => {
  const images= ["baner1.jpg","baner2.jpg","baner0.jpg"];  
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
    }, 3000);
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
