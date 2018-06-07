"use strict";

const chess = {
  gameContainerEl: document.getElementById('chess'),

    renderMap() {
      const cols = [0, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 0];
      const rows = [0, '1', '2', '3', '4', '5', '6', '7', '8', 0];
      const whiteFigur = [0,'&#9814;', '&#9816;', '&#9815;', '&#9812;', '&#9813;', '&#9815;', '&#9816;', '&#9814;', 0];
      const whiteFigurTwo = [0, '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', 0];
      const blackFigur = [0, '&#9820;', '&#9822;', '&#9821;', '&#9819;', '&#9818;', '&#9821;', '&#9822;', '&#9820;', 0];
      const blackFigurTwo = [0, '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', 0];

      
      for (let row = 0; row < 10; row++) {
        const tr = document.createElement('tr');
        this.gameContainerEl.appendChild(tr);
        for (let col = 0; col < 10; col++) {
          const td = document.createElement('td');
          tr.appendChild(td);
          if (row === 0 && cols[col] || row === 9 && cols[col]) {
              td.innerHTML = cols[col];
          }
          if (col === 0 && rows[row] || col === 9 && rows[row]) {
              td.innerHTML = rows[row];
          }
          if (this.isCellIsBlack(col, row)) {
              td.style.backgroundColor = 'grey';
          }
          if (row === 1 && blackFigur[col] !==0) {
              td.innerHTML = blackFigur[col];
          }
          if (row === 2 && blackFigurTwo[col] !==0) {
              td.innerHTML = blackFigurTwo[col];
          }
          if (row === 8 && whiteFigur[col] !==0) {
              td.innerHTML = whiteFigur[col];
          }
          if (row === 7 && whiteFigurTwo[col] !==0) {
              td.innerHTML = whiteFigurTwo[col];
          }
      }
    }
  },

  isCellIsBlack(rowNum, colNum) {
      if(rowNum === 0 || rowNum === 9 || colNum === 0 || colNum === 9){
          return;
      }
      if (colNum % 2 !== rowNum % 2) {
          return true
      }
  }
};

chess.renderMap();