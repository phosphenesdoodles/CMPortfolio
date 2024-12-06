// Get the button, and when the user clicks on it, execute myFunction
document.getElementById("about").onclick = function() {myFunction()};

// myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content 
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
 /* const box1 = document.getElementById('box1');
    const box2 = document.getElementById('box2');
    const container = document.querySelector('.container');
    let currentBox = 1; // Track which box is currently visible

    function showBox2() {
      box1.classList.remove('slide-center');
      box1.classList.add('slide-left');
      box2.classList.remove('slide-right');
      box2.classList.add('slide-center');
      currentBox = 2;
    }

    function showBox1(event) {
      // Ensure the click is outside of box2
      if (!box2.contains(event.target)) {
        box2.classList.remove('slide-center');
        box2.classList.add('slide-right');
        box1.classList.remove('slide-left');
        box1.classList.add('slide-center');
        currentBox = 1;
      }
    }

    // Add event listener for box1 click
    box1.addEventListener('click', showBox2);

    // Add event listener for clicks on the container
    container.addEventListener('click', (event) => {
      if (currentBox === 2) {
        showBox1(event);
      }
    });

    // Prevent clicks inside box2 from triggering the container click event
    box2.addEventListener('click', (event) => {
      event.stopPropagation();
    });*/

