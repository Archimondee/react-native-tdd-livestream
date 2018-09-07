import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'mobx-react';
import RestaurantList from './RestaurantList';
import DishList from './DishList';
import RestaurantStore from './store/RestaurantStore';

const restaurantStore = new RestaurantStore();

const RootStack = createStackNavigator({
  RestaurantList,
  DishList,
});

export default class App extends Component {
  render() {
    return (
      <Provider restaurantStore={restaurantStore}>
        <RootStack />
      </Provider>
    );
  }
}
