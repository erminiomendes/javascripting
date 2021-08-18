
/*
	TODO:
  
  	1. Create an empty variable, `elm`
  	2. Find an element with the ID `info`
    3. Set `elm` to the variable that you found
    4. Alert the inner text of the element with `alert` function, it should alert the text "JavaScript on The DOM"
*/
<p id="intro">
  Hello World!
</p>

<p id="info">
  JavaScript on The DOM
</p>


let elm="";
elm = document.getElementById('info').innerText;
alert(elm);


/*
	TODO:
  
  	1. Create an empty variable, `elm`
  	2. Find a paragraph by its tag name
    3. Set `elm` to the variable that you found
    4. Alert the inner text of the element with `alert` function, it should alert the text "JavaScript on The DOM" or "Hello World!"
*/
<p id="intro">
  Hello World!
</p>

<p id="info">
  JavaScript on The DOM
</p>


let elm="";
elm = document.getElementsByTagName('p').innerText;

for (var i = 0; i < elm.length; i++ ) {
elm = document.getElementsByTagName('p').innerText;
alert(elm);
 
}



// 1. Create an empty array, `names`
// 2. Find all the paragraph elements using `getElementsByClassName`
// 3. For each element found
	// Add the element's text to the array of names
// 4. Alert the final result
<h2>
  List of People:
</h2>

<ul class='people'>
  <li class='name'>
    Clara
  </li>
  <li class='name'>
    James
  </li>
  <li class='name'>
    Sara
  </li>
</ul>



var names = [];
var elm = document.getElementsByClassName('name');
for(var i = 0; i < elm.length; i++) {
	names.push(elm[i].innerHTML);
}
alert(names);





/*
	TODO:
  
  	1. Create an empty variable, `elm`
  	2. Find an element with the ID `info` and set the variable `elm` with its value
    3. Change the contents of that elements to say `JavaScript Rocks!`
*/
<p id="intro">
  Hello World!
</p>

<p id="info">
  JavaScript on The DOM
</p>

let elm="";
elm = document.getElementById('info');
// then we set it's innerHTML property
elm.innerHTML = 'Hiiiii';





//// TODO:
// 1. Select the element who's attributes you'd like to change and set it to a variable
// 2. Change the width attribute of that element to 200 instead of the default 400 that it starts with in the HTML
// 3. Set a 1 second delay, then change it back to 400

<img id='lhl-logo' src='https://cl.ly/2O3Y2w1R2j0v/Image%202016-07-20%20at%201.16.13%20PM.png' width='400' />

const change = function() {
  document.getElementById('lhl-logo').width = '400';
}

document.getElementById('lhl-logo').width = '200';
setTimeout(change, 1000);





// TODO:
// 1. Find the input element by the ID using the `querySelector` DOM method
// 2. Set the `placeholder` attribute to some text value

<input id='name' />

document.querySelector('input').setAttribute('placeholder', 'Jane Doe');