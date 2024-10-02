$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    mouseDrag: false,
    autoplay: false,
    autoplayTimeout: 5000,  // Control autoplay interval (5 seconds)
    animateOut: "slideOutUp",  // Slide out effect
    animateIn: "fadeIn",  // Smooth fade-in for the next slide
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  
  function initializeTabContainer(tabContainer) {
    const tabButtons = tabContainer.querySelectorAll('.tab-button');
    const tabBackground = tabContainer.querySelector('.tab-background');
    const tabContentContainer = tabContainer.nextElementSibling;
    const tabItems = tabContentContainer.querySelectorAll('.ta-tab-item');
    let currentActiveTab = 0;

    function setActiveTab(newTabIndex) {
        const currentTab = tabButtons[currentActiveTab];
        const newTab = tabButtons[newTabIndex];
        
        tabButtons.forEach(button => button.classList.remove('active'));
        newTab.classList.add('active');

        tabItems.forEach(item => {
            if (item.dataset.tab == newTab.dataset.tab) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        const currentRect = currentTab.getBoundingClientRect();
        const newRect = newTab.getBoundingClientRect();
        const containerRect = tabButtons[0].parentElement.getBoundingClientRect();

        if (newTabIndex > currentActiveTab) {
            // Moving right
            tabBackground.style.width = `${newRect.right - currentRect.left}px`;
            tabBackground.style.left = `${currentRect.left - containerRect.left}px`;
            
            setTimeout(() => {
                tabBackground.style.width = `${newRect.width}px`;
                tabBackground.style.left = `${newRect.left - containerRect.left}px`;
            }, 150);
        } else {
            // Moving left
            tabBackground.style.width = `${currentRect.right - newRect.left}px`;
            tabBackground.style.left = `${newRect.left - containerRect.left}px`;
            
            setTimeout(() => {
                tabBackground.style.width = `${newRect.width}px`;
            }, 150);
        }

        currentActiveTab = newTabIndex;
    }

    tabButtons.forEach((button, index) => {
        button.addEventListener('click', () => setActiveTab(index));
    });

    // Initialize the first tab as active
    setActiveTab(0);
}

// Initialize all tab containers
document.querySelectorAll('.tab-container').forEach(initializeTabContainer);

   // Show the availability box when button is clicked
   $('#checkAvailabilityBtn').click(function(){
    $('#availabilityBox').slideToggle();
});

// Hide the availability box when close button is clicked
$('#hideAvailability').click(function(){
    $('#availabilityBox').slideUp();
});