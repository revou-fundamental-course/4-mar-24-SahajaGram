let button = document.getElementById('calculate-button');

button.addEventListener('click' ,() => {
        const man = parseInt(document.getElementById('sex-man').value);
        const woman = parseInt(document.getElementById('sex-woman').value);
        const weight = parseInt(document.getElementById('input-weight').value);
        const height = parseInt(document.getElementById('input-height').value);
        const result = document.getElementById('calculate-result');
        const information = document.getElementById('information-result');
        let height_status = false, weight_status = false;
        // Form Sex
        // Form Weight
        if (weight == '' || isNaN(weight) || (weight <= 0) || (weight > 300)) {
            document.getElementById('weight-error').innerHTML = 'Masukkan data yang valid !!';
        } else {
            document.getElementById('weight-error').innerHTML = '';
            weight_status = true;
        }

        // Form Height
        if (height == '' || isNaN(height) || (height <= 0) || (height > 300)) {
            document.getElementById('height-error').innerHTML = 'Masukkan data yang valid !!';
        } else {
            document.getElementById('height-error').innerHTML = '';
            height_status = true;
        }

        // BMI Calculate 
        if (height_status && weight_status) {
            const bmi = (weight / ((height * height) / 10000)).toFixed(2);

            if (bmi < 18.5) {
                result.innerHTML = +bmi;
                information.innerHTML = ('Berat badan anda kurang');
            } else if (bmi >= 18.5 && bmi < 25) {
                result.innerHTML = +bmi;
                information.innerHTML = ('Berat badan anda ideal');
            } else if (bmi >= 25 && bmi < 30) {
                result.innerHTML = +bmi;
                information.innerHTML = ('Berat badan anda berlebih');
            } else {
                result.innerHTML = +bmi;
                information.innerHTML = ('');
            }
        } else {
            lert('Masukkan data yang valid');
            result.innerHTML = '';
            information.innerHTML = 'ERROR ERROR';
        }
    });

