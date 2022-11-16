import PersonalPage from "../Pages/PersonalPage/PersonalPage";
import IndexPage from "../Pages/IndexPage";
import LoginPage from "../Pages/Auth/LoginPage";
import RegisterPage from "../Pages/Auth/RegisterPage";

export let authUser = [
  {path: '/personal_page', element: <PersonalPage />}
]

export let notAuthUser = [
  {path: '/', element: <IndexPage />},
  {path: '/login', element: <LoginPage />},
  {path: '/register', element: <RegisterPage />},
]