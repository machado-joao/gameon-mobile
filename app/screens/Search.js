import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { API_HOST, PRODUCTS_BY_NAME, PRODUCTS_BY_PLATFORM } from "@env";

import Products from "../components/Products";

const Search = ({ route }) => {
  const { productName, productPlatform } = route.params;

  return (
    <SafeAreaView>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View>
          {productName && (
            <Products
              endpoint={`${API_HOST}${PRODUCTS_BY_NAME}${productName}`}
              title={`Resultados`}
            />
          )}
          {productPlatform && (
            <Products
              endpoint={`${API_HOST}${PRODUCTS_BY_PLATFORM}${productPlatform}`}
              title={`Resultados`}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
