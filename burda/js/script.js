function validatePhone() {
    var phoneForm = document.getElementById("phoneForm")
    var phone = document.getElementById("phoneNumber")
    var phoneNumber = document.getElementById("phoneNumber").value;
    var phoneError = document.getElementById("phoneError");
    var submissionText = document.getElementById("submissionText");
    var margin = document.getElementById("margin")

    if (phoneNumber.match(/^[0-9]+$/)) {
        phoneError.textContent = "";
        submissionText.style.display = "block";
        phoneForm.style.display = "none";
        margin.style.display = "none"
    } else {
        phone.style.border = "2px solid #ee6a57"
        submissionText.style.display = "none"; 
    }
}

const myDiv = document.getElementById('div4');
const colorButton = document.getElementById('vip');
const white = document.getElementById("white");
const whiteB = document.getElementById("white_1");
const whiteC = document.getElementById("white_2");
const circle = document.getElementById("circle");
let isGray = false;

colorButton.addEventListener('click', function() {
    if (!isGray) {
      myDiv.style.backgroundColor = "white"
      white.style.color = "rgb(51, 49, 49)"
      whiteB.style.color = "rgb(51, 49, 49)"
      whiteC.style.color = "rgb(51, 49, 49)"
      circle.style.backgroundColor = "white"
      colorButton.style.backgroundColor = "#c3c3c3"
      isGray = true;
    } else {
      myDiv.style.backgroundColor = "rgb(51, 49, 49)"
      white.style.color = "white";
      whiteB.style.color = "white";
      whiteC.style.color = "white";
      colorButton.style.backgroundColor = "white"
      circle.style.backgroundColor = "rgb(51, 49, 49)"
      isGray = false;
    }
  });


  colorButton.addEventListener('click', () => {
        // Toggle the 'active' class on the toggle switch
        colorButton.classList.toggle('active');

        // Check if the toggle switch is active
        const isActive = toggleSwitch.classList.contains('active');

        // Change the background color of the container
        myDiv.style.backgroundColor = isActive ? 'black' : 'yellow'
    });
