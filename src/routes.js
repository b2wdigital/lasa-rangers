import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";

import Login from "./pages/Login";
import Main from "./pages/Main";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Maps from "./pages/Maps";

const MainRoute = createStackNavigator({
  Main,
})

const MapsRoutes = createStackNavigator({
  Maps
})

const ProductDetailsTab = createStackNavigator({
  ProductDetails
})

const Tabs = createStackNavigator({
  Main,
  ProductDetails,
  Maps,
})

const Routes = createAppContainer(
  createSwitchNavigator({
    // MapsRoutes,
    // ProductDetailsTab,
    // MainRoute,
    // Home,
    Home,
    Tabs,
  })
);

export default Routes;
