import React, { useState } from "react";
import { Alert, Image, ScrollView, View } from "react-native";
import { useAuth } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

import Logo from "../../assets/images/logo.svg";
import styles from "../styles/screens/login.style";

import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigator = useNavigation();

  const handleSignIn = () => {
    if (email && password) {
      login(email, password);
      navigator.push("Home");
    } else {
      Alert.alert("Dados inválidos!", "Insira um e-mail e/ou senha válida.");
    }
  };

  const handleForgotPassword = () => {
    console.log("Recuperação de senha não implementada.");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Image resizeMode="contain" source={Logo} style={styles.logo} />
      <View style={styles.container}>
        <CustomInput
          placeholder="Seu e-mail"
          value={email}
          setValue={setEmail}
          secureTextEntry={false}
        />
        <CustomInput
          placeholder="Sua senha"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomButton onPress={handleSignIn} text="Entrar" />
        <CustomButton
          onPress={handleForgotPassword}
          text="Esqueceu a sua senha?"
          type="Secondary"
        />
        <CustomButton
          onPress={() => navigator.push("Registrar")}
          text="Criar uma conta"
          type="Secondary"
          bgColor="#e3e3e3"
          fgColor="#363636"
        />
      </View>
    </ScrollView>
  );
};

export default Login;
