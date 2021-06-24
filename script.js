    function clickV() {
      document.getElementById("myDropdown").style.display = "block";
    }
    
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("drops-down");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.style.display = "none") {
            openDropdown.style.display = "none";
          }
        }
      }
    }