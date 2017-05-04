function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


//create a function that adds a row to the table
function addRow() {
  // Find a <table> element with id="myTable":
  var table = document.getElementById("foodTable");

  //clear old data



  var numberRows = document.getElementById('foodTable').rows.length - 1;

  function deleteRows() {
    for (i = numberRows; i > 0; i = i - 1) {
      document.getElementById("foodTable").deleteRow(i)

    }
  }

  if (numberRows > 1) {
    deleteRows()
  }

  //define variables from inputs
  var days = document.getElementById('transitionPeriod').value
  var newTotalAmount = document.getElementById('newFood').value
  var oldTotalAmount = document.getElementById('oldFood').value

  for (i = 0; i <= days; i++) {
    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(i + 1);

    var oldAmount = oldTotalAmount / days * (days-i)
    var newAmount = newTotalAmount / days * (i)


    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    // Add some text to the new cells:
    cell1.innerHTML = i;
    cell2.innerHTML = oldAmount;
    cell3.innerHTML = newAmount;

    var numberRows = document.getElementById('foodTable').rows.length;
  
  }
}
