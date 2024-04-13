import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Button, Text } from 'react-native-paper'; // Importing Text from 'react-native-paper'

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate('Details')}
        mode="contained"
      >
        Go to Details
      </Button>
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
