// Gender Selection Effect

const genderArray = Array.from(document.getElementsByName("gender"));

genderArray.forEach((option) => {
  option.addEventListener("click", () => {
    genderArray.forEach((gender) => {
      if (gender.checked) {
        gender.parentElement.classList.add("active");
      } else {
        gender.parentElement.classList.remove("active");
      }
    });
  });
});

// Plus and minus btn
const numInfoArray = Array.from(
  document.querySelectorAll(".ipt-number-container")
);

numInfoArray.forEach((el) => {
  const ipt_array = Array.from(el.children);
  const plus_btn = ipt_array[2];
  const minus_btn = ipt_array[0];
  const ipt_num = ipt_array[1];

  plus_btn.addEventListener("click", () => {
    let ipt_number_value = ipt_num.value === "" ? 0 : parseInt(ipt_num.value);
    ipt_num.value = ++ipt_number_value;
  });

  minus_btn.addEventListener("click", () => {
    let ipt_number_value = ipt_num.value === "" ? 0 : parseInt(ipt_num.value);
    if (ipt_number_value >= 1) {
      ipt_num.value = --ipt_number_value;
    } else {
      ipt_num.value = "";
    }
  });
});

// Calculate BMI
function ValidateData() {
  const radio_checked = document.querySelector("input[type='radio']:checked");
  const age = parseInt(document.querySelector("#age-input").value);
  const height = parseInt(document.querySelector("#height-input").value) / 100;
  const weight = parseInt(document.querySelector("#weight-input").value);

  if (radio_checked === null || isNaN(age) || isNaN(height) || isNaN(weight)) {
    window.alert("Preencha todos os campos!");
    return false;
  } else {
    const bmi = weight / (height * height);
    return bmi;
  }
}

const calculateBtn = document.getElementById("calculate-btn");

calculateBtn.addEventListener("click", () => {
  if (ValidateData() !== false) {
    const bmi = ValidateData();
    const bmi_div = document.querySelector("#bmi-result");
    let level;

    if (bmi < 18.5) {
      level = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      level = "Normal";
    } else if (bmi >= 25 && bmi < 29.9) {
      level = "Overweight";
    } else if (bmi >= 30 && bmi < 34.9) {
      level = "Obese";
    } else {
      level = "Extremely obese";
    }

    bmi_div.innerHTML = `
    <h2>Your result: ${bmi.toFixed(2)}</h2>
    <p>${level}</p>
    `;
  }
});
