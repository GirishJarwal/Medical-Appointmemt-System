function clearErrors(){
    errors = documents.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }
}

function seterror(id, error){
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(){
    var returnVal = true;
    // clearErrors();
    //perform validation and if validation fails then set value of returnVal to false
    var name = document.forms['HealthForm']["fName"].value;
     if(name.length < 4){
        seterror("name", "*Length of name is too short");
        returnVal = false;
    
    }

    var area = document.forms['HealthForm']["fArea"].value;
    if (area.length<7){
        seterror("fArea", "*You need to properly define area of your residence");
        returnVal = false;
    }

    var phone = document.forms['HealthForm']["fMobile no."].value;
    if(phone.length != 10){
        seterror("fMobile no.", "*Mobile number must constain digits only");
        returnVal = false;
    }
}

            function openit(){
                const url = 'form.html';
                window.open(url);
            }

        
