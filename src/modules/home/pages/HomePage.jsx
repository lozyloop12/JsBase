import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

const Homepage = (props) => {
  const { navigation } = props
  const { t } = useTranslation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{t('hello')}</Text>
    </View>
  );
}

export default Homepage;

