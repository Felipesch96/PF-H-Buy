import React from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';


class MyComponente extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAlert: false
    };
  }

  handleAlert = () => {
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
        <button onClick={this.handleAlert} type="submit" className="productButton">Crear</button>
        {this.state.showAlert &&
          <SweetAlert
            success
            title="Categoria subida"
            onConfirm={this.handleConfirm}
            onCancel={this.handleCancel}
          >
            ¡La categoria se ha subido correctamente!
          </SweetAlert>
        }
      </div>
    );
  }
}

export default MyComponente;