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
    <div>User: {userData.firstname}</div>
  )
}
