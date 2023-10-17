import React from 'react';
import { View, Text } from 'react-native';
import Login from './views/login';
import Home from './views/home';
import Series from './views/series';
import Watch from './views/watch'
import Movies from './views/movies';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      {
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
          <Stack.Screen name="Series" component={Series} options={{headerShown: false}}/>
          <Stack.Screen name="Watch" component={Watch} options={{headerShown: false}}/>
          <Stack.Screen name="Movies" component={Movies} options={{headerShown: false}}/>
        </Stack.Navigator>
       
}

    </NavigationContainer>
    
  )
}

export default App;


 //  <Login />
        //  <Series />
        // <Watch />
        //  <Home />