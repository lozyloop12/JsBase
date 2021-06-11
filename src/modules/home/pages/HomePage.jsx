import React from 'react';
import { View, Text } from 'react-native';

const Homepage = (props) => {
  const { navigation } = props


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home page</Text>
    </View>
  );
}

export default Homepage;

