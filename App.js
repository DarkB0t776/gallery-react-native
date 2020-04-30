import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text} from 'react-native';
import UploadScreen from './src/screens/UploadScreen';
import ImagesScreen from './src/screens/ImagesScreen';
import SplashScreen from 'react-native-splash-screen';

const Tab = createBottomTabNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

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
