import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

export default function Header() {
  return (
    <div className='sticky-top navBar text-dark'>
      <h1>Friends</h1>
      <ul className='links'>
        <li className='p-2'>
          <Link to='/login'>Login</Link>
        </li>
        <li className='p-2'>
          <Link to='/addFriend'>Add Friend</Link>
        </li>
      </ul>
    </div>
  );
}
