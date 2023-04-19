import React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import StarIcon from "@mui/icons-material/Star";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postReviews } from "../../redux/thunks/review.Thunk";
import validate from "./validate";
import axios from "axios";
import "./CreateReview.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Swal from "sweetalert2";
const { REACT_APP_API_URL } = process.env;

const CreateReview = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user.userLocal);
  const order = useSelector;
  ///estado local para la calificacion
  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(-1);

  //Estado local de la review
  const [review, setReview] = useState({
    user_id: user._id,
    product_id: id,
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
        user_id: user._id,
        product_id: id,
        qualification: 0,
        comment: "",
      });
      setValue(0);
      Swal.fire({
        icon: 'success',
        title: 'Review sent successfully..',
        text: 'Thanks for your time!',
      })
      history.push("/profile");
    } else {
      alert("Completa los campos requeridos");
    }
  };
  /// producto id

  ///
  return (
    <div class="container fondoReview">
      <div class="formulario ">
        <form class="form-floating  p-3 formContent">
          <h1 class="text-center mb-5 p-2 title">
            ¡Leave us your opinion about the Product!
          </h1>
          <div class="form-floating rating mb-3">
            <div class="input-group justify-content-center">
              <div class="mt-3"></div>
              <label class="h4 rating p-1" for="star">
                <i class="bi bi-star-fill"> Rate the product:</i>{" "}
                {(review.qualification = value)}
              </label>
              <Box
                sx={{
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
                  <Box sx={{ ml: 2 }}>
                    {labels[hover !== -1 ? hover : value]}
                  </Box>
                )}
              </Box>
            </div>
            {validate(review).qualification ? (
              <p class="text-danger mb-2">{validate(review).qualification}</p>
            ) : (
              <div class="text-success mb-2">¡Valid!</div>
            )}
          </div>
          <div class="form-floating mb-3 ">
            <div class="input-group input-group-lg justify-content-center">
              <label for="comment" class="form-label h4">
                <i class="bi bi-chat-left-text-fill"> Comment:</i>
              </label>
              <div>
                <input
                  type="text"
                  name="comment"
                  id="comment"
                  placeholder="enter comment..."
                  class="form-control input-lg rounded-1 mb-2"
                  value={review.comment}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
            </div>
            {validate(review).comment ? (
              <div class="text-danger mb-2">{validate(review).comment}</div>
            ) : (
              <div class="text-success mb-2">¡Valid!</div>
            )}
            <button
              type="submit"
              class="btn btn-success btn-lg"
              onClick={(e) => handleSubmit(e)}
              disabled={
                Object.keys(validate(review)).length === 0 ? false : true
              }
            >
              <i class="bi bi-send-check-fill"> Submit </i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateReview;
