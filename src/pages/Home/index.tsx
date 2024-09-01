import Card from "../../components/Card";
import { Box, Grid, Typography } from "@mui/material";

import { cardsStore } from "../../store/CardStore";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const { cards } = cardsStore((state) => state);

  const handleClick = (id: number) => {
    navigate("item" + `/${id}`);
  };

  return (
    <Box display="flex" width="100%" flexDirection="column" gap={2}>
      <Box display="flex">
        <Typography textAlign="left">Items({cards?.length})</Typography>
        {/* <Box maxWidth="sm" width="100%">
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box> */}
        {/* <Button variant="contained">Submit</Button> */}
      </Box>

      <Grid container spacing={2}>
        {cards.map((card, index) => {
          return (
            <Grid
              item
              xs={12}
              md={3}
              onClick={() => handleClick(card?.id)}
              key={index}
            >
              <Card
                key={index}
                title={card.title}
                created_at={card.created_at}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Home;
