const exec = require('child-process-promise').exec;

beforeEach(() => {
  expect.assertions(1);
});


test('Executing `main.js cost ABE` should respond with `4`', () => {  
    return exec('node main.js cost ABE')
    .then((result) => {
        return expect(result.stdout.trim('\n')).toEqual('4')
    }) 
})


test('Executing `main.js cost AD` should respond with `10`', () => {  
    return exec('node main.js cost AD')
    .then((result) => {
        return expect(result.stdout.trim('\n')).toEqual('10')
    }) 
})

test('Executing `main.js cost EACF` should respond with `8`', () => {  
    return exec('node main.js cost EACF')
    .then((result) => {
        return expect(result.stdout.trim('\n')).toEqual('8')
    }) 
})

test('Executing `main.js cost ADF` should respond with `No Such Route`', () => {  
    return exec('node main.js cost ADF')
    .then((result) => {
        return expect(result.stdout.trim('\n')).toEqual('No Such Route')
    }) 
})

test('Executing `main.js shortestPath ED` should respond with `9`', () => {  
    return exec('node main.js shortestPath ED')
    .then((result) => {
        return expect(result.stdout.trim('\n')).toEqual('9')
    }) 
})

test('Executing `main.js shortestPath EE` should respond with `6`', () => {  
    return exec('node main.js shortestPath EE')
    .then((result) => {
        return expect(result.stdout.trim('\n')).toEqual('6')
    }) 
})