// Dropdown on hover
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

// Change background color and print the selected color 
const btnHome = document.getElementById('button-1');
    btnHome.addEventListener("click", function(){ 
        document.body.style.backgroundColor = "Grey";
        document.getElementById("color-name").innerHTML = "This color is grey";
        });

const btnRed = document.getElementById('button-2');
    btnRed.addEventListener("click", function(){ 
        document.body.style.backgroundColor = "Red";
        document.getElementById("color-name").innerHTML = "This color is Red";
        });  

const btnOrange = document.getElementById('button-3');
    btnOrange.addEventListener("click", function(){ 
        document.body.style.backgroundColor = "Orange";
        document.getElementById("color-name").innerHTML = "This color is Orange";
        });  

const btnPurple = document.getElementById('button-4');
    btnPurple.addEventListener("click", function(){ 
        document.body.style.backgroundColor = "Purple";
        document.getElementById("color-name").innerHTML = "This color is Purple";
        });  

const btnGreen = document.getElementById('button-5');
    btnGreen.addEventListener("click", function(){ 
        document.body.style.backgroundColor = "Green";
        document.getElementById("color-name").innerHTML = "This color is Green";
        });  

  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      const dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


