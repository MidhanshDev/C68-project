import React from "react";
import { StyleSheet} from "react-native";
import Fb from './screens/fb';
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import In from './screens/in'

export default class App extends React.Component {
  render() {
    return (

      <AppContainer/>

    );
  }
}

const tabNavigator = createBottomTabNavigator({
facebook:{screens:Fb},
instagram:{screens:In},
});

const AppContainer = createAppContainer(tabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
