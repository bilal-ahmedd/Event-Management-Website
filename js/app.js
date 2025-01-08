// const inputs = document.querySelectorAll(".input");

// function focusFunc() {
//     let parent = this.parentNode;
//     parent.classList.add("focus");
// }

// function blurFunc() {
//     let parent = this.parentNode;
//     if (this.value == "") {
//         parent.classList.remove("focus");
//     }
// }

// inputs.forEach((input) => {
//     input.addEventListener("focus", focusFunc);
//     input.addEventListener("blur", blurFunc);
// });

// const mainmenu = document.querySelector('.mainmenu');
// const closemenu = document.querySelector('.closemenu');
// const openmenu = document.querySelector('.openmenu');



// openmenu.addEventListener('click', show);
// closemenu.addEventListener('click', close);

// function show() {
//     mainmenu.style.display = 'flex';
//     mainmenu.style.top = '0';
// }

// function close() {
//     mainmenu.style.top = '-100%';
// }

// $(window).scroll(function () {
//     if ($(window).scrollTop()) {
//         $(".header").addClass("black");
//     } else {
//         $(".header").removeClass("black");
//     }
// });


function EventSelection() {
    var Category_radio = document.getElementById("Event_Category_Radio");
    var Package_radio = document.getElementById("event_packag_radio");

    if (Category_radio.checked == true) {
        var a = document.getElementById("event-category-dropdown");
        a.disabled = false;

        var b = document.getElementById("event-package-dropdown");
        b.disabled = true;
    }

    else if (event_packag_radio.checked == true) {
        var a = document.getElementById("event-category-dropdown");
        a.disabled = true;

        var b = document.getElementById("event-package-dropdown");
        b.disabled = false;

        document.getElementById("Budget").innerHTML="";
    }
    }

    function Budget()
    {
        var persons=document.getElementById("persons").value;
        var para=document.getElementById("Budget");
        var category = document.getElementById("event-category-dropdown").value;

        if(category==800)
        {
            var esitmatedBudget= persons*category;
            para.innerHTML="Dear Sir/Madam, <br> Your estimated budget for your Selected Category is is <b> Rs." + esitmatedBudget + "</b> for <b>" + persons + " Persons</b> Facilties Include in this Category are as follow.<b>Photography</b> as on your demand. <ul> <li>Sitting Arrangement</li> <li>Crockery</li> <li>Lighting Setup</li> <li>Mineral Water</li> <li>Mineral Water</li>  </ul>";

        }

        else if(category==700)
        {
            
            var esitmatedBudget= persons*category;
            para.innerHTML="Dear Sir/Madam, <br> Your estimated budget for your Selected Category is is <b> Rs." + esitmatedBudget + "</b> for <b>" + persons + " Persons</b> Facilties Include in this Category are as follow. <b>Photography</b> as on your demand. <ul> <li>Sitting Arrangement</li> <li>Crockery</li> <li>Lighting Setup</li> <li>Mineral Water</li> </ul>";
        }

        else if(category==1000)
        {
            
            var esitmatedBudget= persons*category;
            para.innerHTML="Dear Sir/Madam, <br> Your estimated budget for your Selected Category is is <b> Rs." + esitmatedBudget + "</b> for <b>" + persons + " Persons</b> Facilties Include in this Category are as follow. <b>Photography</b> as on your demand. <ul> <li>Sitting Arrangement</li> <li>Crockery</li> <li>Lighting Setup</li> <li>Mineral Water</li> </ul>";
        }

        else 
        {
            var esitmatedBudget= persons*category;
            para.innerHTML="Dear Sir/Madam, <br> Your estimated budget for your Selected Category is is <b> Rs." + esitmatedBudget + "</b> for <b>" + persons + " Persons</b> Facilties Include in this Category are as follow. <b>Photography</b> as on your demand. <ul> <li>Sitting Arrangement</li> <li>Crockery</li> <li>Lighting Setup</li> <li>Mineral Water</li>  </ul>";
        }

    }

