//get csv file
d3.csv('data/harry_potter.csv').then(
    res => {
        console.log('Local CSV:', res)
    }
);

//get json file
d3.json('data/harry_potter.json').then(
    res => {
        console.log('Local json:', res)
    }
);

get local multi-files
const potter = d3.csv('data/harry_potter.csv');
const rings = d3.csv('data/lord_of_the_rings.csv');
Promise.all([potter, rings]).then(
    res => {
        console.log('potter:', res[0]);
        console.log('rigns:', res[1]);
    }
);

//get local multi-files
const potter = d3.csv('data/harry_potter.csv');
const rings = d3.csv('data/lord_of_the_rings.csv');
Promise.all([potter, rings]).then(
    res => {
        console.log('Multiple Request:', res);
        console.log('Concat:', [...res[0], ...res[1]]);
        //console.log('potter:',res[0]);
        //console.log('rigns:',res[1]);
    }
);

//get internet json
d3.json('https://api.chucknorris.io/jokes/random')
    .then(
        res => {
            console.log('On-line JSON:', res)
            debugger;
        }
    );

const potter = d3.csv('data/harry_potter.csv');
const rings = d3.csv('data/lord_of_the_rings.csv');

Promise.all([potter, rings]).then(
    res => {
        let combinedArray = [...res[0],...res[1]];
        debugger;
    }
);