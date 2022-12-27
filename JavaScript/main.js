// this is going to toggle open and close plus removing and 
// adding box-shadow. 

function toggleDropdown() {
    var x = document.getElementById("dropdown_content");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


  function toggleHiddenDropdown() {
    var i = document.getElementById("hidden_nav_content");
    if (i.style.display === "none") {
      i.style.display = "block";
    } else {
      i.style.display = "none";
    }
  }

  // THIS IS FOR CLOSING THE HIDDEN NAV MENU WHEN THE USER CLICKS THE NAV LINKS 
  var hiddenItems = document.getElementsByClassName("hidden_item");

  for (var i = 0; i < hiddenItems.length; i++) {
    hiddenItems[i].addEventListener("click", function() {
      document.getElementById("hidden_nav_content").style.display = "none";
    });
  }






