import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { checkImageURL } from "../utils";

import Controller from "../../assets/images/controller.svg";
import styles from "../styles/components/featuredcard.style";

const FeaturedProductCard = ({ product, selectedProduct, handleNavigate }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedProduct, product)}
      onPress={() => handleNavigate(product)}
    >
      <TouchableOpacity style={styles.imageContainer(selectedProduct, product)}>
        <Image
          source={{
            uri: checkImageURL(product?.image) ? product.image : Controller,
          }}
          style={styles.productImage}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <Text
          style={styles.productName(selectedProduct, product)}
          numberOfLines={1}
        >
          {product.name}
        </Text>
        <Text style={styles.publisher} numberOfLines={1}>
          {`Publicadora: ${product.publisher}`}
        </Text>
        <View style={styles.infoWrapper}>
          <Text style={styles.edition} numberOfLines={1}>{`Edição: ${
            product.edition.charAt(0).toUpperCase() + product.edition.slice(1)
          }`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FeaturedProductCard;
