import React, { useEffect } from 'react';

import axios from "axios";
import { Navbar } from '../../atoms/Atoms';

const Home = () => {

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);

    // Check if the cookie is found and return its value
    if (parts.length === 2) {
      return parts.pop().split(';').shift();
    }
  }


  return (
    <>
      <h1>home</h1>
    </>
  )
}

export default Home
