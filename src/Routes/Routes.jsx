import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserLayout from "../User/UserLayout";
import AdminHome from "../User/pages/Home";


function Routes() {

const router = createBrowserRouter([
    {
      path: "/",
      element:
       <UserLayout/>,

      children:[
        {
            path:'home',
            element:<AdminHome/>
        }
      ]
    },
  ]);

return (
<RouterProvider router={router} />
)
}

export default Routes