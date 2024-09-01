import React, { useState } from "react";
import { cardsStore } from "../../../store/CardStore";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Icon,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CasinoIcon from "@mui/icons-material/Casino";
import {
  archiveCard,
  archiveCardItem,
  createCardItem,
  selectCardItem,
} from "../../../api/api";
import { checkStatusCode } from "../../../utils";
import ClearIcon from "@mui/icons-material/Clear";
// screens - selection | selected | view

function Selection() {
  const { cards, addList, selectRandomListItem, deleteList, deleteCard } =
    cardsStore((state) => state);
  let location = useLocation();
  const navigate = useNavigate();
  const id = location?.pathname?.split("/").slice(-1)[0];

  const selectedCard = cards?.find((card) => card.id === Number(id));

  const [inputText, setInputText] = useState("");

  const handleBack = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    if (!inputText?.trim()) return setInputText("");

    const createCard = await createCardItem({ card_id: id, title: inputText });
    if (!checkStatusCode(createCard?.status)) {
      return console.log("error");
    }
    console.log("createCard", createCard);

    addList({
      cardId: Number(id),
      title: inputText,
      cardItemId: Number(createCard?.data?.id),
    });
    setInputText("");
  };

  const handleRamdomize = async () => {
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

  const handleDeleteItem = async (cardItemId: number) => {
    const response = await archiveCardItem(cardItemId);
    if (!checkStatusCode(response?.status)) return console.log("error");

    deleteList({ cardId: Number(id), cardItemId });
  };

  const handleDeleteCard = async () => {
    const response = await archiveCard(Number(id));
    if (!checkStatusCode(response?.status)) console.log("error");
    console.log("response", response);
    deleteCard(Number(id));
    navigate("/");
  };

  return (
    <div>
      <Box display="flex" alignItems="center">
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
        <Box flex={1}>
          <Typography variant="h2" textAlign="center">
            {selectedCard?.title}
          </Typography>
        </Box>
      </Box>
      <Box
        textAlign="center"
        pt={4}
        display="flex"
        flexDirection="column"
        gap={2}
      >
        {selectedCard?.list.map((item) => {
          return (
            <Box
              alignItems="center"
              justifyContent="center"
              display="flex"
              gap={1}
              sx={{
                ":hover .MuiIconButton-root": {
                  visibility: "visible",
                },
              }}
            >
              <Typography key={item?.id}>{item?.title}</Typography>
              <Tooltip title="Delete" placement="right">
                <IconButton
                  size="small"
                  sx={{
                    visibility: "hidden",
                  }}
                  color="error"
                  onClick={() => handleDeleteItem(item.id)}
                >
                  <ClearIcon color="error" />
                </IconButton>
              </Tooltip>
            </Box>
          );
        })}
        <form onSubmit={handleSubmit}>
          <Box display="flex" gap={2} justifyContent="center">
            <TextField
              size="small"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <Button variant="contained" type="submit">
              Add
            </Button>
          </Box>
        </form>
        <Box pt={4} display="flex" justifyContent="center" width="100%">
          <Box maxWidth="sm" width="100%">
            <Tooltip title="Select random item">
              <Button fullWidth variant="contained" onClick={handleRamdomize}>
                Random
                <IconButton>
                  <CasinoIcon />
                </IconButton>
              </Button>
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Selection;
