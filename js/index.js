//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded

var element = document.createElement('div');

undefined
element
<div>​</div>​
element.innerHTML = 'HEllo, RIchard'
"HEllo, RIchard"
document.body.appendChild(element);
<div>​HEllo, RIchard​</div>​
element.style.textAlign = 'center';
"center"
var ul = document.createElement('ul');
for (let i = 0; i < 3; i++) {
  let li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}

element.appendChild(ul);
<ul>​…​</ul>​
ul.style.textAlign = 'left'
"left"
ul.removeChild(ul.querySelector('li:nth-child(2)'));

<li>​2​</li>​
ul.remove
ƒ remove() { [native code] }
ul.remove();
