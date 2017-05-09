document.getElementById("transitionPeriod").focus();


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

document.getElementById("transitionPeriod").focus();

function print(){
                  var divToPrint=document.getElementById("table");
                  newWin= window.open("");
                  newWin.document.write('<html><head><title>Print it!</title></head><body><link rel="stylesheet" type="text/css" href="printstyles.css" ></body></html>');
                  newWin.document.write(divToPrint.outerHTML);
                  // newWin.print();
                  // newWin.close();
           }

//create a function that adds a row to the table
function addTable() {
  // Find a <table> element with id="myTable":
  var table = document.getElementById("foodTable");

  //clear old data
  var numberRows = document.getElementById('foodTable').rows.length - 1;

  function deleteRows() {
    for (i = numberRows; i > -1; i = i - 1) {
      document.getElementById("foodTable").deleteRow(i)
    }
  }

  if (numberRows > 0) {
    deleteRows()
  }

  //define variables from inputs
  if (document.getElementById("dayButton").checked == true) {
    var days = document.getElementById('transitionPeriod').value
  } else {
    var days = 7 * (document.getElementById('transitionPeriod').value)
  }

  var newTotalAmount = document.getElementById('newFood').value
  var oldTotalAmount = document.getElementById('oldFood').value

  //insert the heading for the table
  if (days > 0) {
    header = table.createTHead();

    // Create an empty <tr> element and add it to the first position of <thead>:
    var headRow = header.insertRow(0);
    // Insert new cells (<th> elements) at the 1st and 2nd position of the "new" <tr> element:
    var head1 = headRow.insertCell(0);
    var head2 = headRow.insertCell(1);
    var head3 = headRow.insertCell(2);
    // Add some text to the new cells:
    head1.innerHTML = "Day";
    head2.innerHTML = "Old Food";
    head3.innerHTML = "New Food";
  }

  //create emmpty body element
  body = table.appendChild(document.createElement('tbody'));
  for (i = 0; i <= days; i++) {
    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = body.insertRow(i);
    var oldAmount = Math.round(oldTotalAmount / days * (days-i))
    var newAmount = Math.round(newTotalAmount / days * (i))

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    cell1.className = "dayNumber"
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    // Add some text to the new cells:
    cell1.innerHTML = i;
    cell2.innerHTML = oldAmount + "   g";
    cell3.innerHTML = newAmount + "  g";
  }

}
