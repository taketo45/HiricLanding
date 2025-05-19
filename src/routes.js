import Index9 from "./pages/Index9/Index9";
import Login from "./pages/Auth/login";
import SignUp from "./pages/Auth/signup";
import PasswordForget from "./pages/Auth/password_forget";

const routes = [
  //Auth
  { path: "/signup", component: <SignUp /> },
  { path: "/login", component: <Login /> },
  { path: "/password_forget", component: <PasswordForget /> },

  { path: "/", component: <Index9 /> }
];

export default routes;
