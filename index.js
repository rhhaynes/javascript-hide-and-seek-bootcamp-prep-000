function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('*');
}

function increaseRankBy(n){
  var lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  
  for (let i=0; i<lis.length; i++){
    lis[i].innerHTML = (parseInt(lis[i].innerHTML)+n).toString()
  }
}

function deepestChild(){
  var curr = document.getElementById('grand-node').querySelectorAll('div');
  var currArray = [...curr];
  var next = [];
  
  while (curr.length>0){
    next = curr[0].children;
    for (let i=0; i<next.length; i++){
      curr.push(next.childNodes[i]);
    }
  }
  
  return curr;
}