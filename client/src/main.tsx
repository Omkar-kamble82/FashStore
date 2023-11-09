import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ClerkProvider, SignIn, SignUp, SignedIn, SignedOut } from "@clerk/clerk-react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from './Home/Home.tsx';
import { Toaster } from 'react-hot-toast';
import Shop from './Shop/Shop.tsx';
import Aboutus from './Aboutus/Aboutus.tsx';
import Cart from './Cart/Cart.tsx';
import Contactus from './Contactus/Contactus.tsx';
import Product from './Shop/Product.tsx';

if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

export const ClerkWithRoutes = () => {
  const navigate = useNavigate();

  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      navigate={(to) => navigate(to)}
    >
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/sign-in"
          element={
            <div className='flex h-[100vh] w-full justify-center items-center'>
              <SignIn redirectUrl={'/home'} routing="path" path="/sign-in" />
            </div>
        }
        />
        <Route
          path="/sign-up"
          element={
            <div className='flex h-[100vh] w-full justify-center items-center'>
              <SignUp redirectUrl={'/home'} routing="path" path="/sign-up" />
            </div>
          }
        />
        <Route
          path="/home"
          element={
            <>
            <SignedIn>
              <Home />
            </SignedIn>
            <SignedOut>
              <div className='flex h-[100vh] w-full justify-center items-center'>
                <App />
              </div>
            </SignedOut>
            </>
          }
        />
        <Route
          path="/Shop"
          element={
            <>
            <SignedIn>
              <Shop />
            </SignedIn>
            <SignedOut>
              <div className='flex h-[100vh] w-full justify-center items-center'>
                <App />
              </div>
            </SignedOut>
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
            <SignedIn>
              <Aboutus />
            </SignedIn>
            <SignedOut>
              <div className='flex h-[100vh] w-full justify-center items-center'>
                <App />
              </div>
            </SignedOut>
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
            <SignedIn>
              <Cart />
            </SignedIn>
            <SignedOut>
              <div className='flex h-[100vh] w-full justify-center items-center'>
                <App />
              </div>
            </SignedOut>
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
            <SignedIn>
              <Contactus />
            </SignedIn>
            <SignedOut>
              <div className='flex h-[100vh] w-full justify-center items-center'>
                <App />
              </div>
            </SignedOut>
            </>
          }
        />
        <Route
          path="/product/:id"
          element={
            <>
            <SignedIn>
              <Product />
            </SignedIn>
            <SignedOut>
              <div className='flex h-[100vh] w-full justify-center items-center'>
                <App />
              </div>
            </SignedOut>
            </>
          }
        />
      </Routes>
    </ClerkProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
        <Toaster />
        <ClerkWithRoutes />
      </BrowserRouter>
  </React.StrictMode>,
)
