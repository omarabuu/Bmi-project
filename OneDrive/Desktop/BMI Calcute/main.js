 document.addEventListener('DOMContentLoaded', function() {
            const heightInput = document.querySelector('#height');
            const weightInput = document.querySelector('#weight');
            const calculateBtn = document.querySelector('#calculate');
            const resultDiv = document.querySelector('#result');
            const bmiValue = document.querySelector('#bmi-value');
            const bmiCategory = document.querySelector('#bmi-category');

            calculateBtn.addEventListener('click', function() {
                const height = (heightInput.value);
                const weight = (weightInput.value);

                if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
                    alert('Please enter valid height and weight values.');
                    return;
                }

                const bmi = weight / (height * height);
                const roundedBMI = Math.round(bmi * 10) / 10;
                bmiValue.textContent = `Your bmi is ${roundedBMI}`;

                let category = '';
                let emoji = '';
                let resultClass = '';

                if (bmi < 18.5) {
                    category = 'Under-Weight';
                    emoji = '🤔';
               
                } else if (bmi >= 18.5 && bmi < 25) {
                    category = 'Normal-Weight';
                    emoji = '👌';
           
                } else {
                    category = 'Over-Weight ';
                    emoji = '😯';
            
                }

                bmiCategory.textContent = `${category} ${emoji}`;
                resultDiv.className = resultClass;
                resultDiv.style.display = 'block';
            });
        });