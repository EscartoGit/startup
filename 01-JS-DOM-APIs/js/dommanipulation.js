function createTableUsingDOM(matrix){
  var table = document.createElement("TABLE"); // Create table object
  for (var i = 0; i < matrix.length; i++){ //for each element of the first array
    var tr = document.createElement("TR"); // Create a row object
    for (var j=0; j<matrix[i].length; j++){ // for each element of the first element of the array
        var td = document.createElement("TD"); //create a table data object
        var val = document.createTextNode(matrix[i][j]); // Set previous data object with the correspondent value of the matrix
        td.appendChild(val); // Add the td object to the row
        tr.appendChild(td); // Actualize the row with the new td object
    }
    table.appendChild(tr); // After the row is full charged add the row to table object
  }
  table.setAttribute("border","1px");
  return table;
}

function callingMatrix(){
    //This function was made to testing with 3x3 matrix but the principal function works with any size
    var matrix = [];//create matrix
    for(var i=0; i<3; i++) { //for used to build the matrix
        matrix[i] = [];
        for(var j=0; j<3; j++) {
            let value = prompt("Add some value for 3x3 Matrix");
            while (!value){
              value = prompt("Please insert some value for the matrix");
            }
            matrix[i][j] = value;
          }
        }
    var table = createTableUsingDOM(matrix); // call to principal function where a created table using DOM is returned
    document.body.appendChild(table); // The created table is attached to the body
}
