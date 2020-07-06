import * as React from 'react';
import { Platform, StyleSheet, Text, View, Alert } from 'react-native';
import { Card } from 'react-native-elements';

const User = () => {
  return (
    <Card>
      <View>
        <Text>Welcome to EduGame!</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default User;
