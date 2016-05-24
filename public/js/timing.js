function doSomeWork() {
  createSomeNodes()
  readSomeHeights()
  writeSomeHeights()
  countSoHigh()
}

function createSomeNodes() {
  for (var i = 0; i < 10; i++) {
    var div = document.createElement('div')
    div.classList = 'list-group-item'
    var divContent = document.createTextNode(i)
    div.appendChild(divContent)
    var list = document.querySelector('#timing')
    list.appendChild(div)
  }
}

function readSomeHeights() {
  var divs = document.querySelectorAll('div')
  var height;

  divs.forEach(function(div) {
    height = div.clientHeight
  })
}

function writeSomeHeights() {
  var divs = document.querySelectorAll('div')

  divs.forEach(function(div) {
    div.style.height = '50px'
  })
}

function countSoHigh() {
  var div, divContent, list, totalNumber = 0

  for (var i = 0; i < 100000; i++) {
    totalNumber = i  
  }

  div = document.createElement('div')
  div.classList = 'list-group-item'
  divContent = document.createTextNode('I counted all the way to ' + totalNumber)
  div.appendChild(divContent)
  list = document.querySelector('#timing')
  list.appendChild(div)
}

doSomeWork()
