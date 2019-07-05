import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";

import Login from "./pages/Login";
import Main from "./pages/Main";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

const MainRoute = createStackNavigator({
  Main,
})

const ProductDetailsTab = createStackNavigator({
  ProductDetails
})

const Routes = createAppContainer(
  createSwitchNavigator({
    ProductDetailsTab,
    MainRoute,
    Home,
    Login,
  })
);

export default Routes;
