/* eslint-disable jsx-a11y/alt-text */

  import React from "react";
  import { GetServerSideProps } from "next";
  import { getSession } from "next-auth/react";
  
  import { prisma } from "../lib/prisma";
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
  
  




  
export default function TourList(props: any) {
    
  const user = props.user;


  let tour = user.tours.map(function(element){
      return element;
  }); 
    
    
  
    const pasta = "pano/";



    return (

    
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {tour.map((data, key) => {
          return (<div key={key}>
            <hr></hr>
            <br></br>
            <p>{data.title}</p>
            <a href={pasta + data.id} className="group">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <Image src={data.photo} 
                  width={300}
                  height={300}
                  priority
                  className="h-full w-full object-cover object-center group-hover:opacity-75" />
                </div>
            </a>
            <h3 className="mt-4 text-sm text-gray-700">{user.name}</h3>
           
          </div>) 
        }
      )} 

</div>
        </div>
        </div>

      
      
      
    )
  }
  