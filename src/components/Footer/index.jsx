import React from "react";

import { View, Text} from "react-native";
import styles from "./style";
export default function Footer(props) {
  return (
    <View style={styles.boxFooter}>
      <Text style={styles.textFooter}>Desenvolvido por:{props.devName}</Text>
      <Text style={styles.textFooter}>Github: {props.github}</Text>
    </View>
  );
}
