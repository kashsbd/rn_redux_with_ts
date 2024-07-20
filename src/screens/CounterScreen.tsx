import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {useSelector} from 'react-redux';

import {RootState, useAppDispatch} from '../store';
import {decrement, increment} from '../store/slices/counterSlice';

const CounterScreen = () => {
  const counter = useSelector((state: RootState) => state.counter.counter);
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.counterStyle}>Counter: {counter}</Text>
      <View>
        <Button title="Increase" onPress={() => dispatch(increment())} />
        <Button title="Decrease" onPress={() => dispatch(decrement())} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    rowGap: 10,
    marginTop: 10,
  },
  counterStyle: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default CounterScreen;
