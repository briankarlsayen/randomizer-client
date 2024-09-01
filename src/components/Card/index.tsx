import { Box, Typography } from "@mui/material";

interface ICard {
  title: string;
  created_at: string;
}

function Card({ title, created_at }: ICard) {
  return (
    <Box
      // border="1px lightGray solid"
      border="2px black solid"
      p={2}
      borderRadius="5px"
      height="10rem"
      display="flex"
      flexDirection="column"
    >
      <Typography variant="h4" textAlign="center" pb={2} flex={1}>
        {title}
      </Typography>
      <Typography textAlign="right">{created_at}</Typography>
      {/* <Typography textAlign="right">{formatDate(created_at)}</Typography> */}
    </Box>
  );
}

export default Card;
