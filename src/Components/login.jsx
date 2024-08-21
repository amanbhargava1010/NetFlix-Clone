import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../Utils/Validate";
// Importing statement as per the documentation from the firebase.google.com/docs/auth/web/password-auth
import { createUserWithEmailAndPassword ,updateProfile, signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from "../Utils/firebase";

import { adduser } from "../Utils/userSlice";
import { useDispatch } from "react-redux";
import { USER_AVATAR } from "../Utils/Constant";
import { BG_URL } from "../Utils/Constant";

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  
  const dispatch = useDispatch();
  
  const Name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // Validate the form Data. 
    const message = checkValidData(email.current.value, password.current.value);
    seterrorMessage(message);

    if (message) {
      // User entered the details correctly. 
      return;
    }
    // write signin/SignUp logic here. 
    if (!isSignInForm) {
      // SignUp Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value).
        then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: Name.current.value, photoURL: USER_AVATAR,
        }).then(() => {
          // Profile updated! 
          const { uid, email, displayName, photoURL } = auth.currentUser;
          dispatch(
            adduser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL:photoURL,
            })
          )
        }).catch((error) => {
          // An error occurred
          seterrorMessage(error.message);
        });
        // Since the user is signed Up we are navigating him to the next page. 
      })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode+"-"+ errorMessage);
        });
    }
    else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value).then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // Since the user is signed in  we are navigating him to the next page. 
        console.log(user);
    })
     .catch((error) => {
      const errorCode = error.code;
       const errorMessage = error.message;
       seterrorMessage(errorCode + "-" + errorMessage);
      });
    }
  }
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div >
        <img className="w-full absolute"src={BG_URL} alt="logo" />
      </div>
      <form className="w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80" onSubmit={(e)=> e.preventDefault()}>
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up "} </h1>
        {
          !isSignInForm && (<input type="Name" placeholder="Enter Your Name" className="p-4 my-4 w-full bg-gray-700 rounded-lg" ref={Name}/>)
        }
        <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700 rounded-lg "  autoComplete="email"/>
        <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700 rounded-lg" autoComplete="new-password" />
        <p className="text-red-700 ">{errorMessage}</p>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up "}</button>
        <p className="py-6 px-4 text-center" onClick={toggleSignInForm}>
          {isSignInForm? "New to Netflix ? Sign Up Now !!" : " Already Registered? Sign in Now  "}</p>
      </form>
    </div>
  );
};

export default Login;