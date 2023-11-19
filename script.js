function isValidEmail(email) {
    // Check if email has "@" and "."
    if (email.indexOf("@") > 0 && email.indexOf(".") > 0) {
        // Check if "@" appears before "."
        if (email.indexOf("@") < email.lastIndexOf(".")) {
            return true;
        }
    }
    return false;
}

function submitForm() {
    // Get form values
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let dob = document.getElementById('dob').value;
    let country = document.getElementById('country').value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let profession = document.getElementById('profession').value;
    let email = document.getElementById('email').value;
    let mobileNumber = document.getElementById('mobileNumber').value;


    if (!isValidEmail(email)) {
        alert("Invalid email address.");
        return;
    }
    
    if (!firstName || !lastName || !dob || !country || !gender || !profession || !email || !mobileNumber) {
        alert("All fields are mandatory!");
        return;
    }
    else if(mobileNumber.length !==10 )
    {
        alert("Provide valid 10 digit number")
        return
    }

    // Display submitted data in the popup
    let submittedDataDiv = document.getElementById('submittedData');
    submittedDataDiv.innerHTML = `
        First Name:${firstName}<br>
        Last Name: ${lastName}<br>
        Date of Birth: ${dob}<br>
        Country: ${country}<br>
        Gender: ${gender.value}<br>
        Profession: ${profession}<br>
        Email: ${email}<br>
       Mobile Number: ${mobileNumber}
    `;

    // Display the popup
    document.getElementById('popup').style.display = 'flex';
}

function resetForm() {
    document.getElementById('surveyForm').reset();
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    resetForm();
}