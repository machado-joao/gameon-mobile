import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

import styles from "../styles/components/featuredproducts.style";

import FeaturedProductCard from "./FeaturedProductCard";

const FeaturedProducts = ({ endpoint }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
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

  const handleNavigate = (product) => {
    navigator.navigate("Produto", { productId: product._id });
    setSelectedProduct(product._id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Em alta</Text>
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
            <Text style={{ fontFamily: "Iceland", fontSize: 16 }}>
              Ops, ocorreu um erro inesperado!
            </Text>
          ) : (
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <FeaturedProductCard
                  product={item}
                  selectedProduct={selectedProduct}
                  handleNavigate={handleNavigate}
                />
              )}
              keyExtractor={(item) => item._id}
              contentContainerStyle={{ columnGap: 8 }}
              showsHorizontalScrollIndicator={false}
              horizontal
            />
          )}
        </View>
      )}
    </View>
  );
};

export default FeaturedProducts;
