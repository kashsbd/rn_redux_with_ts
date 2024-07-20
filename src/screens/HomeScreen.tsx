import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {HomeScreenNavigationProp} from '../navigation/types';
import {RootState} from '../store';

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const counter = useSelector((state: RootState) => state.counter.counter);

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>Counter: {counter}</Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Counter')}>
        <Text style={styles.centerText}>Go to counter screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    padding: 10,
    rowGap: 10,
  },
  textStyle: {
    fontSize: 18,
    textAlign: 'center',
  },
  buttonStyle: {
    padding: 10,
    borderWidth: StyleSheet.hairlineWidth,
  },
  centerText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default HomeScreen;
