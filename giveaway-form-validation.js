document.getElementById('giveaway-pet-form').addEventListener('submit', function(event) {
    var petType = document.getElementById('pet-type');
    var breed = document.getElementById('breed');
    var age = document.getElementById('age');
    var gender = document.getElementById('gender');
    var comment = document.getElementById('comment');
    var ownerFamilyName = document.getElementById('owner-family-name');
    var ownerGivenName = document.getElementById('owner-given-name');
    var ownerEmail = document.getElementById('owner-email');
    var formError = document.getElementById('form-error');

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    if (petType.value === '' || breed.value === '' || age.value === '' || gender.value === '' ||
        comment.value.trim() === '' || ownerFamilyName.value.trim() === '' || ownerGivenName.value.trim() === '' ||
        !emailRegex.test(ownerEmail.value)) {

        formError.style.display = 'block'; 
        event.preventDefault(); 
    } else {
        formError.style.display = 'none'; 
    }
});