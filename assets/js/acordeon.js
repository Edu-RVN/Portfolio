const acordeonTrigger = document.querySelectorAll('.acordeon .trigger')

acordeonTrigger.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
       const acordeon = trigger.parentElement
       const isOpen = acordeon.classList.contains('open')

       if (isOpen) {
      acordeon.classList.remove('open')
       } else {
        acordeon.classList.add('open')
       }
    })
})

const elements = document.querySelectorAll(".fade-in");

function fadeInElements() {
  elements.forEach((element, index) => {
    element.style.transitionDelay = `${index * 0.1}s`;
    element.style.opacity = 1;
    element.style.transform = "translateY(0)";
  });
}

fadeInElements();