console.log('helllo you are in the tags.js')
////////////////////////////////////////////
// document.addEventListener("DOMContentLoaded", function() {
//     const links = document.querySelectorAll("a"); // Select all links
//     const overlay = document.createElement('div'); // Create the overlay element
//     overlay.className = 'overlay';
//     document.body.appendChild(overlay); // Append the overlay to the body

//     links.forEach(link => {
//         link.addEventListener("click", function(event) {
//             if (!link.classList.contains('no-transition')) {
//                 event.preventDefault(); // Prevent default link behavior

//                 // Activate the white overlay with ease-in-out effect
//                 overlay.classList.add("active");

//                 // Wait for the overlay transition to complete
//                 setTimeout(() => {
//                     window.location.href = link.href; // Navigate to the new page
//                 }, 500); // Duration of the overlay effect (0.5s)
//             }
//         });
//     });

//     // Remove the overlay when the new page loads
//     window.addEventListener("load", function() {
//         overlay.classList.remove("active");
//     });
// });
/////////////////////////////////////