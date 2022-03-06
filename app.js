const gender = document.getElementsByName("gender");

const gender_array = Array.from(gender);

/* Select gender */

const CheckSelection = () => {
  gender_array.forEach((el) => {
    const avatar_container = el.parentElement;
    if (el.checked) {
      avatar_container.classList.add("active");
    } else {
      avatar_container.classList.remove("active");
    }
  });
};

for (const el of gender_array) {
  const gender_select = el;
  gender_select.addEventListener("click", () => {
    CheckSelection();
  });
}

/* Plus and minus Btn */

const ipt_nums = document.getElementsByClassName("ipt-number-container");

const ipt_nums_array = Array.from(ipt_nums);

for (const el of ipt_nums_array) {
  const minus_btn = el.children[0];
  const plus_btn = el.children[2];
  const ipt_number = el.children[1];
  let ipt_number_value =
    el.children[1].value === "" ? 0 : parseInt(el.children[1].value);

  minus_btn.addEventListener("click", () => {
    if (ipt_number_value >= 1) {
      ipt_number.value = --ipt_number_value;
    }
  });

  plus_btn.addEventListener("click", () => {
    ipt_number.value = ++ipt_number_value;
  });
}
