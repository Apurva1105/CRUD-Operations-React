import React, { useEffect, useState } from 'react'
import { db } from './firebase-config'
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore"; 


export default function App() {

  const [user, setUser] = useState([]);
  const [name, setName] = useState([""]);
  const [age, setAge] = useState([0]);
  
  const userCollectionRef = collection(db,"crud");

  const createUser = async () =>{
    await addDoc(userCollectionRef,{name:name, age:age})
  }
  const updateAge = async (id,age) => {
    const userDoc = doc(db,'crud',id)
    const newAge = {age:age+5};
    await updateDoc(userDoc,newAge)
  }
  
  const deleteUser = async (id) => {
    const userDoc = doc(db,'crud',id)
    await deleteDoc(userDoc);
  }
  useEffect(() =>{
    const getUser = async () => {
      const data = await getDocs(userCollectionRef);
      console.log(data)

      const docsRef = data.docs.map((doc) => ({
        ...doc.data(), id:doc.id
      }))
      console.log(docsRef)

      setUser(docsRef);
    }
  
    getUser();

  },[])
  return (
    <div>
      <input type='text' placeholder='Name...' value={name} onChange={(e)=>setName(e.target.value)}/>
      <input type='number' placeholder='Age...' value={age} onChange={(e)=>setAge(e.target.value)}/>

      <button onClick={createUser}>Create USer</button>
      {user.map((user) =>{
        return <div>
          <h1>Name : {user.name}</h1>
          <h1>Age : {user.age}</h1>
          <button onClick={() => updateAge(user.id,user.age)}>Update Age</button>
          <button onClick={() => deleteUser(user.id)}>Delete</button>
          </div>
      })}
    </div>
  )
}
