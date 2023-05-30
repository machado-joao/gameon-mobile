import React, { useState, useEffect } from "react";
import { ActivityIndicator, Image, View, Text } from "react-native";
import { checkImageURL } from "../utils";
import axios from "axios";
import { API_HOST, PRODUCT } from "@env";

import Controller from "../../assets/images/controller.svg";
import styles from "../styles/screens/product.style";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ProductFooter from "../components/ProductFooter";

const Product = ({ route }) => {
  const { productId } = route.params;
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${API_HOST}${PRODUCT}${productId}`);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, []);

  const handleClick = () => {
    console.log("Adicionar ao carrinho não foi implementado.");
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator color="#1d4ed8" size="large" />
      ) : error ? (
        <Text style={{ fontFamily: "Iceland", fontSize: 16 }}>
          {`Ops, ocorreu um erro inesperado!`}
        </Text>
      ) : (
        <>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: checkImageURL(data.image) ? data.image : Controller,
              }}
              style={styles.productImage}
            />
          </View>
          <View style={styles.productNameContainer}>
            <Text style={styles.productName}>{data.name}</Text>
          </View>
          <View style={styles.platformsContainer}>
            {data.platforms.includes("Switch") && (
              <MaterialCommunityIcons
                name="nintendo-switch"
                size={20}
                color="#ef4444"
              />
            )}
            {data.platforms.includes("PlayStation") && (
              <MaterialCommunityIcons
                name="sony-playstation"
                size={20}
                color="#3b82f6"
              />
            )}
            {data.platforms.includes("Xbox") && (
              <MaterialCommunityIcons
                name="microsoft-xbox"
                size={20}
                color="#22c55e"
              />
            )}
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.productDescription}>{data.description}</Text>
          </View>
          <ProductFooter handleClick={handleClick} price={data.price} />
        </>
      )}
    </View>
  );
};

export default Product;
