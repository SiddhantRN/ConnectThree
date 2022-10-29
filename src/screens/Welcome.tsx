import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {connect} from 'react-redux';

import {darkTheme, height, lightTheme, width} from '../utils/constants';
import {resetScores, newGame} from '../redux/actions';
import DarkModeSwitch from '../components/DarkModeSwitch';
import {generateNewBoard} from '../utils/gameUtils';
import CustomButton from '../components/CustomButton';
import AnimatedDisk from '../components/AnimatedDisk';

const Welcome = ({
  navigation,
  gameState,
  dispatchResetScores,
  dispatchNewGame,
}) => {
  const checkActiveBoard = () => {
    if (
      JSON.stringify(gameState.board) === JSON.stringify(generateNewBoard())
    ) {
      console.log('active board here');
      return false;
    }
    return true;
  };

  return (
    <View
      style={gameState.DarkMode ? styles.containerDark : styles.containerLight}>
      <DarkModeSwitch />
      <Text
        style={
          gameState.DarkMode ? styles.titleTextDark : styles.titleTextLight
        }>
        Connect |||
      </Text>
      <View style={{marginTop: height * 0.1}}>
        <Text
          style={
            gameState.DarkMode ? styles.scoreTextDark : styles.scoreTextLight
          }>
          Scores:
        </Text>
        <Text
          style={
            gameState.DarkMode ? styles.scoreTextDark : styles.scoreTextLight
          }>
          Player 1 : {gameState.PlayerOneScore}
        </Text>
        <Text
          style={
            gameState.DarkMode ? styles.scoreTextDark : styles.scoreTextLight
          }>
          Player 2 : {gameState.PlayerTwoScore}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title={'New Game'}
          onPress={() => {
            dispatchNewGame({board: generateNewBoard(), message: ''});
            navigation.navigate('ChooseColor');
          }}
        />
        {checkActiveBoard() && (
          <CustomButton
            title={'Continue Game'}
            onPress={() => navigation.navigate('Game')}
          />
        )}
        <CustomButton
          title={'Reset Score'}
          onPress={() => dispatchResetScores()}
        />
      </View>
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
  buttonContainer: {
    position: 'absolute',
    bottom: 10,
    alignItems: 'center',
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
    backgroundColor: 'pink',
    Margintop: 60,
  },
  titleTextLight: {
    marginTop: height * 0.2,
    fontSize: 29,
    fontFamily: 'joystix',
    color: lightTheme.textColor,
  },
  titleTextDark: {
    marginTop: height * 0.2,
    fontSize: 29,
    fontFamily: 'joystix',
    color: darkTheme.textColor,
  },
});

const mapStateToProps: any = state => ({
  gameState: state,
});

const mapDispatchToProps: any = dispatch => {
  return {
    dispatchResetScores: () => dispatch(resetScores()),
    dispatchNewGame: payload => dispatch(newGame(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
