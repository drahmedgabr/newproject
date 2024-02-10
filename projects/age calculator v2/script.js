const dateInput = document.getElementById("dateInput");

const resultH3 = document.getElementById("resultH3");

function calculateAge() {
    if (dateInput.value == "") {
        alert("Please enter your birthdate");
    } else {
        const birthdateValue = dateInput.value;

        const age = getAge(birthdateValue);

        resultH3.innerText = `${age.years} years - ${age.months} months - ${age.days} days`;
    }
}

function getAge(birthdate) {
    // Parse the birthdate string into a Date object
    const birthDateObj = new Date(birthdate);

    // Get the current date
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const timeDiff = currentDate - birthDateObj;

    // Calculate the age in years
    const years = Math.floor(timeDiff / (365.25 * 24 * 60 * 60 * 1000));

    // Calculate the remaining milliseconds after removing years
    const remainingMilliseconds = timeDiff % (365.25 * 24 * 60 * 60 * 1000);

    // Calculate the remaining months
    const months = Math.floor(remainingMilliseconds / (30.44 * 24 * 60 * 60 * 1000));

    // Calculate the remaining days
    const days = Math.floor((remainingMilliseconds % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));

    return {
        years: years,
        months: months,
        days: days
    };
}
