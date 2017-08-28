

const parts = [
  {
    'name' : 'luther',
    'id'   : '111'
  },
  {
    'name' : 'Mark',
    'id'   : '222'
  }
]


function Branch(obj) {
  this.name = obj.name
  this.identd = obj.id
  this.limb = `<svg id="${this.identd}"
	x="0px" y="0px" width="40px" height="120px" viewBox="0 0 40 120"
	 overflow="visible">
<g>
	<rect class="limb"  width="40" height="120px"/>
</g>
</svg>`
}

function Tree(obj, arry) {
  this.name = obj.name
  this.identd = obj.id
  this.max = obj.hp + obj.ep
  this.force = obj.force
  this.family = obj.family

  this.branches = arry
  this.tunk = ``
}


document.addEventListener("DOMContentLoaded", function(){

const bundle = parts.map( p => {
  const oak = new Branch(p)
  return oak.limb
}).join('');

document.getElementById('ent').innerHTML = bundle

console.log(bundle);










});
