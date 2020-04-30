import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/reducers/index';
import UploadScreen from './src/screens/UploadScreen';
import ImagesScreen from './src/screens/ImagesScreen';
import SplashScreen from 'react-native-splash-screen';

const Tab = createBottomTabNavigator();

const store = createStore(reducers);

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Upload" component={UploadScreen} />
          <Tab.Screen name="Images" component={ImagesScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
