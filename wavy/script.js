
var skillsubs = document.querySelectorAll('.skillsub');

skillsubs.forEach(skillsub => {
skillsub.dataset.aos = 'fade-left';
})

var projectsubs = document.querySelectorAll('.projectsub');
projectsubs.forEach(projectsub => {
projectsub.dataset.aos = "fade-up";
projectsub.dataset.aosAnchorPlacement="top-center";
})
AOS.init();
