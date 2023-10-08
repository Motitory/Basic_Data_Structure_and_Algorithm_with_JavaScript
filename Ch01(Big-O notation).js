// Common Examples
// O(N)
function exampleLinear(n) {
  for (var i = 0; i < n; i++) {
    console.log(i);
  }
}

// O(N^2)
function exampleQuadratic(n) {
  for (var i = 0; i < n; i++) {
    console.log(i);
    for (var j = 0; j < n; j++) {
      console.log(j);
    }
  }
}

// O(N^3)
function exampleCubic(n) {
  for (var i = 0; i < n; i++) {
    console.log(i);
    for (var j = 0; j < n; j++) {
      console.log(j);
      for (var k = 0; k < n; k++) {
        console.log(k);
      }
    }
  }
}

// O(log N)
function exampleLogarithmic(n) {
  for (var i = 2; i < n; i = i * 2) {
    console.log(i);
  }
}
// exampleLinear(3);
// exampleQuadratic(3);
// exampleCubic(3);
exampleLogarithmic(100);

// ------------------------------------------------------------
// Coefficient Rule
// O(N)
function a(n) {
  var count = 0;
  for (var i = 0; i < n; i++) {
    count += 1;
  }
  return count;
}
// O(5N -> N)
function a(n) {
  var count = 0;
  for (var i = 0; i < 5 * n; i++) {
    count += 1;
  }
  return count;
}
// O(N + 1 -> N)
function a(n) {
  var count = 0;
  for (var i = 0; i < n; i++) {
    count += 1;
  }
  count += 3;
  return count;
}

// ------------------------------------------------------------
// Sum Rule
// O(6N -> N)
function a(n) {
  var count = 0;
  for (var i = 0; i < n; i++) {
    count += 1;
  }
  for (var j = 0; j < n; j++) {
    count += 1;
  }
  return count;
}

// ------------------------------------------------------------
// Product Rule
// O(5N^2 -> N^2)
function a(n) {
  var count = 0;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < 5 * n; j++) {
      count += 1;
    }
  }
  return count;
}

// ------------------------------------------------------------
// Polynomial Rule
// O(N^2)
function a(n) {
  var count = 0;
  for (var i = 0; i < n * n; i++) {
    count += 1;
  }
  return count;
}

// ------------------------------------------------------------
// Exercise 1
function someFunction(n) {
  for (var i = 0; i < n * 1000; i++) {
    for (var j = 0; j < n * 20; j++) {
      console.log(i + j);
    }
  }
}
// Answer: O(N^2)

function someFunction(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      for (var k = 0; k < n; k++) {
        for (var l = 0; l < 10; l++) {
          console.log(i + j + k + l);
        }
      }
    }
  }
}
// Answer: O(N^3)

function someFunction(n) {
  for (var i = 0; i < 1000; i++) {
    console.log("hi");
  }
}
// Answer: O(1)

function someFunction(n) {
  for (var i = 0; i < n * 10; i++) {
    console.log(n);
  }
}
// Answer: O(N)

function someFunction(n) {
  for (var i = 0; i < n; i * 2) {
    console.log(i);
  }
}
// Answer: O(log N)

function someFunction(n) {
  while (true) {
    console.log(n);
  }
}
// Answer: O(INF)
