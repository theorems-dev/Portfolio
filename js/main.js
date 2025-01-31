// const profilePic = document.querySelector('.profile-pic');
// const fullProfile = document.querySelector('.profile-card');
// const profileView = document.querySelector('.profile-view')

// profilePic.addEventListener('click', (event) => {
//     fullProfile.classList.toggle('active');
//     event.stopPropagation(); // Prevents click from propagating to document
// });

// document.addEventListener('click', (event) => {
//     // Check if the clicked element is NOT inside .profile-view
//     if (!profileView.contains(event.target) && !profilePic.contains(event.target)) {
//         fullProfile.classList.remove('active'); // Hide profile view
//     }
// });


const profilePic = document.querySelector('.profile-pic');
const profileCard = document.querySelector('.profile-card');
const profileView = document.querySelector('.profile-view')


profilePic.addEventListener('click', (event) => {
    profileCard.classList.toggle('active');
    event.stopPropagation(); // Prevents click from propagating
});

document.addEventListener('click', (event) => {
    if (!profileView.contains(event.target) && !profilePic.contains(event.target)) {
        profileCard.classList.remove('active');
    }
});
