import React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { postReviews } from "../../redux/thunks/review.Thunk";

const CreateReview = () => {
  const dispatch = useDispatch();
  ///estado local para la calificacion
  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(-1);

  const [review, setReview] = useState({
    user_id: "6401065d00e887b1e33cbf86",
    product_id: "63f3cb07d4e18e9636111fb6",
    qualification: 0,
    comment: "",
  });

  //start material ui
  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }
  const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };

  /// handles
  const handleInputChange = function (e) {
    setReview({
      ...review,
      [e.target.name]: e.target.value,
    });
  };
  // falta validaciones de el form de review
  const handleSubmit = function (e) {
    e.preventDefault();
    dispatch(postReviews({ ...review }));
    setReview({
      user_id: "6401065d00e887b1e33cbf86",
      product_id: "63f3cb07d4e18e9636111fb6",
      qualification: 0,
      comment: "",
    });
    setValue(0);
  };
  //

  //   useEffect(() => {
  //     dispatch(postReviews());
  //     // return () => {
  //     //   cleanup;
  //     // };
  //   }, [dispatch]);

  return (
    <div class="container">
      <h2>Dejanos tu opinion acerca del Producto</h2>
      <form class="form-floating">
        <div>
          <span>Califica el producto:</span>
        </div>
        <div class="form-floating mb-3 rating">
          <Box
            sx={{
              width: 200,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Rating
              name="hover-feedback"
              value={value}
              precision={0.5}
              getLabelText={getLabelText}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            {value !== null && (
              <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
          </Box>

          <p class="text h2">{(review.qualification = value)}</p>
        </div>
        <div>
          <span>Ingresa un comentario:</span>
        </div>
        <div class="form-floating mb-3">
          <form class="form-floating">
            <input
              type="text"
              name="comment"
              id="comment"
              onChange={(e) => handleInputChange(e)}
              value={review.comment}
            />
          </form>
        </div>
        <p class="text h2">Comment: {review.comment}</p>
        <button
          type="submit"
          class="btn btn-primary"
          onClick={(e) => handleSubmit(e)}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default CreateReview;
