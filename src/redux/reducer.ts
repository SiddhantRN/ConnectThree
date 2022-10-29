const initialState = {
  player1: 1,
  player2: 2,
  currentPlayer: 1,
  board: [
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
  ],
  gameOver: false,
  message: '',
  PlayerOneScore: 0,
  PlayerTwoScore: 0,
  PlayerOneColor: '#FF5252',
  PlayerTwoColor: '#40C4FF',
  DarkMode: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_GAME':
      return {
        ...state,
        message: action.payload.message,
        board: action.payload.board,
        currentPlayer: 1,
        gameOver: false,
      };
    case 'TOGGLE_PLAYER':
      return {
        ...state,
        currentPlayer: action.payload.nextPlayer,
        board: action.payload.board,
      };
    case 'END_GAME':
      return {
        ...state,
        message: action.payload.message,
        board: action.payload.board,
      };
    case 'UPDATE_MSG':
      return {
        ...state,
        message: action.payload.message,
      };
    case 'UPDATE_P1_COLOR':
      return {
        ...state,
        PlayerOneColor: action.payload,
      };
    case 'UPDATE_P2_COLOR':
      return {
        ...state,
        PlayerTwoColor: action.payload,
      };
    case 'TOGGLE_DARK_MODE':
      return {
        ...state,
        DarkMode: action.payload,
      };
    case 'RESET_SCORES':
      return {
        ...state,
        PlayerOneScore: 0,
        PlayerTwoScore: 0,
      };
    case 'SET_P1_WIN':
      return {
        ...state,
        message: action.payload.message,
        board: action.payload.board,
        PlayerOneScore: state.PlayerOneScore + 1,
        gameOver: true,
      };
    case 'SET_P2_WIN':
      return {
        ...state,
        message: action.payload.message,
        board: action.payload.board,
        PlayerTwoScore: state.PlayerTwoScore + 1,
        gameOver: true,
      };

    default:
      return state;
  }
};
