

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LivroAdd from '../Screen/LivroAddScreen';
import LivroList from '../Screen/LivroListScreen';
import LoanScreen from '../Screen/LoanScreen';
import LoanAddScreen from '../Screen/LoandAddScreen';

const Stack = createNativeStackNavigator();

export default function HomeScreen() {
  return (
    <Stack.Navigator initialRouteName="LivroList">
      <Stack.Screen
        name="LivroList"
        component={LivroList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LivroAdd"
        component={LivroAdd}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Loan"
        component={LoanScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoanAdd"
        component={LoanAddScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
