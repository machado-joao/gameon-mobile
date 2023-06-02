import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { checkImageURL } from "../utils/index";

import Controller from "../../assets/images/controller.svg";
import styles from "../styles/components/productcard.style";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ProductCard = ({ product, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.imageContainer}>
        <Image
          source={{
            uri: checkImageURL(product.image) ? product.image : Controller,
          }}
          style={styles.image}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.productName} numberOfLines={1}>
          {product.name}
        </Text>
        {product.discount > 0 && (
          <View style={styles.discountContainer}>
            <Text
              style={styles.discountText}
            >{`${product.discount}% de desconto`}</Text>
          </View>
        )}
        <Text style={styles.price}>{`Preço: R$ ${
          product.discount > 0
            ? (
                product.price -
                product.price * (product.discount / 100)
              ).toFixed(2)
            : product.price.toFixed(2)
        }`}</Text>
        <View style={styles.platformsContainer}>
          {product.platforms.includes("Switch") && (
            <MaterialCommunityIcons
              name="nintendo-switch"
              size={24}
              color="#ef4444"
            />
          )}
          {product.platforms.includes("PlayStation") && (
            <MaterialCommunityIcons
              name="sony-playstation"
              size={24}
              color="#3b82f6"
            />
          )}
          {product.platforms.includes("Xbox") && (
            <MaterialCommunityIcons
              name="microsoft-xbox"
              size={24}
              color="#22c55e"
            />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
