import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import {width} from '../utils/constants';

const ColorButton = ({color, onPress, activeColor}) => {
  return (
    <TouchableOpacity
      style={{
        height: 50,
        width: 50,
        margin: 5,
        backgroundColor: color,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPress}>
      {color == activeColor && (
        <Entypo name="check" size={24} color={'#33691E'} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3b6aee',
    flexDirection: 'row',
  },
  cell: {
    width: width / 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default ColorButton;
