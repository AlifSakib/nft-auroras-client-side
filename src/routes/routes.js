import Collections from "../components/Collection/Collections";
import Login from "../components/Pages/Login";
import Register from "../components/Pages/Register";
import Profile from "../components/Profile/Profile";
import Wallet from "../components/Wallet/Wallet";
import PrivateRoutes from "./PrivateRoutes";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../components/Home/Home");
const { default: Main } = require("../layout/Main");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile></Profile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/collections",
        loader: () => fetch("https://nft-auroras-server-side.vercel.app/nfts"),
        element: <Collections></Collections>,
      },
      {
        path: "/wallet",
        element: (
          <PrivateRoutes>
            <Wallet></Wallet>
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
