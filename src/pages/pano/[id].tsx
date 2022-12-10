/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/img-redundant-alt */

import React, { useRef, useState, useEffect } from "react";


import NavBar from "../../components/Navbar";

import { Suspense } from "react";
import { useRouter } from "next/router";





const Scene = () => {
  //const texture = useTexture(image);
  const [ImgUrl, setImgUrl] = useState("");
  const [Album, setAlbum] = useState([]);
  const router = useRouter();
  const parametro = router.query.id;
  const baseURL = "http://localhost:3000/api/tours/select?id=";

  async function init() {


    const response = (await fetch(`${baseURL+parametro}`, {
      method: "GET",
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
    },
    }).then((response) => {
   
      return response.json();
   
    }).then((data) => {


      setImgUrl(data.tour.photo);
      console.log(data.tour.photo);
      //console.log(data.tour.imgs.url);
// setar a cada tres segundos as url das imagens do tour com efeito zoomIn entre as imagens 360
      
    
    })
    

    )

   

  }
  
  useEffect(() => {
    init();
  });
  


  return (
   
    <>
      
     <h1>Lista produtos</h1>


      
    </>
  );
};




function App() {



  return (
    <div style={{ width: "100vW", height: "100vH", background: "#723983" }}>
      <NavBar />
      
 
<h1>pagina do produto</h1>
      
    </div>
  );
}

export default App;





