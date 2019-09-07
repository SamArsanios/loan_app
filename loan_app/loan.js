/** Function Defintion  */
const validate = () => {
  const loan = document.getElementById("loan");
  const interest = document.getElementById("interest");
  const period = document.getElementById("period");
  //    const zip = document.getElementById('zip');
  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-interest");

  const form = document.getElementById("main-form");

  form.addEventListener("submit", event => {
    event.preventDefault();

    monthlyPayment.focus();

    let rm = interest.value / 100 / 12;
    let nm = period.value * 12;

    let mp = (loan.value * rm) / (1 - Math.pow(1 + rm, -nm));
    let tp = mp * 360;
    let ti = tp - loan.value;

    monthlyPayment.innerHTML = mp;
    totalPayment.innerHTML = tp;
    totalInterest.innerHTML = ti;

    console.log(mp);
    console.log(tp);
    console.log(ti);
  });
};

validate();
