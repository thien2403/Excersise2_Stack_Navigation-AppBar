import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Text } from 'react-native-paper';

const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>DetailsScreen</Text>
    </View>
  )
}

export default DetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
