import { Text, TouchableOpacity, View } from "react-native";

import styles from "../styles/components/productfooter.style";

const ProductFooter = ({ handleClick, price }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.priceText}>{`Preço: R$ ${price.toFixed(2)}`}</Text>
      <TouchableOpacity style={styles.addToCartButton} onPress={handleClick}>
        <Text style={styles.addToCartText}>Adicionar ao carrinho</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductFooter;
