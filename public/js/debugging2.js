function foo() {
  var one = 'one';

  function bar(number) {
    console.log('The number is: ' + number);
  }

  bar(one);
  foobar();
}

function foobar() {
  var obj = {
    thing1: 'thing1',
    thing2: 'thing2'
  };

  function baz(someObj) {
    for (key in someObj) {
      console.log(key);
    }
  }

  baz(obj);
}

foo();
