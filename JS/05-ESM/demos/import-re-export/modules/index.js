// modules/index.js
import { add, subtract } from './math.js';
import { PI, calculateCircumference } from './geometry.js';

export { add, subtract, PI, calculateCircumference };

// Or you can write it like this
// (Make sure you comment out the previous export statement before uncommenting this code)
// export { add, subtract } from './math.js';
// export { PI, calculateCircumference } from './geometry.js';
