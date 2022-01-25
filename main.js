let createform = document.getElementById('create-account');

function handleEmpty(element) {

    let elementValue = element.value

    if (elementValue == "") {
        console.log('Oops! You Should Correct It.');
        element.classList.add("error");
    }

    else {
        console.log('Wow. It Is Correct.');
        element.classList.remove("error");
        element.classList.add("suc");
    }
}

function formvalidation(event) {

    event.preventDefault();

    // Check If First Name Is Empty

    let fnameElement = document.getElementById('f-name');

    handleEmpty(fnameElement);

    // Check If Middle Name Is Empty

    let mnameElement = document.getElementById('m-name');

    handleEmpty(mnameElement);

    // Check If Last Name Is Empty

    let lnameElement = document.getElementById('l-name');

    handleEmpty(lnameElement);

    // Check If DOB Is Empty

    let dobElement = document.getElementById('dob');

    handleEmpty(dobElement);

    // Check If Email Id Is Empty

    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    emailElement = document.getElementById('email-id');

    emailvalue = emailElement.value

    if ( emailvalue.match(mailformat) ) {
        console.log('Wow. It Is Correct.');
        emailElement.classList.add("suc");
    }

    else {
        console.log('Oops! You Should Correct It.');
        emailElement.classList.remove("suc");
        emailElement.classList.add("error");
    }

    // Check If Password Is Empty

    let pass = ("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

    passwordElement = document.getElementById('Password');

    passwordvalue = passwordElement.value

    if ( passwordvalue.match(pass) ) {
        console.log('Wow. It Is Correct.');
        passwordElement.classList.add("suc");

        // c-password star //
        
        let cpassElement = document.getElementById('c-password');

        cpassvalue = cpassElement.value

        if ( cpassvalue.match(passwordvalue) ) {
            console.log('Wow. It Is Correct.');
            cpassElement.classList.add("suc");
        } 

        else {
            console.log('Oops! You Should Correct It.');
            cpassElement.classList.remove("suc");
            cpassElement.classList.add("error");
        }

    } 
    
    else {
        console.log('Oops! You Should Correct It.');
        passwordElement.classList.remove("suc");
        passwordElement.classList.add("error");
    }

    // Check If Mobile Number Is Empty

    let mobilenoElement = document.getElementById('mobileno');

    mobilenoValue = mobilenoElement.value;

    if (mobilenoValue.length !== 10) {
        console.log('Oops! You Should Correct It.');
        mobilenoElement.classList.add("error");
    }

    else {
        console.log('Wow. It Is Correct.');
        mobilenoElement.classList.remove("error");
        mobilenoElement.classList.add("suc");
    }

    // Check If Gender Is Empty

    let gender = document.getElementsByName('gender');

    console.log(gender);

    // Check For Any One Options Is Checked

    if( gender[0].checked || gender[1].checked ){
        console.log("Gender Is Correct");
    }

    else{
        console.log("Gender Is Wrong");
        gender[0].classList.add("error");
        gender[1].classList.add("error");
    }

    // Check If BIO Is Empty

    let bioElement = document.getElementById('bio'),
        bioValue = bioElement.value;

    if (bioValue.length < 40 || bioValue.length > 800) {
        console.log('Oops! You Should Correct It.');
        bioElement.classList.add("error");
    }

    else {
        console.log('Wow. It Is Correct.');
        bioElement.classList.remove("error");
        bioElement.classList.add("suc");
    }

}

createform.addEventListener('submit', formvalidation);