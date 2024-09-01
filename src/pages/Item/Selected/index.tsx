import { Box, Button, IconButton, Tooltip, Typography } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { cardsStore } from "../../../store/CardStore";
import { archiveCard, selectCardItem } from "../../../api/api";
import { checkStatusCode } from "../../../utils";
import ClearIcon from "@mui/icons-material/Clear";

function Selected({ title }) {
  const { selectRandomListItem, cards, deleteCard } = cardsStore(
    (state) => state
  );

  const navigate = useNavigate();
  const id = location?.pathname?.split("/").slice(-1)[0];

  const handleBack = () => {
    navigate("/");
  };

  const handleRamdomize = async () => {
    const selectedCard = cards?.find((card) => card.id === Number(id));
    const randomIndex = Math.floor(Math.random() * selectedCard.list.length);
    const selectedCardId = selectedCard.list[randomIndex]?.id;
    const response = await selectCardItem(Number(id), {
      selected_id: selectedCardId,
    });
    if (!checkStatusCode(response?.status)) {
      return console.log("error");
    }
    selectRandomListItem({ cardId: Number(id), selectedCardId });
  };

  const handleView = () => {
    navigate(`/item/${id}/view`);
  };

  const handleDeleteCard = async () => {
    const response = await archiveCard(Number(id));
    if (!checkStatusCode(response?.status)) console.log("error");
    console.log("response", response);

    deleteCard(Number(id));
    navigate("/");
  };

  return (
    <Box display="flex" height="100%">
      <Box display="flex" width="100%" justifyContent="space-between">
        <Tooltip title="Back">
          <IconButton onClick={handleBack}>
            <ArrowBackIcon />
          </IconButton>
        </Tooltip>
        <Button color="error" size="small" onClick={handleDeleteCard}>
          <ClearIcon />
          Delete
        </Button>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center", // Optional: To center text within the element
        }}
      >
        <Typography variant="h2">{title}</Typography>
        <Box>
          <Button onClick={handleRamdomize}>Retry</Button>
          <IconButton onClick={handleView}>
            <AssignmentIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Selected;
