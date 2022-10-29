export const newGame = board => {
  return {
    type: 'NEW_GAME',
    payload: board,
  };
};
export const togglePlayer = payload => {
  // console.log('togglePlayer action reached', payload);
  return {
    type: 'TOGGLE_PLAYER',
    payload: payload,
  };
};
export const endGame = payload => {
  return {
    type: 'END_GAME',
    payload: payload,
  };
};
export const updateMessage = message => {
  return {
    type: 'UPDATE_MSG',
    payload: message,
  };
};
export const setPlayerOneColor = color => {
  return {
    type: 'UPDATE_P1_COLOR',
    payload: color,
  };
};
export const setPlayerTwoColor = color => {
  return {
    type: 'UPDATE_P2_COLOR',
    payload: color,
  };
};
export const toggleDarkMode = value => {
  return {
    type: 'TOGGLE_DARK_MODE',
    payload: value,
  };
};
export const resetScores = () => {
  return {
    type: 'RESET_SCORES',
  };
};
export const setPlayerOneWin = payload => {
  return {
    type: 'SET_P1_WIN',
    payload: payload,
  };
};
export const setPlayerTwoWin = payload => {
  return {
    type: 'SET_P2_WIN',
    payload: payload,
  };
};
