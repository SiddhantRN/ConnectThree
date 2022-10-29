import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Switch} from 'react-native';
// import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
// import {Switch} from 'react-native-switch';
import {connect} from 'react-redux';

import {toggleDarkMode} from '../redux/actions';
import {darkTheme, lightTheme} from '../utils/constants';

const DarkModeSwitch = ({dispatchToggleDarkMode, gameState}) => {
  return (
    <View style={styles.container}>
      <Switch
        value={gameState.DarkMode}
        onValueChange={val => dispatchToggleDarkMode(val)}
        trackColor={{false: '#767577', true: 'green'}}
        thumbColor={gameState.DarkMode ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
      />
      <Text
        style={
          gameState.DarkMode ? styles.buttonTextDark : styles.buttonTextLight
        }>
        Dark Mode
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 20,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonTextLight: {
    fontSize: 14,
    fontFamily: 'joystix',
    color: lightTheme.textColor,
    marginLeft: 5,
  },
  buttonTextDark: {
    fontSize: 14,
    fontFamily: 'joystix',
    color: darkTheme.textColor,
    marginLeft: 5,
  },
});

const mapStateToProps: any = state => ({
  gameState: state,
});

const mapDispatchToProps: any = dispatch => {
  return {
    dispatchToggleDarkMode: value => dispatch(toggleDarkMode(value)),
    //   dispatchSetPlayerTwoColor: color => dispatch(setPlayerTwoColor(color)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DarkModeSwitch);
