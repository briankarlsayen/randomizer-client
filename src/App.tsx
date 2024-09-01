import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { CssBaseline } from "@mui/material";
import { ToastContainer } from "react-toastify";
import Item from "./pages/Item";
import View from "./pages/Item/View";
import { useEffect } from "react";
import { routeGetApi } from "./api";
import { cardsStore } from "./store/CardStore";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const { initializeCards } = cardsStore((state) => state);

  const initialize = async () => {
    const fetchCards = await routeGetApi("/cards").then((res) => {
      initializeCards(res?.data);
      console.log("res", res?.data);
    });

    return Promise.allSettled([fetchCards]);
  };
  useEffect(() => {
    initialize();
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "item/:id",
          element: <Item />,
        },
        {
          path: "item/:id/view",
          element: <View />,
        },
      ],
    },
    {
      path: "*",
      element: <NoMatch />,
    },
  ]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
