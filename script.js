"use strict";
// let marksWeight = 78;
// let marksHeight = 1.69;
// let johnWeight = 92;
// let johnHeight = 1.95;

// function bmi(mass, height) {
//     return ((mass/height**2).toFixed(2));
// }

// let marksBMI = bmi(marksWeight,marksHeight);
// let johnBMI = bmi(johnWeight, johnHeight);

// if (marksBMI > johnBMI) {
//     document.getElementById('text').innerHTML=`Mark's BMI (${marksBMI}) is higher than John's (${johnBMI})`;
// }else{
//     document.getElementById('text').innerHTML=`John's (${johnBMI}) is higher than Mark's BMI (${marksBMI})`;
// }
// let day= 'tuesday';

// if(day === 'monday'){
//     console.log('Plan course structure');
// }else if(day === 'tuesday'){
//     console.log('Prepare theory videos');
// }else if(day === 'wednesday' || day === 'thursday'){
//     console.log('Write code example');
// }else {
//     console.log('Not a valid day');
// }

// let value1 = 40;
// let tip15 = value1*(15/100);
// let tip20 = value1*(20/100);
// let tip = value1 >=50 && value1<=300 ? `The bill was ${value1}, the tip was ${tip15}, and the total value is ${value1 + tip15}` : `The bill was ${value1}, the tip was ${tip20}, and the total value is ${value1 + tip20}`; 
// console.log(tip);

// let average= (num1,num2,num3)=>((num1+num2+num3)/3).toFixed(0);
// let avgDolhins= average(44,23,71);
// let avgKoalas= average(65,54,49);
// let checkWinner= (avgDolhins,avgKoalas)=>{
//     if(avgDolhins>=2*avgKoalas){
//         console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})`);
//     }else if(avgKoalas>=2*avgDolhins){
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
//     }else{
//         console.log("No teams win");
//     }
// }

// let winner= checkWinner(avgDolhins,avgKoalas);

// let cats= Array('Persia', 'Syam', 'Moonecoon');
// console.log(cats);

// let calcTip = x=>{
//     return x>=50 && x<=300 ? x*(15/100) : x*(20/100);
// }
// let payment=(bill,tip)=>bill + tip;

// let bills= [125,555,44];
// let tips= [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
// let total=[payment(bills[0],tips[0]), payment(bills[1],tips[1]), payment(bills[2],tips[2])];

// console.log(tips)
// console.log(total)

// let mark={
//     firstName: "Mark",
//     lastName: "Miller",
//     marksHeight: 1.69,
//     marksWeight: 78,

//     calcBMI: () => {
//         mark.BMI = (mark.marksWeight/mark.marksHeight**2).toFixed(2);
//         return mark.BMI;
//     }
// };

// let john={
//     firstName: "John",
//     lastName: "Smith",
//     johnHeight: 1.95,
//     johnWeight: 92,
    
//     calcBMI: () => {
//         john.BMI = (john.johnWeight/john.johnHeight**2).toFixed(2);
//         return john.BMI;
// }
// };


// mark.calcBMI() > john.calcBMI() ? console.log(`${mark.firstName}'s BMI (${mark.calcBMI()}) is higher than ${john.firstName}'s (${john.calcBMI()})`) : console.log(`${john.firstName}'s BMI (${john.calcBMI()}) is higher than ${mark.firstName}'s (${mark.calcBMI()})`);

// console.log(`${mark.firstName}'s BMI (${mark.calcBMI}) is higher than ${john.firstName}'s (${john.calcBMI})`) : console.log(`${john.firstName}'s BMI (${john.calcBMI}) is higher than ${mark.firstName}'s (${mark.calcBMI})`);

// let bills=[22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// let tips=[];
// let totals=[];

// let average= arr =>{
//     let avg= 0;
//     for (let i = 0; i < arr.length; i++) {
//     avg += arr[i];
//     }
//     return avg / arr.length;
// };
// let calcTip = x => x>=50 && x<=300 ? x*(15/100) : x*(20/100);

// for (let i = 0; i < bills.length; i++) {
//     let tip = calcTip(bills[i]);
//     tips.push(tip);
//     totals.push(bills[i] + tips[i]);
// }


// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borrussia Dortmund',
//     players: [
//         [
//         'Neuer',
//         'Pavard',
//         'Martinez',
//         'Alaba',
//         'Davies',
//         'Kimmich',
//         'Goretzka',
//         'Coman',
//         'Muller',
//         'Gnarby',
//         'Lewandowski',
//         ],
//         [
//         'Burki',
//         'Schulz',
//         'Hummels',
//         'Akanji',
//         'Hakimi',
//         'Weigl',
//         'Witsel',
//         'Hazard',
//         'Brandt',
//         'Sancho',
//         'Gotze',
//         ],
//     ],
//     score: '4:0',
//     scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//     date: 'Nov 9th, 2037',
//     odds: {
//         team1: 1.33,
//         x: 3.25,
//         team2: 6.5,
//     },
// };

// const gameEvents = new Map([
//     [17, '⚽ GOAL'],
//     [36, '� Substitution'],
//     [47, '⚽ GOAL'],
//     [61, '� Substitution'],
//     [64, '� Yellow card'],
//     [69, '� Red card'],
//     [70, '� Substitution'],
//     [72, '� Substitution'],
//     [76, '⚽ GOAL'],
//     [80, '⚽ GOAL'],
//     [92, '� Yellow card'],
//     ]);


// let events = new Set(gameEvents.values());
// gameEvents.delete(64)
// console.log(`An event happened, on
// average, every ${90 / gameEvents.size} minute`)

// for (const [key, value] of gameEvents) {
//     if(key <= 45){
//         console.log(`[FIRST HALF] ${key}: ${value}`)
//     }else{
//         console.log(`[SECOND HALF] ${key}: ${value}`)
//     }
// }

// let str = 2003949;
// let credit = 171720399;

// let masked = (number)=>{
//     let str = String(number);
//     let sliced = str.slice(0,(str.length-4));
//     let padded = sliced.padEnd((sliced.length+4), '+')
//     return padded
// };

// console.log(masked(str));
// console.log(masked(credit))
// let x = s3.split('_');
// console.log(x[1].slice(0,1).toUpperCase().concat((x[1].slice(1)).toLowerCase()))





// let s1 = 'underscore_case';
// let s2 = ' first_name';
// let s3 = 'Some_Variable';
// let s4 = ' calculate_AGE';
// let s5 = 'delayed_departure'

// let transform = (string)=>{
//     let splitted = string.trim().toLowerCase().split('_');
//     let firstString = splitted[0].replace(splitted[0][0], splitted[0][0].toLowerCase());
//     let secondString = splitted[1].replace(splitted[1][0], splitted[1][0].toUpperCase());

//     return firstString.concat(secondString)
// };

// let y = [1,2,3];
// let u = [10,22,13];

// function compareTriplets(a, b) {
//     let result = [0,0];
//     for (const [key,value] of Object.entries(a)) {
//         if (a[key] > b[key]) {
//             result[0] += 1;
//         }else if (a[key] < b[key]){
//             result[1] += 1;
//         }
//     }
//     return result
// }

// let x = "the-stealth-warrior";
// let ups = "The_Stealth_Warrior";
// let asd = "THE.Stealth.Warrior";
// let zxc = 'THE-STEALTH_WARRIOR';

// let com = (val) =>{
//     let reg = /[-_.]\w/ig;
//     let result = str.slice(1).toLowerCase().replace(reg, (x)=>x[1].toUpperCase())
//     return str.slice(0,1).concat(result)
// };


// let fn = arr=>{
//     let result = 0;
//     for (let i = x.length-1; i >= 0; i--) {
//         result += x[i]*(2**(x.length-(i+1)))
//     }
//     return result
// }



// let a = '1+2345';
// let regular = /[0-9]+/;
// let tes1 = a.match(regular);

// function validatePIN (pin) {
//         return (pin.length === 4 || pin.length === 6) && pin.match(/[0-9]+/)[0] === pin ? true : false
//     }

let number = document.querySelector('.number').value = Math.floor(Math.random()*10)+1;
let num = 20;
let highScore = document.querySelector('.highscore');
let fn = (n)=>document.querySelector('.message').textContent= n;
let numberText = (n)=>document.querySelector('.number').textContent= n;

//When 'Again' button clicked
let reload = document.querySelector('.again').addEventListener('click',()=>{
    numberText('?');
    number = document.querySelector('.number').value = Math.floor(Math.random()*10)+1;
    num = 20;
    document.querySelector('.score').textContent = 20;
    document.querySelector('body').style.backgroundColor= '#222 ';
    fn('Start guessing...');
    document.querySelector('.guess').value='';
})

//When 'Check' button clicked
let guess = document.querySelector('.check').addEventListener('click',()=>{
    let score = document.querySelector('.score');
    let value = Number(document.querySelector('.guess').value);
    //When Correct guess
    if (value === number) {
        fn('Correct Guess');
        if(highScore.textContent <= score.textContent){highScore.textContent= num;}
        numberText(number);
        document.querySelector('body').style.backgroundColor='#25dc77';
    }

    //Game Over
    else if(num === 1){
        fn('Game Over!!');
        score.textContent = 0;
        highScore.textContent= num;
    }
    else if(value >= number - 2 && value <= number - 1) {
        fn('give it lit\'bit more');
        score.textContent = num-=1;
    }
    else if(value <= number + 2 && value >= number + 1){
        fn('less it lit\'bit more');
        score.textContent = num-=1;  
    }
    else{
        fn('Too far away');
        score.textContent = num-=1;
    }
})
























// function toCamelCase(str){
//     // let [firstLetter, ...others] = str.trim().split(/[-_.]/);
//     return str.slice(1).toLowerCase().replace(/[-_.]\w/ig, str.match(/[-_.]\w/ig)[0])
    
//     // for (const string of others) {
//     //     firstLetter += string.toLowerCase().replace(string[0].toLowerCase(), string[0].toUpperCase())
//     // }
//     // return firstLetter
// }















