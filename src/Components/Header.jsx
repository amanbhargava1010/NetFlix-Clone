/* eslint-disable react-hooks/rules-of-hooks */
import { Netflix_Logo } from "../Utils/Constant"
import { signOut  } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { adduser, removeUser } from "../Utils/userSlice";
import { useDispatch } from "react-redux";
import { toggleGptSearchView } from "../Utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../Utils/Constant";
import { changeLanguage } from "../Utils/configSlice";

const header = () => {
    
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
      // eslint-disable-next-line no-unused-vars
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  const netFlix_click = () => {
    navigate("/");
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        // we will push this to the store. 
        dispatch(adduser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL, }));
        navigate("/browse")
      } else {
        // User is signed out
        // we will remove the user from the store. 
        dispatch(removeUser());
        navigate("/")
      }
    });

    return () => unsubscribe();
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleGPTSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }
  
  return (
    <div className="absolute w-screen px-2 py-2 k  flex justify-between   md:bg-gradient-to-b from-black md:z-10 ">
      <img src={Netflix_Logo} alt="" className="w-44" onClick={netFlix_click} />
    
      {user && <div className="flex p-2">
        {showGptSearch && (
          <select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang) =>
              <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
            )}
          </select>
        )}
        <button className="py-2 px-2 m-2 bg-purple-800 text-white rounded-lg" onClick={handleGPTSearchClick}>{ showGptSearch ? "HomePage" :"GPT Search"}</button>
        <img src={user.photoURL} alt="USER_ICON" className="w-12 h-14 mx-4" />
        <button className="mx-3 font-bold bg-transparent text-white p-2 m-1" onClick={handleSignOut}>SignOut</button>
      </div>}
     
    </div> 
  )
}

export default header;