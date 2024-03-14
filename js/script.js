let calcutateButton = document.getElementById('calculate-button');
calcutateButton.addEventListener('click' ,() => {
        
        const weight = parseInt(document.getElementById('input-weight').value);
        const age = parseInt(document.getElementById('input-age').value);
        const height = parseInt(document.getElementById('input-height').value);
        let height_status = false, weight_status = false;
        // Form Sex
        const man = document.getElementById('sex-man');
        const woman = document.getElementById('sex-woman');
        const ageResult = document.getElementById('age-result');
        if(man.checked==true){
            ageResult.innerHTML = ("BMI Laki laki");
        }
        else if(woman.checked){
            ageResult.innerHTML = ("BMI Perempuan");
        }
        else{
            document.getElementById('sex-error').innerHTML = 'Masukkan data yang valid !!';
        }
        // Form Weight
        if (weight == '' || isNaN(weight) || (weight <= 0) || (weight > 300)) {
            document.getElementById('weight-error').innerHTML = 'Masukkan data yang valid !!';
        } else {
            document.getElementById('weight-error').innerHTML = '';
            weight_status = true;
        }
// Form Age
if (age == '' || isNaN(age) || (age <= 0) || (age > 150)) {
    document.getElementById('age-error').innerHTML = 'Masukkan data yang valid !!';
} else {
    document.getElementById('height-error').innerHTML = '';
    height_status = true;
}

        // Form Height
        if (height == '' || isNaN(height) || (height <= 0) || (height > 300)) {
            document.getElementById('height-error').innerHTML = 'Masukkan data yang valid !!';
        } else {
            document.getElementById('height-error').innerHTML = '';
            height_status = true;
        }

        // BMI Calculate 
        const result = document.getElementById('calculate-result');
        const information = document.getElementById('information-result');
        const desc = document.getElementById('desc-result');
        if (height_status && weight_status) {
            const bmi = (weight / ((height * height) / 10000)).toFixed(2);

            if (bmi < 18.5) {
                result.innerHTML = +bmi;
                information.innerHTML = ('Berat badan anda kurang');
                desc.innerHTML = ('Hasil BMI kurang dari 18.5 <br/> <br/>Anda berada dalam kategori kekurangan berat badan. <br/> Hubungi dokter lebih lanjut mengenai pola makan dan gizi yang baik untuk meningkatkan kesehatan.');
            } else if (bmi >= 18.5 && bmi < 25) {
                result.innerHTML = +bmi;
                information.innerHTML = ('Berat badan anda ideal');
                desc.innerHTML = ('Hasil BMI diantara 18.5 dan 24.9 <br/> <br/>Anda berada dalam kategori berat badan yang normal. <br/> Tetap pertahankan berat badan Anda dan jaga berat badan Anda dengan mengatur keseimbangan antara pola makan dan aktivitas fisik Anda.');
            } else if (bmi >= 25 && bmi < 30) {
                result.innerHTML = +bmi;
                information.innerHTML = ('Berat badan anda berlebih');
                desc.innerHTML = ('Hasil BMI diantara 25 dan 29.9 <br/> <br/>Anda berada dalam kategori overweight atau berat badan berlebih. <br/> Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. <br/> Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.');
            } else {
                result.innerHTML = +bmi;
                information.innerHTML = ('Anda mengalami obesitas');
                desc.innerHTML = ('Hasil BMI lebih dari 30 <br/> <br/>Anda berada dalam kategori obesitas.<br/>Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik.<br/>Segera kunjungi dokter untuk dilakukan pemeriksaan kesehatan lanjutan untuk mengetahui risiko yang Anda miliki terkait berat badan Anda.');
            }
        } else {
            // alert('Masukkan data yang valid');
            result.innerHTML = 'ERROR';
            information.innerHTML = '';
        }
    });

let resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click' ,() => {
{
location.reload();
}
});

