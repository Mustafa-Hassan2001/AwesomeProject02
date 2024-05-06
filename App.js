import { Text,View, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import TodoScreen  from './components/TodoScreen';

export default function App() {
  return (
    <SafeAreaView>
    <View>
    <TodoScreen />
    </View>
    </SafeAreaView>
  );
}
