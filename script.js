<!DOCTYPE html>
<html>
<head>
  <title>JavaScript DOM Manipulation</title>
</head>
<body>
  <h1>JavaScript DOM Manipulation</h1>

  <h2 id="dynamicText">Original Text</h2>
  <button onclick="changeText()">Change Text</button>

  <p id="myParagraph">This is a paragraph.</p>
  <button onclick="changeStyle()">Change Style</button>

  <div id="toggleableElement">
    This element can be toggled.
  </div>
  <button onclick="toggleElement()">Toggle Element</button>
  
  <ul>
    <li>List item 1</li>
    <li>List item 2</li>
  </ul>

  <input type="text" placeholder="Enter text">

  <script src="script.js"></script>
</body>
</html>

// Function to change text content dynamically
function changeText() {
  document.getElementById("dynamicText").textContent = "Text changed!";
}

// Function to modify CSS styles
function changeStyle() {
  document.getElementById("myParagraph").style.color = "red";
  document.getElementById("myParagraph").style.fontSize = "20px";
}
// Function to add or remove an element
function toggleElement() {
  var element = document.getElementById("toggleableElement");
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}