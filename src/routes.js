import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";

import Login from "./pages/Login";
import Main from "./pages/Main";
import Home from "./pages/Home";

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Main,
    Home
  })
);

export default Routes;
