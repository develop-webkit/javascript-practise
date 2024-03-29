"use strict";
const inventor = [
    {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 }, 
    {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 }, 
    {first: 'Marie', last: 'Curie', year: 1867, passed: 1934 }, 
    {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 }, 
    {first: 'Max', last: 'Planck', year: 1858, passed: 1947 }
]

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', ' Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', ' Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', ' Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', ' Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi' , 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken' , 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William']; 

const vintageInv = inventor.filter(cur => cur.year >= 1500 && cur.year < 1599 );
console.log(vintageInv)  

const invFullName = inventor.map(cur => `${cur.first} ${cur.last}`);
console.log(invFullName)

const sortInv = inventor.sort( (a,b) => (a.year - b.year) );
console.log(sortInv);

const invLife = inventor.reduce(reduceFunc,0);
function reduceFunc(total,cur){
    return total += (cur.passed - cur.year)
}

const inventorAge = inventor.sort((a,b)=> { console.log((b.passed - b.year), (a.passed - a.year)); return (b.passed - b.year) - (a.passed - a.year) });
console.table(inventorAge);