const organizeInstructors = function(instructors) {
  let organize = {}

  for (ins of instructors){
    //let courseName = ins.course;

        if (ins.course == "iOS"){
        //if (organize[ins.course]){
        organize[ins.course].push(ins.name)
        //organize.CourseName = ins.course
        //organize.CourseName = ins.course  
        //arr.push(ins.name)
        

      } else if (ins.course == "Web"){
        //arr.push(ins.name)

      } else {
        //arr.push(ins.name)

      }
  }
  console.log(organize)
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
// console.log(organizeInstructors([
//   {name: "Brendan", course: "Blockchain"},
//   {name: "David", course: "Web"},
//   {name: "Martha", course: "iOS"},
//   {name: "Carlos", course: "Web"}
// ]));