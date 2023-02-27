import React from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import { useSelector,useDispatch } from "react-redux";

const dispatch = useDispatch();
const detailProduct = useSelector((state) => state.product.detailproduct);

const addElementToCart = () => {
    detailProduct.stock > 0
      ? dispatch(addToCart(detailProduct))
      : window.alert("there is no product in stock");
  };
class AlertaCarrito extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAlert: false
    };
  }

  handleAlert = () => {
    addElementToCart()
    this.setState({ showAlert: true });
  }

  handleConfirm = () => {
    this.setState({ showAlert: false });
  }

  handleCancel = () => {
    this.setState({ showAlert: false });
  }

  render() {

    return (
      <div>
        <button onClick={this.handleAlert} className="productButton">Agregar al carrito</button>
        {this.state.showAlert &&
          <SweetAlert
            success
            title="Producto agregado al carrito"
            onConfirm={this.handleConfirm}
            onCancel={this.handleCancel}
          >
            ¡El producto se agrego correctamente!
          </SweetAlert>
        }
      </div>
    );
  }
}

export default AlertaCarrito;