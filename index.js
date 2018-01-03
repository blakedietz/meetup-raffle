const Table = require('cli-table');
const table = new Table({
  head: ['Name', 'Num Times Drawn'],
  colWidths: [20, 20],
});

const rawEntries = [
];

class Entry {
    constructor(name) {
        this.name = name,
        this.count = 0;
    }
}

const limit = 1e8;

let outcomes = rawEntries.map(entryName => new Entry(entryName));

for (let sampleIndex = 0; sampleIndex < limit; sampleIndex++) {
  outcomes[Math.floor(Math.random() * outcomes.length)].count++;
}

const sortedOutcomes = outcomes.sort((a, b) =>  a.count - b.count );

table.push(...sortedOutcomes.map((outcome) => [outcome.name, outcome.count]));
console.log(table.toString());

console.log(JSON.stringify(sortedOutcomes, null, 2));
