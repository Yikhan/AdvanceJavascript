function b() {
  var myVar = 1
  console.log(myVar)
  console.log(this)
}

function a() {
  var myVar = 2
  b()
}

a()