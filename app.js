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


function dayFromDate() {
  var dateString = document.getElementById("startDate").value;
  // var pattern = "-";
  // re = new RegExp(pattern, "g");
  // // "year-mo-da"
  // dateString.replace(/re/, ", ");

  var year = dateString.slice(0, 4);
  var month = dateString.slice(5, 7);
  var day = dateString.slice(8, 10);

  var date = year + ", " + month + ", " + day;

  // var dateS = JSON.parse(date);

  var d = new Date(date)
  // d.setDate();
// debugger
  var n = (d.getDay() + i) % 7;
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var day = weekday[n];
  return day;
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
    head1.className = "dayColumn"
    var head2 = headRow.insertCell(1);
    var head3 = headRow.insertCell(2);
    var head4 = headRow.insertCell(3);
    // Add some text to the new cells:
    head1.innerHTML = "";
    head2.innerHTML = "Day";
    head3.innerHTML = "Old Food (per meal)";
    head4.innerHTML = "New Food (per meal)";
  }

  var numMeals = document.getElementById('numMeals').value;

  //create emmpty body element
  body = table.appendChild(document.createElement('tbody'));
  for (i = 0; i <= days; i++) {
    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = body.insertRow(i);
    var oldAmount = Math.round(oldTotalAmount / days * (days-i)) / numMeals;
    var newAmount = Math.round(newTotalAmount / days * (i)) / numMeals;

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    cell1.className = "dayNumber"
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);







    // Add some text to the new cells:
    cell1.innerHTML = i;
    cell2.innerHTML = dayFromDate();
    cell3.innerHTML = oldAmount + "   g";
    cell4.innerHTML = newAmount + "  g";
  }

}
