import React from "react";
import { Switch } from "react-router-dom";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import { Route } from "react-router-dom";
import CartList from "../cart/CartList";
import Notfound from "../Notfound";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";

function App() {
  return (
    <div>
      <Container>
        <Navi></Navi>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/cartlist" exact component={CartList} />
          <Route
            path="/saveproduct/:productId"
            component={AddOrUpdateProduct}
          />
          <Route path="/saveproduct" component={AddOrUpdateProduct} />
          <Route component={Notfound} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
