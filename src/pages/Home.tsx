import React from 'react';
import { Outlet, Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/join-form-step-1">Step 1</Link>
          </li>
          <li>
            <Link to="/join-form-step-2">Step 2</Link>
          </li>
          <li>
            <Link to="/join-form-step-3">Step 3</Link>
          </li>
          <li>
            <Link to="/join-form-step-4">Step 4</Link>
          </li>
          <li>
            <Link to="/join-form-step-5">Step 5</Link>
          </li>
          <li>
            <Link to="/join-form-step-6">Step 6</Link>
          </li>
          <li>
            <Link to="/join-form-step-8">Step 8</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

