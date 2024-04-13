// let count = 0;

// function navContent(contentid){
//     count++;

//     console.log('navContent ', contentid, count);

//     let topDropdownButton = document.getElementsByClassName("top-dropdown-button");
    
//     let submenu = document.getElementsByClassName("sub-menu");
//     for (let i = 0; i < submenu.length; i++){
//         submenu[i].style.display = "none";
//     }
//     if(contentid){
//         document.getElementById(contentid).style.display = "block";
//         document.getElementById("menu").style.height = "auto";
//         document.getElementById("noticeid").style.display = "none";
//     }
//     else{
//         document.getElementById("menu").style.height = "0px";
//         document.getElementById("noticeid").style.display = "block";
//         // document.getElementById("menu").style["padding-top"] = "0px";
//     }
    
    // get all elems by classname
    // loop and hide each

    // get elem by id
    //show elem

    function navHoverContent(contentid){
        console.log('navHoverContent ', contentid);

        let navButtonList = document.getElementsByClassName("nav-buttons");

        let submenu = document.getElementsByClassName("sub-menu");
        for (let i = 0; i < submenu; i++){
            submenu[i].style.display = "none";
        }
        if(contentid){
            document.getElementById(contentid).style.display = "block";

        }
        else{
            document.getElementById(contentid).style.display = "none";
        }


    }