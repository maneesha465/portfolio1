function handleSubmit(e){
     e.preventDefault();

    const fullname = document.getElementById("fullname").value;
    const fullnameError = document.getElementById("fullnameError");
    const contactnumber = document.getElementById('contactnumber').value;
    const numberError = document.getElementById('numberError');
        var pattern = /^\d{10}$/;
    if(fullname.length < 3){
         fullnameError.style.display = 'block';
        fullnameError.style.color = 'red';
        fullnameError.innerHTML = '<b> full name should contain minimum 3 letters.'
    }

    // const number = document.getElementById("number").value;
    // const numberError = document.getElementById("numberError");
    // if(number.length <10){
    //     numberError.style.color = 'red';
    //     numberError.innerhtml ='<b>Atleast ten numbers'
    // }


    
        
        if (!pattern.test(contactnumber.value)) {
            numberError.style.display = 'block';
        numberError.style.color = 'red';
            numberError.innerHTML ='Please enter a valid 10-digit phone number.'
            contactnumber.focus();
        }
   
    







    console.log("form submitted");
}











