import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserLayout from "../User/UserLayout";
import AdminHome from "../User/pages/Home";
import HomeBanner from "../User/components/homebanner/HomeBanner";
import Shopping from "../User/Shopping";
import Load from "../User/Load";


function Routes() {

const router = createBrowserRouter([
    {
      path: "/",
      element:
       <UserLayout/>,

      children:[
        {
          path:"/",
          element:<Load/>
        },
        
        {
            path:'',
            element:<AdminHome/>
        },
       
      ]
    },

    {
      path:"/shopping",
      element:<Shopping/>
    }
  ]);

return (
<RouterProvider router={router} />
)
}

export default Routes