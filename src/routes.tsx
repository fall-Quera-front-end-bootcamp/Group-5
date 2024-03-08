import { Login, SignUp, ForgotPassword, ResetPassword, Profile, NotFoundPage } from "./pages";
import { Layout, Listview, BoardView, MainLayout, Workspace } from "./components";

const routes = [
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
    {path:'board' , element: <BoardView />},
    {path:'workspace' , element: <Workspace />},
  ]},
]

export default routes