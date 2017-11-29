
function pluralize (noun, number) {
  if (number > 1){
    return number + "noun" + "s";
  }
else {
  return "noun "
}
  }

console.log ("I do not have a " + pluralize(" cat ",0));
console.log ("I have " + pluralize("cat ", 3));
console.log ("I have a " + pluralize("cat ", 1));
