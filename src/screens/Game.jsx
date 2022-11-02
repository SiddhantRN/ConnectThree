import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {connect} from 'react-redux';

import Row from '../components/Row';
import {darkTheme, height, lightTheme, width} from '../utils/constants';
import {
  checkForWin,
  deepCloneBoard,
  generateNewBoard,
} from '../utils/gameUtils';
import {
  newGame,
  endGame,
  togglePlayer,
  updateMessage,
  setPlayerTwoWin,
  setPlayerOneWin,
} from '../redux/actions';
import CustomButton from '../components/CustomButton';

const Game = ({
  gameState,
  dispatchEndGame,
  dispatchNewGame,
  dispatchTogglePlayer,
  dispatchUpdateMessage,
  dispatchSetPlayerOneWin,
  dispatchSetPlayerTwoWin,
  navigation,
}) => {
  const play = c => {
    if (!gameState.gameOver) {
      let board = deepCloneBoard(gameState.board);
      //check if cell is taken by starting at the bottom row and working up
      for (let r = 5; r >= 0; r--) {
        if (!board[r][c]) {
          board[r][c] = gameState.currentPlayer;
          break;
        }
      }
      // Check status of board
      let result = checkForWin(board);
      if (result === gameState.player1) {
        dispatchSetPlayerOneWin({
          message: 'Player1 wins!',
          board,
        });
      } else if (result === gameState.player2) {
        dispatchSetPlayerTwoWin({
          message: 'Player2 wins!',
          board,
        });
      } else if (result === 'draw') {
        dispatchEndGame({
          message: 'Draw Game!',
          board,
        });
      } else {
        const nextPlayer =
          gameState.currentPlayer === gameState.player1
            ? gameState.player2
            : gameState.player1;

        dispatchTogglePlayer({nextPlayer, board});
      }
    }
    // it's gameover and a user clicked a cell
    else {
      dispatchUpdateMessage({
        message: 'Game Over.Start a new game.',
      });
    }
  };

  return (
    <View
      style={gameState.DarkMode ? styles.containerDark : styles.containerLight}>
      <View style={{marginTop: height * 0.05}}>
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
      <View style={styles.boardLayout}>
        {gameState.board.map((boardRow, i) => (
          <Row key={i} play={play} row={boardRow} />
        ))}
      </View>
      <Text
        style={
          gameState.DarkMode ? styles.messageTextDark : styles.messageTextLight
        }>
        {gameState.message}
      </Text>
      <View style={styles.buttonContainer}>
        <CustomButton
          title={'New Game'}
          onPress={() =>
            dispatchNewGame({board: generateNewBoard(), message: ''})
          }
        />
        <CustomButton
          title={'Home Screen'}
          onPress={() => navigation.navigate('Welcome')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerLight: {
    flex: 1,
    backgroundColor: lightTheme.backgroundColor,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 10,
    alignItems: 'center',
    alignSelf: 'center',
  },
  containerDark: {
    flex: 1,
    backgroundColor: darkTheme.backgroundColor,
  },
  boardLayout: {
    height: height * 0.5,
    width: width,
    backgroundColor: 'pink',
    borderRadius: 10,
    marginTop: 20,
  },
  scoreTextLight: {
    fontSize: 18,
    fontFamily: 'joystix',
    color: lightTheme.textColor,
  },
  scoreTextDark: {
    fontSize: 18,
    fontFamily: 'joystix',
    color: darkTheme.textColor,
  },
  messageTextLight: {
    fontSize: 18,
    fontFamily: 'joystix',
    color: lightTheme.textColor,
    alignSelf: 'center',
  },
  messageTextDark: {
    fontSize: 18,
    fontFamily: 'joystix',
    color: darkTheme.textColor,
    alignSelf: 'center',
  },
});

const mapStateToProps = state => ({
  gameState: state,
});

const mapDispatchToProps = dispatch => {
  return {
    dispatchEndGame: payload => dispatch(endGame(payload)),
    dispatchSetPlayerOneWin: payload => dispatch(setPlayerOneWin(payload)),
    dispatchSetPlayerTwoWin: payload => dispatch(setPlayerTwoWin(payload)),
    dispatchNewGame: payload => dispatch(newGame(payload)),
    dispatchTogglePlayer: payload => dispatch(togglePlayer(payload)),
    dispatchUpdateMessage: payload => dispatch(updateMessage(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
