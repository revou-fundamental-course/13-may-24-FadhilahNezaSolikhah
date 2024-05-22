document.getElementById('luas-segitiga-button').addEventListener('click', function() {
    document.getElementById('luas-segitiga-section').classList.add('active');
    document.getElementById('keliling-segitiga-section').classList.remove('active');
});

document.getElementById('keliling-segitiga-button').addEventListener('click', function() {
    document.getElementById('keliling-segitiga-section').classList.add('active');
    document.getElementById('luas-segitiga-section').classList.remove('active');
});

document.getElementById('luas-segitiga-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let base = parseFloat(document.getElementById('base').value);
    let height = parseFloat(document.getElementById('height').value);
    
    if (isNaN(base) || isNaN(height)) {
        alert('Harap masukkan angka yang valid');
        return;
    }

    let area = 0.5 * base * height;

    document.getElementById('luas-area').textContent = area.toFixed(2);
});

document.getElementById('keliling-segitiga-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let sideA = parseFloat(document.getElementById('sideA').value);
    let sideB = parseFloat(document.getElementById('sideB').value);
    let sideC = parseFloat(document.getElementById('sideC').value);
    
    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
        alert('Harap masukkan angka yang valid');
        return;
    }

    let perimeter = sideA + sideB + sideC;

    document.getElementById('keliling-perimeter').textContent = perimeter.toFixed(2);
});
