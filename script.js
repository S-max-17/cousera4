function hello(name){
   console.log(`Hello ${name}`);
};
function goodbye(name){
   console.log(`Goodbye ${name}`);
};
var names=['Yaakov', John',  'Jen', 'Jason', 'Paul', 'Frank', 'Larry', 'Paula', 'Laura', 'Jim'];
for(var i in names){
  var letter1=((names[i]).charAt(0)).toLowerCase();
  if(letter1 == "j"){
     goodbye(names[i]);
  }else{
     hello(names[i]);
  }
}
