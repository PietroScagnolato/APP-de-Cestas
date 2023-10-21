import { StatusBar,SafeAreaView} from 'react-native';
import { Cesta } from './src/telas/Home';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
}