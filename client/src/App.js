import './App.css';


function runList() {
  var select = document.getElementById("list");
  var newOption = document.createElement("option");
  
  newOption.text = document.getElementById("txtbox").value;
  select.add(newOption);
}


function App() {
  return (
    <div>
    
    Name:
    <input type="text"
           id="myText"
           value="Mickey"></input>
               <button type="button" 
            onclick="myFunction()">
      Try it
  </button>

  <p id="demo"></p>
  <html>
  <body>
  <script>
 s
  </script>
  
  </body>
  </html>

    </div>
  );
}

export default App;
