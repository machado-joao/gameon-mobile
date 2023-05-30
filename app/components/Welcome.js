import React, { useState } from "react";
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import styles from "../styles/components/welcome.style";
import icons from "../styles/constants/icons";

import CartButton from "./CartButton";

const platforms = ["Switch", "PlayStation", "Xbox"];

const Welcome = ({
  productName,
  setProductName,
  handleClick,
  handleChange,
}) => {
  const [activePlatform, setActivePlatform] = useState("Todos");

  const handlePress = () => {
    console.log("O carrinho de compras não foi implementado.");
  };

  return (
    <View>
      <View style={styles.container}>
        <CartButton handlePress={handlePress} />
        <Text style={styles.welcomeMessage}>
          Encontre os jogos que você procura
        </Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            onChangeText={(text) => setProductName(text)}
            placeholder="Procure por um jogo"
            style={styles.searchInput}
            value={productName}
          />
        </View>
        <TouchableOpacity style={styles.searchButton} onPress={handleClick}>
          <Image
            source={icons.magnifying_glass}
            style={styles.searchButtonImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={platforms}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activePlatform, item)}
              onPress={() => {
                setActivePlatform(item);
                handleChange(item);
              }}
            >
              <Text style={styles.tabText(activePlatform, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: 8 }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
