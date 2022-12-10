import { getSession, useSession } from "next-auth/react";
import { FormEvent, SetStateAction, useEffect } from "react";
import Router from "next/router";
import { signIn, signOut } from "next-auth/react";
import { useState } from "react";
import NavBar from "../../components/Navbar";
import ProductList from "../../components/ProductList";
import Upload from "../../components/Upload";
import Footer from "../../components/Footer";
import ImagesUpload from "../../components/ImagesUpLoad";
import { GetServerSideProps } from "next/types";
import { prisma } from "../../lib/prisma";
import UploadImages from "./../../components/UploadsMultipleS3";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  const user = await prisma.user.findFirst({
    where: {
      email: session?.user?.email,
    },
    select: {
      id: true,

    }
  });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: user,
    },
  };
};

export default function Comp(props: any) {
  const user = props.user;
  const { data: session } = useSession();
  // console.log(session?.user?.email);
  const [newTour, setNewTour] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newUserid, setNewUserid] = useState("");
  const [newPhoto, setNewPhoto] = useState("");
  const [newTambnail, setNewTambnail] = useState("");

  const [newImgs, setNewImags] = useState([]);

  // se a solução com a sessao der certo nao precisa setar user aqui nem em body
 // const [newUser, setNewUser] = useState("");
 

  const childToParent = function (childdata: []) {
    // childdata = urlList
    setNewImags(childdata); 

    childdata.map((url, index) => (
      setNewPhoto(url)
  

      
    ))
// usar crop para criar um tambnail e setar


setNewUserid(user.id);


  };

  

  async function handleCreateTour(event: FormEvent) {
   // event.preventDefault();

    const result = await fetch("http://localhost:3000/api/tours/create", {
      method: "POST",
      body: JSON.stringify({
        title: newTour,
        description: newDescription,
        userId: newUserid,
        photo: newPhoto,
        tambnail: newTambnail,
        imgs: newImgs
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  if (session) {
    return (
      <>
        <NavBar />

     
        <br />
        <h1 className="text-3xl text-red-800">Create Tour</h1>
        <br />

        <br />

        <form onSubmit={handleCreateTour}>
          <div className="mb-6">
            <input
              value={newTour}
              onChange={(e) => setNewTour(e.target.value)}
              placeholder="Título do Tour"
              type="text"
              id="default-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <UploadImages childToParent={childToParent} />
          <br />

          
<label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
          <textarea
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            id="message"  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>

<br/><br/>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Send to server
          </button>
        </form>

        <Footer />
      </>
    );
  }
}
