var slider = document.getElementById('slider');
var views = document.getElementById('views');
var output = document.getElementById('dollar');
var check = document.getElementById('check');

output.innerHTML = slider.value;
views.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = slider.value;
    views.innerHTML = slider.value;
}

function toggle() {
    check.classList.toggle('active');
}