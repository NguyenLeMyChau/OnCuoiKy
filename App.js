import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { store } from './Redux/Store';
import { Provider } from 'react-redux';
import { storeRTK } from './ReduxToolkit/storeRTK';
import { CalculatorRTKScreen } from './Components/CalculatorRTKScreen';
import { CalculatorScreen } from './Components/CalculatorScreen';
import UserScreen from './Components/UserScreen';
import LoginScreen from './Components/Login';
import { NavigationContainer } from '@react-navigation/native';
import NoteScreen from './Components/NoteScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <Provider store={store}>
    //   <CalculatorScreen/>
    // </Provider>


    // <Provider store={storeRTK}>
    //   <CalculatorRTKScreen/>
    // </Provider>

    // <Provider store={storeRTK}>
    //   <UserScreen />
    // </Provider>

    <Provider store={storeRTK}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="NoteScreen" component={NoteScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}

const styles = StyleSheet.create({});
