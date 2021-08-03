const { prop, sortWith, ascend, descend } = require('ramda');
const students = [
  { name: 'Quentin', studentBid: '1', formula: 1, efc: 0, originalNeed: 9500 },
  { name: 'Eliot', studentBid: '2', formula: 1, efc: 500, originalNeed: 10000 },
  { name: 'Margo', studentBid: '3', formula: 2, efc: 1500, originalNeed: 9500 },
  { name: 'Julia', studentBid: '4', formula: 2, efc: 1000, originalNeed: 9000 },
  { name: 'Kady', studentBid: '5', formula: 3, efc: 0, originalNeed: 1000 },
  { name: 'Penny', studentBid: '6', formula: 4, efc: 500, originalNeed: 8000 }
];

// Packaging Order by Formula, then by EFC:
const sortedByFormulaThenEFC = sortWith(
  [ascend(prop('formula')), ascend(prop('efc'))],
  students
);
console.log(
  'Packaging Order by Formula, then by EFC Test: ',
  sortedByFormulaThenEFC
);

// Packaging Order by Formula, then by Need:		:
const sortedByFormulaThenNeed = sortWith(
  [ascend(prop('formula')), descend(prop('originalNeed'))],
  students
);
console.log(
  'Packaging Order by Formula, then by Need: ',
  sortedByFormulaThenNeed
);

// Packaging Order by EFC only:
const sortedByEFCOnly = sortWith([ascend(prop('efc'))], students);
console.log('Packaging Order by EFC only: ', sortedByEFCOnly);

// Packaging Order by Need only:
const sortedByOriginalNeedOnly = sortWith(
  [descend(prop('originalNeed'))],
  students
);
console.log('Packaging Order by Need only: ', sortedByOriginalNeedOnly);
