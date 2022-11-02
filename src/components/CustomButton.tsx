import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {connect} from 'react-redux';

import {darkTheme, lightTheme} from '../utils/constants';

const CustomButton = ({title, gameState, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text
        style={
          gameState.DarkMode ? styles.scoreTextDark : styles.scoreTextLight
        }>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerLight: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: lightTheme.backgroundColor,
  },
  containerDark: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: darkTheme.backgroundColor,
  },
  scoreTextLight: {
    fontSize: 25,
    fontFamily: 'joystix',
    color: lightTheme.textColor,
  },
  scoreTextDark: {
    fontSize: 25,
    fontFamily: 'joystix',
    color: darkTheme.textColor,
  },
  buttonTextLight: {
    fontSize: 25,
    fontFamily: 'joystix',
    color: lightTheme.textColor,
  },
  buttonTextDark: {
    fontSize: 25,
    fontFamily: 'joystix',
    color: darkTheme.textColor,
  },
  button: {
    padding: 10,
    // backgroundColor: 'pink',
    Margintop: 60,
  },
});

const mapStateToProps: any = state => ({
  gameState: state,
});

const mapDispatchToProps: any = dispatch => {
  return {
    // dispatchResetScores: () => dispatch(resetScores()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomButton);
