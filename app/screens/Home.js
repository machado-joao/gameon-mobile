import React, { useState } from "react";
import { Alert, SafeAreaView, ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { API_HOST, PRODUCTS, RANDOM_PRODUCTS } from "@env";

import Welcome from "../components/Welcome";
import FeaturedProducts from "../components/FeaturedProducts";
import Products from "../components/Products";

const Home = () => {
  const [productName, setProductName] = useState(null);
  const navigator = useNavigation();

  const handleSearch = () => {
    if (productName !== null) {
      let name = productName.slice();
      setProductName(null);
      navigator.navigate("Buscar", { productName: name });
    } else {
      Alert.alert("Busca inválida!", "Digite um nome antes de buscar.");
    }
  };

  const handleChange = (productPlatform) => {
    if (productPlatform !== "Todos") {
      navigator.navigate("Buscar", { productPlatform });
    }
  };

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Welcome
            productName={productName}
            setProductName={setProductName}
            handleClick={handleSearch}
            handleChange={handleChange}
          />
          <FeaturedProducts endpoint={`${API_HOST}${RANDOM_PRODUCTS}`} />
          <Products endpoint={`${API_HOST}${PRODUCTS}`} title="Catálogo" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
