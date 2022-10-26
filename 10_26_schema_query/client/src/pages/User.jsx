import React from 'react'

import {useParams} from 'react-router-dom'

import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const api = axios.create({
  baseURL: "http://localhost:5003",
  timeout: 4000,
})


export default function User() {

  const {userId} = useParams(); 

  const [userData, setUserData] = useState(null);
/*
{
  _id 635919a460a7733816b73551,
  firstname "Philine" ,
  lastname"Riediger",
  email "Philine.Riediger@hotmail.com",
  isAdmin true,
  address 'Adress',
  otherAddr ['Adress 1','Adress 2',]
}
*/
  

  useEffect(() => {
    api.get(`/user/${userId}`).then(res => {

      setUserData(res.data);
      console.log(res);
    }).catch((err) =>{
      console.log(err);
    })
  }, [])
  useEffect(() => {
  console.log(userData);

  }, [userData]);

  if(!userData) return (<div>No user data</div>)

  return (
    <div>
      <p>User: {userData.firstname}</p>
      <h1 className="text-3xl">TEST</h1>
    </div>
  )
}
