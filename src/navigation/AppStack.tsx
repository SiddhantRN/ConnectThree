import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../screens/Welcome';
import ChooseColor from '../screens/ChooseColor';
import Game from '../screens/Game';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="ChooseColor" component={ChooseColor} />
      <Stack.Screen name="Game" component={Game} />
    </Stack.Navigator>
  );
}

export default AppStack;
