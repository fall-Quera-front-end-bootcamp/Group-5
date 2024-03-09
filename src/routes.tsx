<<<<<<< HEAD
import { Login, SignUp, ForgotPassword, ResetPassword, Profile, NotFoundPage } from "./Pages";
import { Layout, Listview, MainLayout, Workspace } from "./components";
=======
import { Login, SignUp, ForgotPassword, ResetPassword, Profile, NotFoundPage } from "./pages";
import { Layout, Listview, MainLayout, Workspace } from "./components/layout/exports";
>>>>>>> f77dd3f78328771b2df2f4929af374d22910ffa1

const Routes = [
  {path:'/' , element: <Layout />, children:[
    {path:'' , element: <Login />},
    {path:'signUp' , element: <SignUp />},
    {path:'forgotPassword' , element: <ForgotPassword />},
    {path:'resetPassword' , element: <ResetPassword />},
    {path:'*' , element: <NotFoundPage />}
  ]},
  {path:'/profile' , element: <Profile />},
  {path:'/home' , element: <MainLayout Displayheader = {!window.location.pathname.includes("workspace")} />, children:[
    {path:'' , element: <Listview />},
    {path:'workspace' , element: <Workspace />},
  ]},
]

export default Routes