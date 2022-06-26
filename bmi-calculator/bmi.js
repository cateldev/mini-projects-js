
const calculate = document.getElementById('calculate');


function bmi () {
  const name = document.getElementById('name').value;
  const height = document.getElementById('height').value;
  const weight = document.getElementById('weight').value;
  const result_id = document.getElementById('result_id');

  if (name !== '' && height !== '' && weight !== ''){
    
    const valueBMI = (weight / (height * height)).toFixed(2);

    result_id.textContent = valueBMI

    let rating = "";

    if ( valueBMI < 18.5) {
      rating = 'under-weight'
    }
    else if (valueBMI < 25) {
      rating = 'in good weight'
    }
    else if (valueBMI < 30) {
      rating = 'over-weight'
    }
    else if (valueBMI < 35) {
      rating = 'obese grade 1'
    }
    else if (valueBMI < 40) {
      rating = 'obese grade 2'
    }
    else if (valueBMI < 45) {
      rating = 'obese grade 3, be careful!'
    }

    result_id.textContent = `${name} your BMI is ${valueBMI} and you are ${rating}`;

  }
  else {
    result_id.textContent = 'Please complete all required fields'
  }


}

calculate.addEventListener('click', bmi);