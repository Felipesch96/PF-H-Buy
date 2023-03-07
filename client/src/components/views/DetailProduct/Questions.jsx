import React, { useEffect, useState } from "react";
import "./DetailProduct.css";
import { editProduct } from "../../../helpers/editProduct";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserById } from "../../../redux/thunks/userThunk";


const Questions = ({ product_id, seller_id, producto, name, model, brand, price }) => {
  const dispatch = useDispatch();
  const [sellerId, setSellerId] = useState();
  const [buyerId, setBuyerId] = useState();
  const [pregunta, setPregunta] = useState();
  console.log(producto);
  const buyer = useSelector(state => state.user.userLocal);
  const {users} = useSelector(state => state.user);
  console.log(seller_id)
  const seller = users.filter(u => u._id === seller_id);

  console.log(buyer);
  console.log(seller);

  const handleAskQuestion = () => {
    buyer.asked_questions.push({seller: seller[0]._id, product: product_id, question: pregunta});
  };


  const handleQuestion = (e) => {
    setPregunta(e.target.value);
  };
  console.log(pregunta);

  return (
    <div>
      <div class="container alinear-pregunta">
        <div>
          <h5>Make a question to de seller</h5>
        </div>
        <div>
          <textarea name="question" id="question" cols="50" rows="5" onChange={(e) => handleQuestion(e)}></textarea>
        </div>
        <div>
          <button onClick={handleAskQuestion}>send</button>
        </div>
      </div>
    </div>
  );
};

export default Questions;