function addNewWEField() {
    // console.log("Adding new field")
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.setAttribute("rows", 3);
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter Here");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);

}


function addNewAQField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);
}


function addNewPField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("pField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let pOb = document.getElementById("p");
    let pAddButtonOb = document.getElementById("pAddButton");

    pOb.insertBefore(newNode, pAddButtonOb);
}


// generate CV Function

function generateCV() {
    // console.log("GenerateCV............... :)")   
    let nameField = document.getElementById("nameField").value;
    let nameT = document.getElementById("nameT");
    nameT.innerHTML = nameField;

    document.getElementById("nameT2").innerHTML = nameField;

    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;
    document.getElementById("linT").innerHTML = document.getElementById("lnkedinField").value;
    document.getElementById("gitT").innerHTML = document.getElementById("githubField").value;
    document.getElementById("skyT").innerHTML = document.getElementById("skypeField").value;


    // objective

    document.getElementById("objectiveT").innerHTML = document.getElementById("obField").value;

    // WorkExperience

    let wes = document.getElementsByClassName("weField");
    let str = "";
    for (let e of wes) {
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML = str;



    // Academic Qualifications

    let aqs = document.getElementsByClassName("eqField");
    let str2 = "";
    for (let e of aqs) {
        str2 = str2 + `<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML = str2;


    // projects
    let pros = document.getElementsByClassName("pField");
    let str3 = "";
    for (let e of pros) {
        str3 = str3 + `<li> ${e.value} </li>`;
    }
    document.getElementById("pT").innerHTML = str3;

    // Code for adding profile photo into cv

    let file = document.getElementById("imgField").files[0];
    console.log(file);

    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);
    // set the image to template

    reader.onloadend = function()
    {
        document.getElementById('imgTemplate').src = reader.result;
    }
    
    
    // ---------------------------------------------------

    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";

}

function printCV() {
    window.print();
}