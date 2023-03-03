export default function validate(input) {
  let error = {};
  //   const onlyLetter = new RegExp("^[A-Z]+$", "i");

  if (input.qualification < 1 || input.qualification > 5)
    error.qualification = "Calificacion entre 1 y 5";

  if (!input.comment) error.comment = "Comentario requerido";
  else if (input.comment.length > 40) error.comment = "Maximo 40 Caracteres";
  //   else if (!onlyLetter.test(input.comment)) error.comment = "Solo Letras";

  return error;
}
