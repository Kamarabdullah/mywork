// Get all checkboxes thru input type + and add an event listener of click to each
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', (event) => {
// Get the id of label element that belongs to the checkbox
    const label = document.querySelector(`label[for="${event.target.id}"]`);

    // when the checkbox is checked the input is colored gray and gets a text-decoration of "line-through"
    if (event.target.checked) {
      label.style.color = 'gray';
      label.style.textDecoration = 'line-through';
    } 
    
       //Otherwise if the checkbox is not checked or is unchecked, remove the line-through and reset color to black
    else {
      label.style.color = 'black';
      label.style.textDecoration = 'none';
    }
  });
});
