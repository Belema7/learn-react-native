import { Platform, Text, View } from 'react-native';

//  Checking The Platform
// export default function HomeScreen() {
//   return (
//     <View>
//       <Text>Welcome to Macrozone!</Text>
//       <Text>Running on: {Platform.OS}</Text>
//     </View>
//   );
// }


//  Checking The Device Information
import * as Device from 'expo-device';

export default function HomeScreen() {
  return (
    <View>
      <Text>Welcome to Macrozone!</Text>
      <Text>Running on: {Platform.OS}</Text>
      <Text>Device Model: {Device.modelName}</Text>
      <Text>Device Brand: {Device.brand}</Text>
      <Text>OS Version: {Device.osVersion}</Text>
    </View>
  );
}