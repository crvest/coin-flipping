function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

// // synchronous version of fiveheads
// function fiveHeadsSync() {
//     let headsCount = 0;
//     let attempts = 0;
//     while(headsCount < 5) {
//         attempts++;
//         let result = tossCoin();
//         console.log(`${result} was flipped`);
//         if(result === "heads") {
//             headsCount++;
//         } else {
//             headsCount = 0;
//         }
//     }
//     return `It took ${attempts} tries to flip five "heads"`;
// }
// console.log( fiveHeadsSync() );
// console.log( "This is run after the fiveHeadsSync function completes" );


function fiveHeads() {
    return new Promise( (resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        while(attempts <= 100){
            let result = tossCoin();

            if(result == 'heads'){
                headsCount++;
                if(headsCount === 5){
                    resolve(`Heads rolled 5 times in a row after ${attempts} attempts`);
                } 
            } else {
                headsCount = 0;
            }
            attempts++;
        }
            reject('5 heads in a row not acheived');


    });
}
fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
console.log( "When does this run now?" );
