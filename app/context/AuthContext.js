import React, { createContext, useContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import axios from "axios";
import { API_HOST, USER_REGISTER, USER_LOGIN, USER_KEY, TOKEN_KEY } from "@env";

const USER = USER_KEY;
const TOKEN = TOKEN_KEY;
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    user: null,
    token: null,
    authenticated: false,
  });

  useEffect(() => {
    const loadToken = async () => {
      const user = await SecureStore.getItemAsync(USER);
      const token = await SecureStore.getItemAsync(TOKEN);

      if (token) {
        setAuthState({
          user: user,
          token: token,
          authenticated: true,
        });
      }
    };
    loadToken();
  }, []);

  const register = async (name, email, password) => {
    try {
      const response = await axios.post(`${API_HOST}${USER_REGISTER}`, {
        name,
        email,
        password,
      });

      setAuthState({
        user: response.data.user,
        token: response.data.token,
        authenticated: true,
      });

      await SecureStore.setItemAsync(USER, JSON.stringify(response.data.user));
      await SecureStore.setItemAsync(TOKEN, response.data.token);

      return response;
    } catch (error) {
      console.error(error);
    }
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post(`${API_HOST}${USER_LOGIN}`, {
        email,
        password,
      });

      setAuthState({
        user: response.data.user,
        token: response.data.token,
        authenticated: true,
      });

      await SecureStore.setItemAsync(USER, JSON.stringify(response.data.user));
      await SecureStore.setItemAsync(TOKEN, response.data.token);

      return response;
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    await SecureStore.deleteItemAsync(USER);
    await SecureStore.deleteItemAsync(TOKEN);

    setAuthState({
      user: null,
      token: null,
      authenticated: false,
    });
  };

  const value = { register, login, logout, authState };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
