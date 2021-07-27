import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import SearchScreen from './screens/searchScreen';
import TransactionScreen from './screens/bookTransactionScreen';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default function App() {
  return (
    <AppContainer/>
  );
}

const tabNavigator = createBottomTabNavigator({
  Transaction : {screen : TransactionScreen, 
  navigationOptions : {
    tabBarIcon : <Image source = {require('./assets/book.png')} style = {{width : 30 , height : 30}} />
  }
  },
  Search : {screen : SearchScreen,
  navigationOptions : {
    tabBarIcon : <Image source = {require('./assets/searchingbook.png')} style = {{width: 30 , height : 30}} />
  }
  }
})

const AppContainer = createAppContainer(tabNavigator)