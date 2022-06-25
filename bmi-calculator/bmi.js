
const calculate = document.getElementById('calculate');


function bmi () {
  const name = document.getElementById('name');
  const height = document.getElementById('height');
  const weight = document.getElementById('weight');
  const result_id = document.getElementById('result-id');

  if (name !== '' && height !== '' && weight !== ''){
    alert ('values filled')
  }
  else {
    alert ('values null!')
  }


}

calculate.addEventListener('click', bmi);