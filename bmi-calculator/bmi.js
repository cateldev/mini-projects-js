
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

  }
  else {
    result_id.textContent = 'Please complete all required fields'
  }


}

calculate.addEventListener('click', bmi);