import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text} from 'react-native';
import UploadScreen from './src/screens/UploadScreen';
import ImagesScreen from './src/screens/ImagesScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Upload" component={UploadScreen} />
        <Tab.Screen name="Images" component={ImagesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
