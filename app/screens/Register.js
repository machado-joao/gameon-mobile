import React, { useState } from "react";
import { Image, ScrollView, View } from "react-native";
import { useAuth } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

import Logo from "../../assets/images/logo.svg";
import styles from "../styles/screens/register.style";

import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const { register } = useAuth();
  const navigator = useNavigation();

  const handleSignUp = () => {
    register(name, email, password);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Image source={Logo} style={styles.logo} resizeMode="contain" />
      <View style={styles.container}>
        <CustomInput
          placeholder="Seu nome"
          value={name}
          setValue={setName}
          secureTextEntry={false}
        />
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
        <CustomInput
          placeholder="Confirme sua senha"
          value={passwordConfirmation}
          setValue={setPasswordConfirmation}
          secureTextEntry={true}
        />
        <CustomButton onPress={handleSignUp} text="Cadastrar" />
        <CustomButton
          onPress={() => navigator.goBack()}
          text="Já possuo uma conta"
          type="Secondary"
          bgColor="#e3e3e3"
          fgColor="#363636"
        />
      </View>
    </ScrollView>
  );
};

export default Register;
