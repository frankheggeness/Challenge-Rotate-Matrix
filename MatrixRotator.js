const Direction = require('./Direction').Direction;

/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
module.exports = class MatrixRotator {
  constructor(matrix) {
    this.matrix = matrix;
  }

  //      |-- Must be Direction.CW
  //      v        or Direction.CCW
  rotate(direction) {
    // do work here
    // console.log(this.matrix);
    let matrix = this.matrix;

    if (direction === 'ClockWise') {
      let returnArray = [];
      for (let y = 0; y < matrix[0].length; y++) {
        let newRow = [];
        for (let i = matrix.length - 1; i >= 0; i--) {
          newRow.push(matrix[i][y]);
        }
        returnArray.push(newRow);
      }
      this.matrix = returnArray;
    }

    if (direction === 'CounterClockWise') {
      let returnArray = [];
      for (let y = matrix[0].length - 1; y >= 0; y--) {
        let newRow = [];
        for (let i = 0; i < matrix.length; i++) {
          newRow.push(matrix[i][y]);
        }
        returnArray.push(newRow);
      }
      this.matrix = returnArray;
    }

    return this.matrix;
  }
};
