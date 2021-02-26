import React, { useState } from "react";
import { CheckBox, Text, StyleSheet, View } from "react-native";

const App = () => {
  const [isArts, setIsArts] = useState(true);
  const [isTechnology, setIsTechnology] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isArts}
          onValueChange={setIsArts}
        />
        <Text>Arts</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isTechnology}
          onValueChange={setIsTechnology}
        />
        <Text>Technology</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});

export default App;
