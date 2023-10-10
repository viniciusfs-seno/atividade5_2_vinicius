import * as React from 'react'; 
import { TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigation } from '@react-navigation/drawer';

import firstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';

import CustomSidebarMenu from './components/CustomSidebarMenu';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigation();

const StackIconHeaderLeft = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  }

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/* Sanduiche button image */}
        <Image
          source={require('./assets/imagem.png')} style={{width: 25, height: 25, marginLeft: 5}}/>
      </TouchableOpacity>  
    </View>
  );
}

function firstScreenStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="FirstPage" >
      <Stack.Screen
        name="FirstPage"
        component={FirstPage}
        options={{
          title: 'Primeira tela',
          headerLeft: () => ( <StackIconHeaderLeft navigationProps={navigation} />),
          headerStyle: {backgroundColor: '#E37D00',},
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {fontWeight: 'bold',},
        }} />
    </Stack.Navigator>
  );
}

function secondScreenStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="SecondPage"
      screenOptions={{
        headerLeft: () => ( <StackIconHeaderLeft navigationProps={navigation} />),
        headerStyle: {backgroundColor: '#E37D00',},
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {fontWeight: 'bold',},
      }} >
      <Stack.Screen
        name="SecondPage"
        component={SecondPage}
        options={{title: 'Segunda Tela',}}
      />
      <Stack.Screen
        name="ThirdPage"
        component={ThirdPage}
        options={{title: 'Terceira Tela',}}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaView style={{flex:1, backgroundColor: "#FEF384"}}>
      <StatusBar style='light' backgroundColor='#AD6200' />
      <NavigationContainer>
        <Drawer.Navigator
          drawerContentOptions={{
            activeTintColor: '#730000',
            inactiveTintColor: '#730000',
            itemStyle: {marginVertical: 5},
          }}
          drawerContent={(props) => <CustomSidebarMenu {...props} />} >
          <Drawer.Screen
            name="FirstPage"
            options={{drawerLabel: 'Primeira tela'}}
            component={firstScreenStack} />
          <Drawer.Screen
            name="SecondPage"
            options={{drawerLabel: 'Segunda tela'}}
            component={secondScreenStack} />
          </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}