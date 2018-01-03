const Table = require('cli-table');
const table = new Table({
  head: ['Name', 'Num Times Drawn'],
  colWidths: [20, 20],
});

const rawEntries = [
  "TheKnight4041",
  "xquinnma",
  "Tashagnar",
  "Rob27shred",
  "l0inches",
  "Jesus_McDoge",
  "nguyenbabao",
  "Rinforzando",
  "elmwoodtim",
  "VVomboh",
  "Murrderthon3000",
  "Gnobold",
  "G7300",
  "LordRycho",
  "godzlittlesoldier",
  "aFriendlyAlly",
  "wikidpanda",
  "MacDanels",
  "yumether",
  "hewhonamedme",
  "azulyf",
  "CaptainGenius",
  "nzhoward",
  "LE-37",
  "Qu4troQu4tro",
  "name_is_taken1",
  "asen1994",
  "surfaceseven",
  "Rainb0wBac0n",
  "notJef",
  "akhronus",
  "Professor_Fister",
  "dohmain",
  "na7thana",
  "TheOrganHarvester",
  "Jannsen8",
  "Plasmidsmack321",
  "yomonmon",
  "llliiili",
  "yeticabra",
  "yusehz",
  "GeeWhizWithout",
  "89sec",
  "mbljs5555",
  "na7thana",
  "BBMathlvr",
  "aurora_reddit"
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
