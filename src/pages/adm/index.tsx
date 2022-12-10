/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-key */
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Router from "next/router";
import { signIn, signOut } from "next-auth/react";

import NavBar from "../../components/Navbar";
import Bio from "../../components/Bio";
import Footer from "../../components/Footer";
import CreateTour from "../../components/CreateTour";

import React from "react";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

import { prisma } from "../../lib/prisma";
import  Image  from "next/image";

 

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

    const user = await prisma.user.findFirst({
      where: {
        email: session?.user?.email,
      },
      select: {
        id: true,
        name: true,
        email: true,
        avatar: true,
 
      },
    });


      
  console.log(user);

    if (!user) {
      const result = await fetch("http://localhost:3000/api/users/create", {
        method: "POST",
        body: JSON.stringify({
          name: session.user?.name,
          email: session.user?.email,
          avatar: session.user.image,
          title: "",
          bio: "",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } 


return {
  props: {
      user: user,
    
  },
    };
    
  

 

};



export default function Component(props: any) {
  const user = props.user;


// let tour = user.tours.map(function(element){
//     return element;
// }); 
  
//   const pasta = "pano/";
  
  return (
    <>
      <NavBar />

   
      <br></br>
     
      <Bio/>
      <br></br>
     
     
<CreateTour/>
<br></br>
<section className="overflow-hidden text-gray-700 ">
  <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
    <div className="flex flex-wrap -m-1 md:-m-2">

     
            
  
    </div>
  </div>
</section>
    
   
      
      <br></br>




      <Footer />
  </>
  );
}
