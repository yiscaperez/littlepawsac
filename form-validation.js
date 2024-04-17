document.getElementById('find-pet-form').addEventListener('submit', function(event) {
    var petType = document.getElementById('pet-type');
    var breed = document.getElementById('breed');
    var age = document.getElementById('age');
    var gender = document.getElementById('gender');
    var formError = document.getElementById('form-error');

    if (petType.value === '' || breed.value === '' || age.value === '' || gender.value === '') {
        formError.style.display = 'block'; 
        event.preventDefault(); 
    } else {
        formError.style.display = 'none'; 
    }
});