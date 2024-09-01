import { cardsStore } from "../../../store/CardStore";
import { useNavigate, useParams } from "react-router-dom";
import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function View() {
  const { cards } = cardsStore((state) => state);
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("params", id);
  const selectedCard = cards.find((card) => card.id === Number(id));

  const handleBack = () => {
    navigate(`/item/${id}`);
  };
  return (
    <div>
      <Box>
        <Box>
          <IconButton onClick={handleBack}>
            <ArrowBackIcon />
          </IconButton>
        </Box>
      </Box>
      <Box
        textAlign="center"
        pt={4}
        display="flex"
        flexDirection="column"
        gap={2}
      >
        {selectedCard.list.map((item) => {
          return <Typography key={item?.id}>{item?.title}</Typography>;
        })}
      </Box>
    </div>
  );
}

export default View;
