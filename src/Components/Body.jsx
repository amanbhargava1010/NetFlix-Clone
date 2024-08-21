import Browser from "./Browser"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./login";



const Body = () => {
  // below hook is used for updating the store. 

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },
    {
      path: "/browse",
      element: <Browser/>,
    },
  ]);

  
 
  
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
 
export default Body;