function foo1() {
  return {
    bar: "hello",
  };
}

function foo2() {
  // return
  //  {
  //    bar: "hello",    //causing line braeking error
  //    };
}

console.log(foo1());
console.log(foo2());
