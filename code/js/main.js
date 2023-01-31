/////////////////   SHOW MENU   ///////////////////
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/////////////////   MENU SHOW   ///////////////////
// validate if constant exits
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/////////////////   MENU HIDDEN   ///////////////////
// validate if constant exits
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/////////////////   REMOVE MENU MOBILE   ///////////////////
const navLink = document.querySelectorAll(".nav_link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav_link, we remove the show-menu
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

/////////////////   CHANGE BACKGROUND HEADER  ///////////////////
const scrollHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);

/////////////////   SCROLL SECTIONS ACTIVE LINK ///////////////////

/////////////////   SHOW SCROLL UP   ///////////////////

/////////////////   SCROLL REVEAL ANIMATION  ///////////////////

/////////////////   CALCULATE JS   ///////////////////
const calculateForm = document.getElementById("cal-form"),
  calculateCm = document.getElementById("cal-cm"),
  calculateKg = document.getElementById("cal-kg"),
  calculateMessage = document.getElementById("cal-message");

const calculateBmi = (e) => {
  e.preventDefault();

  // Check if the fields have a value
  if (calculateCm.value === "" || calculateKg.value === "") {
    // Add and remove color
    calculateMessage.classList.remove("color-green");
    calculateMessage.classList.add("color-red");

    // Show message
    calculateMessage.textContent = "Fill in the Height and Weight 👨‍💻";

    // Remove message three seconds
    setTimeout(() => {
      calculateMessage.textContent = "";
    }, 3000);
  } else {
    // BMI Formula
    const cm = calculateCm.value / 100,
      kg = calculateKg.value,
      bmi = Math.round(kg / (cm * cm));

    // Show your health status
    if (bmi < 18.5) {
      // Add color and display message
      calculateMessage.classList.add("color-green");
      calculateMessage.textContent = `Your BMI is ${bmi} and you are skinny 😔`;
    } else if (bmi < 25) {
      calculateMessage.classList.add("color-green");
      calculateMessage.textContent = `Your BMI is ${bmi} and you are healthy 🥳`;
    } else {
      calculateMessage.classList.add("color-green");
      calculateMessage.textContent = `Your BMI is ${bmi} and you are overweight 😔`;
    }

    // To clear the input field
    calculateCm.value = "";
    calculateKg.value = "";

    // Remove message four seconds
    setTimeout(() => {
      calculateMessage.textContent = "";
    }, 4000);
  }
};

calculateForm.addEventListener("submit", calculateBmi);

/////////////////   EMAIL JS   ///////////////////
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message"),
  contactUser = document.getElementById("contact-user");

const sendEmail = (e) => {
  e.preventDefault();

  // Check if the field has a value
  if (contactUser.value === "") {
    // Add and remove color
    contactMessage.classList.remove("color-green");
    contactMessage.classList.add("color-red");

    // Show message
    contactMessage.textContent = "You must enter your email";

    // Remove message three seconds
    setTimeout(() => {
      contactMessage.textContent = "";
    }, 3000);
  } else {
    // serviceID - templateID - #form - publicKey
    emailjs
      .sendForm(
        "service_e8ldupf",
        "template_0p65r78",
        "#contact-form",
        "tQJMmUGD7A9PoO08s"
      )
      .then(
        () => {
          // Show message and add color
          contactMessage.classList.add("color-green");
          contactMessage.textContent = "You registered successfully 💪";

          // Remove message after three seconds
          setTimeout(() => {
            contactMessage.textContent = "";
          }, 3000);
        },
        (error) => {
          // Mail sending error
          alert("OOPS! SOMETHING HAS FAILED...", error);
        }
      );

    // To clear the input field
    contactUser.value = "";
  }
};

contactForm.addEventListener("submit", sendEmail);
