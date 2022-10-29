import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {connect} from 'react-redux';

import ColorButton from '../components/ColorButton';
import {darkTheme, height, lightTheme, width} from '../utils/constants';
import {setPlayerOneColor, setPlayerTwoColor} from '../redux/actions';
import CustomButton from '../components/CustomButton';
import DarkModeSwitch from '../components/DarkModeSwitch';

const ChooseColor = ({
  navigation,
  dispatchSetPlayerOneColor,
  dispatchSetPlayerTwoColor,
  gameState,
}) => {
  return (
    <View
      style={gameState.DarkMode ? styles.containerDark : styles.containerLight}>
      <Text
        style={
          gameState.DarkMode ? styles.titleTextDark : styles.titleTextLight
        }>
        Choose a color
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: height * 0.1,
        }}>
        <Text
          style={
            gameState.DarkMode ? styles.playerTextDark : styles.playerTextLight
          }>
          Player 1:
        </Text>
        <ColorButton
          color={'#FF5252'}
          onPress={() => dispatchSetPlayerOneColor('#FF5252')}
          activeColor={gameState.PlayerOneColor}
        />
        <ColorButton
          color={'#FF4081'}
          onPress={() => dispatchSetPlayerOneColor('#FF4081')}
          activeColor={gameState.PlayerOneColor}
        />
        <ColorButton
          color={'#E040FB'}
          onPress={() => dispatchSetPlayerOneColor('#E040FB')}
          activeColor={gameState.PlayerOneColor}
        />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text
          style={
            gameState.DarkMode ? styles.playerTextDark : styles.playerTextLight
          }>
          Player 2:
        </Text>
        <ColorButton
          color={'#40C4FF'}
          onPress={() => dispatchSetPlayerTwoColor('#40C4FF')}
          activeColor={gameState.PlayerTwoColor}
        />
        <ColorButton
          color={'#18FFFF'}
          onPress={() => dispatchSetPlayerTwoColor('#18FFFF')}
          activeColor={gameState.PlayerTwoColor}
        />
        <ColorButton
          color={'#64FFDA'}
          onPress={() => dispatchSetPlayerTwoColor('#64FFDA')}
          activeColor={gameState.PlayerTwoColor}
        />
      </View>
      {/* <TouchableOpacity
        style={{height: 50, width: 50, backgroundColor: 'orange', top: 60}}
        onPress={() => navigation.navigate('Game')}></TouchableOpacity> */}
      <View style={{marginTop: height * 0.1}}></View>
      <CustomButton
        title={'Continue'}
        onPress={() => navigation.navigate('Game')}
      />
    </View>
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
  playerTextLight: {
    fontSize: 18,
    fontFamily: 'joystix',
    color: lightTheme.textColor,
  },
  playerTextDark: {
    fontSize: 18,
    fontFamily: 'joystix',
    color: darkTheme.textColor,
  },
  titleTextLight: {
    fontSize: 20,
    marginTop: height * 0.15,
    fontFamily: 'joystix',
    color: lightTheme.textColor,
  },
  titleTextDark: {
    fontSize: 20,
    marginTop: height * 0.15,
    fontFamily: 'joystix',
    color: darkTheme.textColor,
  },
});

const mapStateToProps: any = state => ({
  gameState: state,
});

const mapDispatchToProps: any = dispatch => {
  return {
    dispatchSetPlayerOneColor: color => dispatch(setPlayerOneColor(color)),
    dispatchSetPlayerTwoColor: color => dispatch(setPlayerTwoColor(color)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChooseColor);
