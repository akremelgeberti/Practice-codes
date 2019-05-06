function clearErrors() {
    for (var loopCounter = 0;
        loopCounter < document.forms["Evens"].elements.length;
        loopCounter++) {
        if (document.forms["Evens"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {

            document.forms["Evens"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }
}

function resetForm() {
    clearErrors();
    document.forms["Evens"]["startingNumber"].value = "";
    document.forms["Evens"]["endingNumber"].value = "";
    document.forms["Evens"]["steps"].value="";
    document.getElementById("results").style.display = "none";
    document.getElementById("submitButton").innerText = "Submit";
    document.forms["Evens"]["num1"].focus();
  }

  function validateItems() {
    console.log(document.forms["Evens"]);
      clearErrors();
      var startingNumber =(document.getElementById("startingNumber").value);
      var endingNumber = (document.getElementById("endingNumber").value);
      var steps = (document.getElementById("step").value);
      if (isNaN(startingNumber)) {
          alert("Any entry is not numeric");
          document.forms["Evens"]["startingNumber"]
             .parentElement.className = "form-group has-error";
          document.forms["Evens"]["startingNumber"].focus();
          return false;
        }
      if (isNaN(endingNumber)) {
        alert("Any entry is not numeric");
        document.forms["Evens"]["endingNumber"]
        .parentElement.className = "form-group has-error";
        document.forms["Evens"]["endingNumber"].focus();
        return false;
      }

    if (isNaN(steps)) {
      alert("Any entry is not numeric");
      document.forms["Evens"]["steps"]
      .parentElement.className= "form-group has-error";
      document.forms["Evens"]["step"].focus();
      return false;
    }

    if (steps < 0) {
      alert("The step is not a positive number");
      document.forms["Evens"]["steps"]
      .parentElement.className = "form-group has-error";
      document.forms["Evens"]["steps"].focus();
      return false;
    }

    if (parseInt(endingNumber) <= parseInt(startingNumber)) {
      alert("The ending number is less than or equal to the starting number");
      document.forms["Evens"]["endingNumber"]
      .parentElement.className = "form-group has-error";
      document.forms["Evens"]["endingNumber"].focus();
      return false;
    }

    var evenNumbers=[];

        for (var i = startingNumber; i <=  endingNumber; i+=steps) {
          if(i % 2 === 0) {
            evenNumbers.push(i);
          }
          }

          var table= document.getElementById("results")
          for(var i=0; i < evenNumbers.length; i++){
            var row = table.insertRow(i);
            var cell = row.insertCell[i];
            vell.innerHTML = evenNumbers[i];
          }
    }
