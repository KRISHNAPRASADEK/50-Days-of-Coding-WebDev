let user = "krrish";
let mark = 350;
document.write(`<h1>hello "${user}" 
your mark is '${mark}'<h1>`);

console.log(`hello
${user}`);

let fname = "abhi";
let lname = "kumar";

function fullname(fname, lname) {
  return `${fname} ${lname}`;
}

// console.log(fullname(fname, lname));
document.write(`hello ${fullname(fname, lname)}`);
