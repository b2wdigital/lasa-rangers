import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';

import Main from './pages/Main';
import Home from './pages/Home';

const Routes = createAppContainer(createSwitchNavigator({
    Main,
    Home
}))

export default Routes;
