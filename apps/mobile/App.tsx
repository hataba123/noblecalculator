import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { MobileApp } from "../../src/mobile";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <MobileApp />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
