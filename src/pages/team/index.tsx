import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import React from "react";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "../../lib/prisma";
import Image from "next/image";
import Link from "next/link";

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
        status: true,
        product: {
          select: {
            id: true,
            title: true,
            price: true,
            stock: true,
            supplierUrl: true,
            photo: true,         
          }
        }
      },
});

//    if (user.status === 'ENDUSER') {
//      return {
//        redirect: {
//         destination: "/",
//          permanent: false,
//        },
//      };
//  }

    if (!user) {
      const result = await fetch("http://localhost:3000/api/users/create", {
        method: "POST",
        body: JSON.stringify({
          name: session.user?.name,
          email: session.user?.email,
          avatar: session.user.image,
          password: "",
          phone: "",
          title: "",
          bio: "",
          status: "ADM",
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


// component pai do index admin, recebe como filhos nav, cart, bio, etc..
export default function Component(props: any) {

  const user = props.user;
 
  let prod = [];
  if (user) {
     prod = user.product.map(function (element) {
      return element;
    });
  } 

  
  // se tiver produto a variavel mensag estará vazia fora do escopo que a define
  const mensag = "";
  
  if (prod == null || prod.length == 0 || prod === undefined) {
// se não tiver produto a variavel prod será um array vazio e a mensagem será exibida
    prod = [];
    //alert("Please add a product");
    const mensag = "Você ainda não adicionou produtos no seu catálogo.";
    
  }


  
  
  
  const profile = "./profile/";

  return (
    <div>
      
      <NavBar/>   

     <br></br>
      <h1 className="text-3xl font-bold underline">
      {user ? <Link href={profile+user.id} legacyBehavior><a target="_blank">Profile</a></Link> : ''}
      </h1>
      

      
      <div style={{ width: "80vW", left: "20px" }} className="border rounded-lg p-4 flex ">

      <div className="w-1/3 p-2 flex flex-col border border-gray-500">
      <Link href="/adm/" className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700">
    ADM
    </Link>
     <br></br>
    <Link href="/team/createProduct/" className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700">   
    CRIAR POST
    </Link>

        </div>
        
        <div className="flex flex-wrap justify-between">
          
        
      <br></br>
      {mensag}
      <br></br>
     <h1>MURAL</h1>     
     
    </div>

</div>
    <br></br>
    <Footer />

    </div>
  
  )
}