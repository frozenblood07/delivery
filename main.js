//get the instruction and corresponding arguments in the object
const getArgs = () => {
    let arguments = process.argv;
    arguments.splice(0, 2);
    console.log(arguments);
    return {
      instruction: arguments.shift(),
      parameters: arguments
    };
  };
  
  const instructions = require('./lib');
  
  const main = () => {
    let args = getArgs();
    let output = args.instruction !== undefined ? args.instruction in instructions ? instructions[args.instruction]("routes",args.parameters) : "Invalid instruction" : "No input provided";
    console.log(args);
    console.log(output);

  };
  
  main();
  