import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../components/Home'
import Article from '../components/Home'
import Screens from '../components/Screens';
import Streak from '../pages/Streak';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';


const Drawer = createDrawerNavigator();

export default function NavMenu() {
  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName='Home'>
            <Drawer.Screen name = "Home" component={Home} />
            <Drawer.Screen name = "Quiz" component={Screens} />
            <Drawer.Screen name = "Streak" component={Streak} />
            <Drawer.Screen name = "Help" component={Home} />
        </Drawer.Navigator>
    </NavigationContainer>
  );
}



