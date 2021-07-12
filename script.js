document.getElementById('shape-selector').addEventListener('change', function (evt) {
    let form = document.getElementById('form');
    form.className = 'shape-' + evt.target.value;
});

document.getElementById('shape-color-selector').addEventListener('change', function (evt) {
    let form = document.getElementById('form');
    form.style.borderColor = evt.target.value;
});

document.getElementById('btn').addEventListener("click", function (evt) {
    evt.preventDefault();
    let form = document.getElementById('form');
    form.style.backgroundColor = document.getElementById('shape-color-selector').value;
});
