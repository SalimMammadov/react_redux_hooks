import React, { Component } from "react";
import { Table } from "reactstrap";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import { connect } from "react-redux";

class CartList extends Component {
  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((item) => (
              <tr key={item.id}>
                <th scope="row">{item.product.id}</th>
                <td>{item.product.productName}</td>
                <td>{item.product.unitPrice}</td>
                <td>{item.quantity}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.props.actions.removeFromCart(item)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return {
    cart: state.cartReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
    },
  };
}

export default connect(mapStatetoProps, mapDispatchToProps)(CartList);
