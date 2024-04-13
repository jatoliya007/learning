function topOneButton(evt, oneButton) {
    console.log('topOneButton ', evt, oneButton)


    let trackContent = document.getElementById("trackContent");
    trackContent.style.display = "none";

    let shipContent = document.getElementById("shipContent");
    shipContent.style.display = "none";

    let trackTab = document.getElementById("track-tab");
    trackTab.className = trackTab.className.replace(" active", "");

    let shipTab = document.getElementById("ship-tab");
    shipTab.className = shipTab.className.replace(" active", "");

    document.getElementById(oneButton).style.display = "block";
    evt.currentTarget.className += " active";
    
    document.getElementById('card').style.height = (oneButton === 'trackContent') ? '370px' : "400px";

  }
  document.getElementById("track-tab").click()


  function trackButton(evt, buttonName) {
    console.log('trackButton ', evt, buttonName)

    let tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    let tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(buttonName).style.display = "block";
    evt.currentTarget.className += " active";

  }
  document.getElementById("defaultOpen").click();


  function area(evt, areaButton) {
    console.log('area ', evt, areaButton)

    let domestic = document.getElementById("domestic");
    domestic.style.display = "none";

    let international = document.getElementById("international");
    international.style.display = "none";

    let defaultDomesticTab = document.getElementById("defaultDomesticTab");
    defaultDomesticTab.className = defaultDomesticTab.className.replace(" active", "");

    let internatinalTab = document.getElementById("internatinalTab");
    internatinalTab.className = internatinalTab.className.replace(" active", "");

    document.getElementById(areaButton).style.display = "block";
    evt.currentTarget.className += " active";
  }

  document.getElementById("defaultDomesticTab").click()