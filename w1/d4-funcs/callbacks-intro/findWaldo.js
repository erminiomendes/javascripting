// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {

  names.forEach((names , index) => {
    //for (let i = 0; i < names.length; i++) {
    let name = names;
    if (name === "Waldo") {
      found("Found " + name + " at index " + index );   // execute callback
    }
  
  });
};  

const actionWhenFound = function(msg) {
  console.log(msg);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);