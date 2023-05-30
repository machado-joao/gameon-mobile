import React, { useState, useEffect } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

import styles from "../styles/components/products.style";

import ProductCard from "./ProductCard";

const Products = ({ endpoint, title }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(true);
  const navigator = useNavigation();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${endpoint}`);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle} numberOfLines={1}>
          {title}
        </Text>
        <TouchableOpacity onPress={handleShowAll}>
          <Text style={styles.headerButton}>
            {showAll ? "Ocultar todos" : "Mostrar todos"}
          </Text>
        </TouchableOpacity>
      </View>
      {showAll && (
        <View style={styles.cardsContainer}>
          {isLoading ? (
            <ActivityIndicator color="#1d4ed8" size="large" />
          ) : error ? (
            <Text
              style={{ fontFamily: "Iceland", fontSize: 16 }}
            >{`Ops, ocorreu um erro inesperado!`}</Text>
          ) : (
            data?.map((product) => (
              <ProductCard
                product={product}
                key={product._id}
                handleNavigate={() => {
                  navigator.navigate("Produto", { productId: product._id });
                }}
              />
            ))
          )}
        </View>
      )}
    </View>
  );
};

export default Products;
