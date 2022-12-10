/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/img-redundant-alt */

import React, { useRef, useState, useEffect } from "react";


import NavBar from "../components/Navbar";

import { Suspense } from "react";

import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

import { prisma } from "../lib/prisma";
import  Image  from "next/image";

 
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const ZoomInExample = () => {
    const images = [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ];

    return (
        <Zoom scale={1.4} indicators={true}>
            {images.map((each, index) => (
                <div key={index} style={{ width: "100%" }}>
                    <img style={{ objectFit: "cover", width: "100%" }} alt="Slide Image" src={each} />
                </div>
            ))}
        </Zoom>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

 /* if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
*/
    // const users = await prisma.user.findFirst({
    //   select: {
    //     id: true,
    //     name: true,
    //     email: true, 
    //     avatar: true,
    //     tours: {
    //       select: {
    //         id: true,
    //         title: true,
    //         photo: true,
    //         tambnail: true,
         
    //       },
    //     },
    //   },
    // });

return {
  props: {
     // user: users,
    
  },
    };
};





function App(props: any) {
  const user = props.user;

  // let tour = user.tours.map(function(element){
  //     return element;
  // }); 


    
    
  
    const pano = "pano/";
    const profile = "profile/"

 // console.log(user.tours);


  return (
    <div style={{ width: "100vW", height: "50vH", background: "#723983" }}>

      <NavBar />
      
    <ZoomInExample/>

     
      <div className="bg-blue-100 rounded-lg py-5 px-6 text-base text-blue-700" role="alert">

      <h1 className="text-gray-900 text-center font-medium leading-tight text-5xl">Tour Virtual Personalite</h1>

    <p className="text-center">
            With virtual reality you can offer a modern and immersive experience to your audience.
        Through the virtual reality glasses and even through the computer or smartphone.
        Total interaction with your business's real environment, with actions ranging from just seeing information;
        until you place an order online. Don't lose space, win more customers, don't be left behind. Talk to us now.
    
    </p>
  </div>
   

      


      
      <br></br>
<section className="overflow-hidden text-gray-700 ">
  <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
    <div className="flex flex-wrap -m-1 md:-m-2">

            

    
  


            
      <div className="flex flex-wrap w-1/3">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/3">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/3">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/3">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp"/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/3">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"/>
        </div>
      </div>
    </div>
  </div>
</section>
    
   

      

      </div>
  
  );
}

export default App;



