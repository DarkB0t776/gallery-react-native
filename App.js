import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/reducers/index';
import EntypoIcon from 'react-native-vector-icons/Entypo';
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
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let icon;
              if (route.name === 'Images') {
                icon = focused ? (
                  <EntypoIcon name="images" size={30} style={{color: 'red'}} />
                ) : (
                  <EntypoIcon name="images" size={30} />
                );
              } else if (route.name === 'Upload') {
                icon = focused ? (
                  <EntypoIcon name="upload" size={30} style={{color: 'red'}} />
                ) : (
                  <EntypoIcon name="upload" size={30} />
                );
              }
              return icon;
            },
          })}>
          <Tab.Screen name="Upload" component={UploadScreen} />
          <Tab.Screen name="Images" component={ImagesScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
