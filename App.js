// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './components/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ResFullDetails from './components/ResFullDetails';
import UserProfile from './components/UserProfile';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='UserProfile' component={UserProfile} options={{headerShown: false}}/>
        <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name='MoreQuick' component={ResFullDetails} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  </>
  );
}

// const styles = StyleSheet.create({
  
// });
