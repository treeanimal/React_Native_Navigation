import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import CustomButton from './CustomButton';
// import TabADetailScreen from './screen/TabADetailScreen';



const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === '홈') {
            iconName = focused
              ? 'ios-home'
              : 'ios-home';
          } else if (route.name === '채팅하기') {
            iconName = focused
              ? 'ios-chatboxes'
              : 'ios-chatboxes';
          } else if(route.name == '블루투스'){
            iconName = focused
            ? 'ios-bluetooth'
            : 'ios-bluetooth';
          }else if(route.name == '와이파이'){
            iconName = focused
            ? 'ios-wifi'
            : 'ios-wifi';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#00BFFF',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="홈" component={TabAScreen} />
      <Tab.Screen name="채팅하기" component={TabBScreen} />
      <Tab.Screen name="블루투스" component={TabCScreen} />
      <Tab.Screen name="와이파이" component={TabDScreen} />
    </Tab.Navigator>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>No New Notifications!</Text>
      <Button
        onPress={() => navigation.goBack()}
        title="Go back home"
      />
    </View>
  );
}
const Stack = createStackNavigator();
function TabAScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="헤르메스" component={TabADetailsScreen} />
      <Stack.Screen name="TabA Details" component={Details} />
    </Stack.Navigator>
  );
}

function TabADetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <CustomButton
        buttonColor={'#023e71'}
        title={'채팅하기'}
        onPress={() => alert('채팅하기 버튼')}>
      </CustomButton>
      <Text>
        Welcome to TabA page!
      </Text>
      <Button
        onPress={() => navigation.navigate('TabA Details')}
        title="Go to TabA Details"
      />
    </View>
  );
}

function Details() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        TabA Details here!
      </Text>
    </View>
  );
}

function TabBScreen() {
  return (
    <View>
      <Text style={{ textAlign: 'center', marginTop: 300 }}>
        Welcome to TabB page!
      </Text>
    </View>
  );
}

function TabCScreen() {
  return (
    <View>
      <Text style={{ textAlign: 'center', marginTop: 300 }}>
        Welcome to TabC page!
      </Text>
    </View>
  );
}

function TabDScreen() {
  return (
    <View>
      <Text style={{ textAlign: 'center', marginTop: 300 }}>
        Welcome to TabC page!
      </Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}