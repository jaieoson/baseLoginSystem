import { getSession, useSession } from "next-auth/react";
import { FormEvent, SetStateAction, useEffect } from "react";


import { useState } from "react";





export default function Comp(props: any) {
  const user = props.user;
  const { data: session } = useSession();
  // console.log(session?.user?.email);
  const [newTitle, setNewTitle] = useState("");
  const [newBio, setNewBio] = useState("");
  const [newUserid, setNewUserid] = useState("");



  

  async function handleCreateTour(event: FormEvent) {
   // event.preventDefault();

    const result = await fetch("http://localhost:3000/api/users/update", {
      method: "POST",
      body: JSON.stringify({
        title: newTitle,
        bio: newBio,
        userId: newUserid,
     
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  if (session) {
    return (
      <>
    
        <h1 className="text-3xl text-red-800">Complete Pefil</h1>
        <br />

        <form onSubmit={handleCreateTour}>
          <div className="mb-6">
            <input
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="Título do Tour"
              type="text"
              id="default-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          
<label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
          <textarea
            value={newBio}
            onChange={(e) => setNewBio(e.target.value)}
            id="message" placeholder="Bio"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>

<br/><br/>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit">
            Send to server
          </button>
        </form>

      </>
    );
  }
}
