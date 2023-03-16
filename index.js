function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
  }

  function showSocials() {
    var line_socials = document.getElementById('line_socials');
    var divsideicons = document.getElementById('divsideicons');
      line_socials.style.display = "block";
      divsideicons.style.display = "none";
  }
  