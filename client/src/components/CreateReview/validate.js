export default function validate(input) {
  let error = {};
  //   const onlyLetter = new RegExp("^[A-Z]+$", "i");

  if (input.qualification < 1 || input.qualification > 5)
    error.qualification = "Rating between 1 and 5";

  if (!input.comment) error.comment = "Comment required ";
  else if (input.comment.length < 5) error.comment = "Minimum 5 Characters";
  else if (input.comment.length > 40) error.comment = "Maximum 40 Characters";
  //   else if (!onlyLetter.test(input.comment)) error.comment = "Solo Letras";

  return error;
}
