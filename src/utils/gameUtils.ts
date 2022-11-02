export const generateNewBoard = () => [
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
];

export const deepCloneBoard = board => [
  [...board[0]],
  [...board[1]],
  [...board[2]],
  [...board[3]],
  [...board[4]],
  [...board[5]],
];

const checkVertical = board => {
  for (let r = 2; r < 6; r++) {
    for (let c = 0; c < 6; c++) {
      if (board[r][c]) {
        if (
          board[r][c] === board[r - 1][c] &&
          board[r][c] === board[r - 2][c]
        ) {
          return board[r][c];
        }
      }
    }
  }
};

const checkHorizontal = board => {
  for (let r = 0; r < 6; r++) {
    for (let c = 0; c < 4; c++) {
      if (board[r][c]) {
        if (
          board[r][c] === board[r][c + 1] &&
          board[r][c] === board[r][c + 2]
        ) {
          return board[r][c];
        }
      }
    }
  }
};

const checkDiagonalRight = board => {
  for (let r = 2; r < 6; r++) {
    for (let c = 0; c < 4; c++) {
      if (board[r][c]) {
        if (
          board[r][c] === board[r - 1][c + 1] &&
          board[r][c] === board[r - 2][c + 2]
        ) {
          return board[r][c];
        }
      }
    }
  }
};

const checkDiagonalLeft = board => {
  for (let r = 2; r < 6; r++) {
    for (let c = 2; c < 6; c++) {
      if (board[r][c]) {
        if (
          board[r][c] === board[r - 1][c - 1] &&
          board[r][c] === board[r - 2][c - 2]
        ) {
          return board[r][c];
        }
      }
    }
  }
};

const checkDraw = board => {
  for (let r = 0; r < 6; r++) {
    for (let c = 0; c < 6; c++) {
      if (board[r][c] === null) {
        return null;
      }
    }
  }
  return 'draw';
};

export const checkForWin = board => {
  return (
    checkVertical(board) ||
    checkDiagonalRight(board) ||
    checkDiagonalLeft(board) ||
    checkHorizontal(board) ||
    checkDraw(board)
  );
};
