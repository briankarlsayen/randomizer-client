// Navbar.js

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Logout, Settings } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
// // import Logo from "../../assets/logox64.png";
import AddIcon from "@mui/icons-material/Add";
import { createCard as createCardApi } from "../../api/api";
import { checkStatusCode } from "../../utils";
import { cardsStore } from "../../store/CardStore";
const Navbar = () => {
  const navigate = useNavigate();
  const { createCard } = cardsStore((state) => state);
  const handleLogoClick = () => navigate("/");
  const handleCreateCard = async () => {
    const response = await createCardApi();
    console.log("response", response);
    if (!checkStatusCode(response?.status)) return;

    const currDate = new Date();
    const year = currDate?.getFullYear();
    const month = (currDate?.getMonth() + 1).toString().padStart(2, "0");
    const day = currDate?.getDay().toString().padStart(2, "0");
    const cardYear = [year, month, day].join("-");
    console.log("cardYear", cardYear);

    createCard({
      id: response?.data?.id,
      list: [],
      created_at: cardYear,
    });

    navigate(`/item/${response?.data?.id}`);
  };

  return (
    <div>
      <AppBar position="static">
        <DesktopView
          navigate={navigate}
          handleLogoClick={handleLogoClick}
          handleCreateCard={handleCreateCard}
        />
      </AppBar>
    </div>
  );
};

const DesktopView = ({ navigate, handleLogoClick, handleCreateCard }) => {
  return (
    <Toolbar>
      <Box
        display="flex"
        width="100%"
        alignItems="center"
        justifyContent="center"
      >
        <Box display="flex" maxWidth="lg" width="100%">
          <Box display="flex" flexGrow={1} alignItems="center">
            <Box display="flex" gap={0.5}>
              <Typography
                variant="h6"
                component="div"
                onClick={handleLogoClick}
                sx={{ cursor: "pointer" }}
              >
                Randomizer
              </Typography>
            </Box>
          </Box>
          <LeftNavbar navigate={navigate} handleCreateCard={handleCreateCard} />
        </Box>
      </Box>
    </Toolbar>
  );
};

const LeftNavbar = ({ navigate, handleCreateCard }) => {
  return (
    <Box display="flex">
      <Tooltip title="Add">
        <IconButton color="secondary" onClick={handleCreateCard}>
          <AddIcon sx={{ cursor: "pointer" }} />
        </IconButton>
      </Tooltip>
      {/* <Tooltip title="Settings">
        <IconButton color="secondary" onClick={() => navigate("settings")}>
          <Settings sx={{ cursor: "pointer" }} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Logout">
        <IconButton color="secondary">
          <Logout sx={{ cursor: "pointer" }} />
        </IconButton>
      </Tooltip> */}
    </Box>
  );
};

export default Navbar;
