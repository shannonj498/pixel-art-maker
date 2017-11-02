function makeGrid() {

  sizePicker.addEventListener('submit', function() {
    // declare variables
    let width = document.getElementById("input_width").value;
    let height = document.getElementById("input_height").value;
    let table = document.getElementById("pixel_canvas");
    let sizePicker = document.getElementById("sizePicker");

    // prevent page refresh
    event.preventDefault();
    
    // declare blank table
    table.innerHTML = '';
    
    let newRow;
    let newCell;
    
    // function to set background color of cell when
    function changeColor() {
      let color = document.getElementById("colorPicker").value;
      this.style.background = color;
    }
    
    // insert cells based on width and height
    for (var row = 0; row < width; row++) {
      newRow = table.insertRow();
      for (var column = 0; column < height; column++) {
        newCell = newRow.insertCell();
        // change cell background color on hover
        newCell.onmouseover = changeColor;
      }
    }
  })

}
// call functions
makeGrid();
