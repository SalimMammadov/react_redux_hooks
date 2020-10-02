import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as cartActions from "../../redux/actions/cartActions";
import {Link} from 'react-router-dom'

class CartSummary extends Component {
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle style={{ color: "orange" }} nav caret>
          Cart - {this.props.cart.length}
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map((item) => (
            <DropdownItem key={item.product.id}>
              <span
                onClick={() => {
                  if (window.confirm("Are you sure?"))
                    this.props.actions.removeFromCart(item);
                }}
                className="badge badge-danger"
              >
                -
              </span>{" "}
              {item.product.productName} -{" "}
              <span className="badge badge-success">{item.quantity}</span>
            </DropdownItem>
          ))}
          <hr></hr>
          <DropdownItem><Link to="cartlist">Go To List</Link></DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : <div></div>}
      </div>
    );
  }
}

function mapStateToProps(state) {
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

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
