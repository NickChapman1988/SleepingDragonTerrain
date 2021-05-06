function sendMail(contactForm) {
    emailjs.send("outlook","sleepingdragonterrain", {
        "from_name": contactForm.full_name.value,
        "from_email": contactForm.emailaddress.value,
        "project_description": contactForm.project_description.value,
        "timeframe": contactForm.timeframe.value,
        "budget": contactForm.budget.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}