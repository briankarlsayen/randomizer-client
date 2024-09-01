import { Box, Typography } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import "./index.css";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import NoMatch from "../pages/NoMatch";
// import Spinner from "../assets/chick-spinner.gif";

function Layout() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [authErr, setAuthErr] = useState(false);

  const fetchDatas = async () => {};

  useEffect(() => {
    fetchDatas();
  }, []);

  const content = () => {
    switch (true) {
      case authErr:
        return <Navigate to="/login" replace />;
      case error:
        return <NoMatch />;
      case loading:
        return (
          <Box
            display="flex"
            justifyContent="center"
            height="100vh"
            alignItems="center"
          >
            <Box textAlign="center">
              {/* <img src={Spinner} alt="loading-icon" /> */}
              <Typography variant="h6">Loading files, please wait</Typography>
            </Box>
          </Box>
        );
      default:
        return (
          <Box display="flex" minHeight="100vh">
            <Box flex={1} height="100%">
              <Navbar />
              <Box
                display="flex"
                height="100%"
                width="100%"
                justifyContent="center"
              >
                <Box maxWidth="lg" height="100%" width="100%" p={2}>
                  <Outlet />
                </Box>
              </Box>
            </Box>
          </Box>
        );
    }
  };

  return content();
}

export default Layout;
