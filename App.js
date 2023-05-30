import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import { AuthProvider, useAuth } from "./app/context/AuthContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import styles from "./App.style";

import Home from "./app/screens/Home";
import Login from "./app/screens/Login";
import Register from "./app/screens/Register";
import Product from "./app/screens/Product";
import Search from "./app/screens/Search";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Iceland: require("./assets/fonts/iceland-regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AuthProvider>
      <Layout styles={styles.root} />
    </AuthProvider>
  );
}

export const Layout = () => {
  const { authState, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {authState.authenticated ? (
          <>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerRight: () => (
                  <TouchableOpacity
                    onPress={handleLogout}
                    style={styles.logoutButton}
                    title="Sair"
                  >
                    <Text style={styles.logoutButtonText}>Sair</Text>
                  </TouchableOpacity>
                ),
              }}
            ></Stack.Screen>
            <Stack.Screen name="Produto" component={Product}></Stack.Screen>
            <Stack.Screen name="Buscar" component={Search}></Stack.Screen>
          </>
        ) : (
          <>
            <Stack.Screen name="Entrar" component={Login}></Stack.Screen>
            <Stack.Screen name="Registrar" component={Register}></Stack.Screen>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
