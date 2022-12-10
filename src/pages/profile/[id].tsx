/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/img-redundant-alt */

import React, { useRef, useState, useEffect } from "react";


import NavBar from "../../components/Navbar";

import { Suspense } from "react";
import { useRouter } from "next/router";
import  Image  from "next/image";

import { prisma } from "../../lib/prisma";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
 
  const id = query.id

    const user = await prisma.user.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        avatar: true,
        tours: {
          select: {
            id: true,
            title: true,
            photo: true,
            tambnail: true,
            imgs: {
              select: {
                url: true,
              }
            }
          },
        },
      },
    });

return {
  props: {
      user: user,
    
  },
    };
    
  

 

};




function App(props: any) {
  const user = props.user;
 

  
let tour = user.tours.map(function(element){
  return element;
}); 

const pasta = "../pano/";

  
 const router = useRouter();
 const parametro = router.query.id;
 const baseURL = "http://localhost:3000/api/users/select?id=";
 

  return (
    <div style={{ width: "100vW", height: "50vH", background: "#723983" }}>
      
      <NavBar />

<h1>PAGINA DO REVENDEDOR</h1>
    


      <Image src={user.avatar} 
                  width={150}
                  height={150}
                  priority
                  />






      <br></br>
     

<br></br>
<section className="overflow-hidden text-gray-700 ">
  <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
    <div className="flex flex-wrap -m-1 md:-m-2">

            

            {tour.map((data, key) => {
      
              return (
                
                
                
                
                
                <div key={key}>
           <div className="flex flex-wrap w-1/3">
                    <div className="w-full p-1 md:p-2">
                      
                    <p>{data.title}</p>
            <a href={pasta + data.id} className="group">
               
                      
                <Image src={data.photo} 
                  width={700}
                  height={500}
                  priority
                  className="block object-cover object-center w-full h-full rounded-lg" />
                      
            </a>
          
                      
                      
        </div>
            </div>
                  
          </div>) 
        }
      )} 
  
            

    </div>
  </div>
</section>
    
   
      
      <br></br>





    </div>
  );
}

export default App;





