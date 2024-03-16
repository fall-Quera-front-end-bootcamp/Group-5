import {
  Login,
  SignUp,
  ForgotPassword,
  ResetPassword,
  Profile,
  NotFoundPage,
} from "./pages";
import {
  Layout,
  Listview,
  MainLayout,
  Workspace,
  BoardCalendarView,
  BoardView,
} from "./components/layout";

const routes = [
  {
    path: "/auth",
    element: <Layout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "signUp", element: <SignUp /> },
      { path: "forgotPassword", element: <ForgotPassword /> },
      { path: "resetPassword", element: <ResetPassword /> },
    ],
  },
  { path: "/profile", element: <Profile /> },
  {
    path: "/",
    element: (
      <MainLayout
      Displayheader={!window.location.pathname.includes("workspace")}
      />
      ),
      children: [
        { path: "list", element: <Listview /> },
        { path: "board", element: <BoardView /> },
        { path: "workspace", element: <Workspace /> },
        { path: "calendar", element: <BoardCalendarView /> },
      ],
    },
    { path: "*", element: <NotFoundPage /> },
  ];

export default routes;
