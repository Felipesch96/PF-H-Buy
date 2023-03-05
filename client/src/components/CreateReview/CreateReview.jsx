import React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { postReviews } from "../../redux/thunks/review.Thunk";
import validate from "./validate";

const CreateReview = () => {
  const dispatch = useDispatch();
  ///estado local para la calificacion
  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(-1);

  const [review, setReview] = useState({
    user_id: "6404105d1e292c1db0543f6b",
    product_id: "63f68abba4053e7d816afde6",
    qualification: 0,
    comment: "",
  });

  //start material ui
  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }
  //
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
    let error = validate(review);
    if (Object.keys(error).length === 0) {
      dispatch(postReviews({ ...review }));
      setReview({
        user_id: "6404105d1e292c1db0543f6b",
        product_id: "63f68abba4053e7d816afde6",
        qualification: 0,
        comment: "",
      });
      setValue(0);
    } else {
      alert("Completa los campos requeridos");
    }
  };

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
          {validate(review).qualification ? (
            <p class="text-danger">{validate(review).qualification}</p>
          ) : (
            <p></p>
          )}
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
            {validate(review).comment ? (
              <p class="text-danger">{validate(review).comment}</p>
            ) : (
              <p></p>
            )}
          </form>
        </div>
        {/* <p class="text h2">Comment: {review.comment}</p> */}
        <button
          type="submit"
          class="btn btn-primary"
          onClick={(e) => handleSubmit(e)}
          disabled={Object.keys(validate(review)).length === 0 ? false : true}
        >
          Send
        </button>
      </form>
    </div>
  );
};
0;

export default CreateReview;
