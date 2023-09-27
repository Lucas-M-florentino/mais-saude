import { Keyboard } from 'react-native';
import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, TouchableWithoutFeedback } from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style";
export default function Form() {
  const [height, setHeight] = React.useState(null);
  const [weight, setWeight] = React.useState(null);
  const [messageImc, setMessageImc] = React.useState(
    "Preencha o peso e a altura"
  );
  const [imc, setImc] = React.useState(null);
  const [textButton, setTextButton] = React.useState("Calcular");
  const [imcColor, setImcColor] = React.useState("#2ecc71");
  const [textButtonColor, setTextButtonColor] = React.useState("#2ecc71");

  const imcCalculator = () => {
    Keyboard.dismiss();
    return setImc((weight / (height * height)).toFixed(2));

  };
  const validationImc = () => {
    if (weight != null && height != null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc("Seu IMC é igual a: ");
      setTextButton("Calcular Novamente");
      // setImcColor("#2ecc71");
      setTextButtonColor("#2ecc71");
    } else {
      setImc(null);
      setMessageImc("Preencha o peso e a altura");
      setTextButton("Calcular");
      // setImcColor("#e74c3c");
      setTextButtonColor("#e74c3c");
    }
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

      <View style={styles.formContext}>
        <View style={styles.form}>
          <Text style={styles.formLabel}>Altura</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={setHeight}
            value={height}
            placeholder="Ex. 1.75"
            keyboardType="numeric"
          />
          <Text style={styles.formLabel}>Peso</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={setWeight}
            value={weight}
            placeholder="Ex. 80.365"
            keyboardType="numeric"
          />
          <TouchableOpacity
            style={styles.buttonCalculator}
            onPress={validationImc}
            color={textButtonColor}
            title={textButton}
          >
            <Text style={styles.textbuttonCalculator}>{textButton}</Text>
          </TouchableOpacity>
        </View>
        <ResultImc messageResultImc={messageImc} resultImc={imc} />
        <Image source={{ uri: "assets/img/indice-imc.jpg" }} />
      </View>
    </TouchableWithoutFeedback>
  );
}
