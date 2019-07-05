import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";

import Login from "./pages/Login";
import Main from "./pages/Main";
import Home from "./pages/Home";

const MainRoute = createStackNavigator({
  Main,
})

const Routes = createAppContainer(
  createSwitchNavigator({
    MainRoute,
    Home,
    Login,
  })
);

export default Routes;
