function hello(name){
   console.log(`Hello ${name}`);
};
function goodbye(name){
   console.log(`Goodbye ${name}`);
};
var names=['John', 'Sonu', 'Jen', 'Sinah', 'June'];
for(var i in names){
  var letter1=((names[i]).charAt(0)).toLowerCase();
  if(letter1 == "j"){
     goodbye(names[i]);
  }else{
     hello(names[i]);
  }
}
