/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import Tab3Screen from '../screens/Tab3Screen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList, Tab3ParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ 
        activeTintColor: '#df6a0d',         // texto botones - naranja 
        activeBackgroundColor:'#fff',       // botone activo

        inactiveTintColor:'#fff',           // texto actual
        inactiveBackgroundColor: '#51b749'  // boton activo - albahaca

         }}>
        
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarLabel: 'Mi huerto',
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
          
        }}
      />
      <BottomTab.Screen
        name="Tab3"
        component={Tab3Navigator}
        options={{
          tabBarLabel: '...',
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
          
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}






// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const config_transicion = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
// BOTON DASHBOARD
const TabOneStack = createStackNavigator<TabOneParamList>();
function TabOneNavigator() {
  return (
    <TabOneStack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#51b749' },
    }}>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{  
          transitionSpec: {
            open: config_transicion,
            close: config_transicion,
          }, 
          headerTitle: 'Huertify - Dashboard' }}
      />
    </TabOneStack.Navigator>
  );
}



// BOTON MI HUERTO
const TabTwoStack = createStackNavigator<TabTwoParamList>();
function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#51b749' },
    }}>

      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{  
          transitionSpec: {
            open: config_transicion,
            close: config_transicion,
          }, 
          headerTitle: 'Huertify - Mi huerto' }}
      />
    </TabTwoStack.Navigator>
  );
}

// BOTON PROXIMAMENTE
const Tab3Stack = createStackNavigator<Tab3ParamList>();
function Tab3Navigator() {
  return (
    <Tab3Stack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#51b749' },
    }}>

      <Tab3Stack.Screen
        name="Tab3Screen"
        component={Tab3Screen}
        options={{ 
          transitionSpec: {
            open: config_transicion,
            close: config_transicion,
          }, 
          headerTitle: 'Huertify - Proximamente...' }}
      />
    </Tab3Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});