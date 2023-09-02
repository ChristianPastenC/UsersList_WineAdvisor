import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import UsersList from './src/screens/UsersList';

import { GlobalStyle, Colors } from './src/styles';

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat: require('./assets/fonts/Montserrat.ttf'),
    MontserratSemiBold: require('./assets/fonts/Montserrat-SemiBold.ttf'),
    MontserratMedium: require('./assets/fonts/Montserrat-Medium.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={GlobalStyle.style.mainContainer}>
      <StatusBar backgroundColor={Colors.BACKGROUND} />
      <UsersList />
    </SafeAreaView>
  );
}

