import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from '../../../navigation/routes/routes';


// const Drawer = createDrawerNavigator();s

// export default function Tour() {
//     return (
//         //@ts-ignore
//         <NavigationContainer>
//           <Drawer.Navigator initialRouteName="Home">
//             <Drawer.Screen name="Home" component={Routes.Centre} />
//             <Drawer.Screen name="Mirjalol" component={Routes.Museum} />
//           </Drawer.Navigator>
//         </NavigationContainer>
//       );
// }

const Tour = () => {
  return (
    <View>
      <Text>Tour</Text>
    </View>
  )
}

export default Tour;

const styles = StyleSheet.create({})