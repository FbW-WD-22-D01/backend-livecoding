import React from 'react'
import {useParams} from 'react-router-dom'

import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const api = axios.create({
  baseURL: "http://localhost:5003",
  timeout: 4000,
})

export default function Profile() {

  const {userId} = useParams(); 

  const [userData, setUserData] = useState(null);
/*
{
  _id 635919a460a7733816b73551,
  firstname "Philine" ,
  lastname"Riediger",
  email "Philine.Riediger@hotmail.com",
  isAdmin true,
  address {
    city: 'hamburg',
    street: 'musterstr. 11',
    zip: '22222'
  },
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

  const { firstname, lastname, email, address, otherAddr, isAdmin} = userData

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Profile Information</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details.</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{firstname + ' ' + lastname}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Is Admin?</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{isAdmin ? 'yes' : 'no'}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{email}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Adress</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{`${address.city}, ${address.street}, ${address.zip}`}</dd>

          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Other addresses</dt>
            {
              otherAddr.map((addr) => 
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{`${addr.city}, ${addr.street}, ${addr.zip}`}</dd>
              )
            }
          </div>
        </dl>
      </div>
    </div>
  )
}
