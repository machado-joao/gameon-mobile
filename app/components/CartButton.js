import React from "react";
import { Image, TouchableOpacity, View } from "react-native";

import styles from "../styles/components/cart.style";
import icons from "../styles/constants/icons";

const CartButton = ({ handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View style={styles.cartContainer}>
        <TouchableOpacity style={styles.cartButton} onPress={handlePress}>
          <Image
            source={icons.cart}
            style={styles.cartButtonImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default CartButton;
