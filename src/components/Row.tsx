import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

import {width} from '../utils/constants';
import AnimatedDisk from './AnimatedDisk';

const Row = ({row, play, gameState}) => {
  return (
    <View style={styles.container}>
      {row.map((cell, i) => (
        <Cell
          key={i}
          value={cell}
          columnIndex={i}
          play={play}
          PlayerOneColor={gameState.PlayerOneColor}
          PlayerTwoColor={gameState.PlayerTwoColor}
        />
      ))}
      {/* <TouchableOpacity
        style={{
          height: 30,
          width: 30,
          borderRadius: 15,
          backgroundColor: 'red',
        }}
        onPress={() => console.log(row)}></TouchableOpacity> */}
    </View>
  );
};

const Cell = ({value, columnIndex, play, PlayerOneColor, PlayerTwoColor}) => {
  let color = 'white';

  if (value === 1) {
    color = PlayerOneColor;
  } else if (value === 2) {
    color = PlayerTwoColor;
  }

  return (
    <TouchableOpacity
      style={styles.cell}
      onPress={() => play(columnIndex)}
      activeOpacity={1}>
      {/* value== null=> don't show animated */}
      {/* value == 1 or 2 show animated.view */}
      <View
        style={{
          height: 50,
          width: 50,
          borderRadius: 25,
          backgroundColor: '#fff',
        }}></View>
      {(value == 1 || value == 2) && <AnimatedDisk color={color} />}
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

const mapStateToProps: any = state => ({
  gameState: state,
});

const mapDispatchToProps: any = dispatch => {
  return {
    // dispatchSetPlayerOneColor: color => dispatch(setPlayerOneColor(color)),
    // dispatchSetPlayerTwoColor: color => dispatch(setPlayerTwoColor(color)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Row);
