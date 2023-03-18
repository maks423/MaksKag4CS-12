const fs = require("fs");

fs.readFile("./scenario.txt", "utf8", (err, data) => {
if (err) throw err;

  const regularExpression = /(\w+):\s(.*?)(?=\n\w+:\s|$)/gs;
  let match;
  while ((match = regularExpression.exec(data)) !== null) {
    const characterName = match[1];
    const replica = match[2];
    const replicaFile = `${characterName}.txt`;
    fs.appendFileSync(replicaFile, replica + "\n");
  }
});

// const scenario = `Max: Quod equidem non reprehendo;
// Geralt: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibus natura iure responderit non esse verum aliunde finem beate vivendi, a se principia rei gerendae peti; Quae enim adhuc protulisti, popularia sunt, ego autem a te elegantiora desidero. Duo Reges: constructio interrete. Tum Lucius: Mihi vero ista valde probata sunt, quod item fratri puto. Bestiarum vero nullum iudicium puto. Nihil enim iam habes, quod ad corpus referas; Deinde prima illa, quae in congressu solemus: Quid tu, inquit, huc? Et homini, qui ceteris animantibus plurimum praestat, praecipue a natura nihil datum esse dicemus?

// Yennefer: Iam id ipsum absurdum, maximum malum neglegi. Quod ea non occurrentia fingunt, vincunt Aristonem; Atqui perspicuum est hominem e corpore animoque constare, cum primae sint animi partes, secundae corporis. Fieri, inquam, Triari, nullo pacto potest, ut non dicas, quid non probes eius, a quo dissentias. Equidem e Cn. An dubium est, quin virtus ita maximam partem optineat in rebus humanis, ut reliquas obruat?

// Geralt: Quis istum dolorem timet?
// Summus dolor plures dies manere non potest? Dicet pro me ipsa virtus nec dubitabit isti vestro beato M. Tubulum fuisse, qua illum, cuius is condemnatus est rogatione, P. Quod si ita sit, cur opera philosophiae sit danda nescio.`;

// [].find(e => ...) => null || elem
// [].includes(<value>) => boolean

// const results = scenario.match(/^[Geralt]+:/gim);

// const charachters = [];
// results.forEach((characterName) => {
//   const name = characterName.slice(0, -1);
//   if (!charachters.includes(name)) {
//     charachters.push(name);
//   }
// });

// console.log('charachters:',charachters);

// const charachterG = scenario.match(/^[Geralt]+:/gim);

// const Geralt = [];
// charachterG.forEach((characterGeralt) => {
//   const name = characterGeralt
//   if (!Geralt.includes(name)) {
//     Geralt.push(name);
//   }
// });

// fs.writeFileSync("./Geralt.txt", JSON.stringify(Geralt),);

// const charachterM = scenario.match(/^[Max]+:/gim);

// const Max = [];
// charachterM.forEach((characterMax) => {
//   const name = characterMax
//   if (!Max.includes(name)) {
//     Max.push(name);
//   }
// });

// fs.writeFileSync("./Max.txt", JSON.stringify(Max),);

// const charachterY = scenario.match(/^[Yennefer]+:/gim);

// const Yennefer = [];
// charachterY.forEach((characterYennefer) => {
//   const name = characterYennefer
//   if (!Yennefer.includes(name)) {
//     Yennefer.push(name);
//   }
// });

// fs.writeFileSync("./Yennefer.txt", JSON.stringify(Yennefer),);
