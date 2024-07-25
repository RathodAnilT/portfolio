document.addEventListener('DOMContentLoaded', function () {
    const elementsToAnimate = document.querySelectorAll('.animated');

    // Intersection Observer to add animation classes when elements are in view
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn', 'animate-slideUp'); // Add animation classes
                observer.unobserve(entry.target); // Stop observing after animation is added
            }
        });
    }, {
        threshold: 0.1 // Trigger animation when 10% of the element is visible
    });

    // Observe each element
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});
