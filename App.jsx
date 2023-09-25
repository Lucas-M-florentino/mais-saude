import { ScrollView, StyleSheet, Text, View } from "react-native";
import Title from "./src/components/Title";
import Main from "./src/components/Main";
import Footer from "./src/components/Footer";

export default function App() {
  return (
    <View style={styles.container}>
      
        <Title />
        <Main />
        <Footer
          devName="Lucas Florentino"
          github="https://github.com/Lucas-M-Florentino"
        />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e5e5",
    paddingTop: 80,
  },
});
