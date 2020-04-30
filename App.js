import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './src/reducers/index';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import UploadScreen from './src/screens/UploadScreen';
import ImagesScreen from './src/screens/ImagesScreen';
import SplashScreen from 'react-native-splash-screen';

const Tab = createBottomTabNavigator();

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            labelStyle: {
              fontSize: 15,
              top: 10,
            },
            tabStyle: {
              top: 10,
              height: 40,
            },
            style: {
              height: 85,
            },
            activeTintColor: 'red',
          }}
          screenOptions={({route}) => ({
            tabBarIcon: ({focused}) => {
              let icon;
              const size = 30;
              if (route.name === 'Images') {
                icon = focused ? (
                  <EntypoIcon
                    name="images"
                    size={size}
                    style={{color: 'red'}}
                  />
                ) : (
                  <EntypoIcon name="images" size={size} />
                );
              } else if (route.name === 'Upload') {
                icon = focused ? (
                  <EntypoIcon
                    name="upload"
                    size={size}
                    style={{color: 'red'}}
                  />
                ) : (
                  <EntypoIcon name="upload" size={size} />
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
