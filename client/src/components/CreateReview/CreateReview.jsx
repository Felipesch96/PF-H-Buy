import React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const CreateReview = () => {
  return (
    <div>
      <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      >
        <Typography component="legend">Califica el Producto:</Typography>
        <Rating
          name="simple-controlled"
          // value={value}
          onChange={(event, newValue) => {
            // setValue(newValue);
          }}
        />
        <div>
          <Typography component="legend">Puntuacion</Typography>
          <Rating
            name="read-only"
            // value={value}
            readOnly
          />
        </div>
      </Box>
    </div>
  );
};

module.exports = CreateReview;
