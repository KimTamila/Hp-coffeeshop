let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

document.querySelectorAll('.image-slider img').forEach(images =>{
    images.onclick = () =>{
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop : true,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
    },
});


document.addEventListener("DOMContentLoaded", function() {
    const menuOptions = document.querySelectorAll(".menu-options li a");
    const boxes = document.querySelectorAll(".box");

    menuOptions.forEach(option => {
        option.addEventListener("click", function(event) {
            event.preventDefault();
            const selectedOption = this.getAttribute("href").slice(1); // Убираем решетку из href
            filterBoxes(selectedOption);
        });
    });

    function filterBoxes(category) {
        boxes.forEach(box => {
            box.style.display = "none"; // Скрываем все боксы
            if (box.classList.contains(category)) {
                box.style.display = "block"; // Показываем только боксы с выбранной категорией
            }
        });
    }
});


// Get the input field and branch list
const locationInput = document.getElementById('location-input');
const branchList = document.getElementById('branch-list');

// Sample branch locations
const branchLocations = [
    'Branch 1',
    'Branch 2',
    'Branch 3',
    'Branch 4',
    'Branch 5',
    'Branch 6'
];

// Function to filter branch locations based on user input
const filterBranches = (input) => {
    const filteredBranches = branchLocations.filter(branch => branch.toLowerCase().includes(input.toLowerCase()));
    return filteredBranches;
};

// Function to display filtered branch locations
const displayBranches = (branches) => {
    branchList.innerHTML = ''; // Clear previous list items
    branches.forEach(branch => {
        const li = document.createElement('li');
        li.textContent = branch;
        branchList.appendChild(li);
    });
};

// Event listener for input changes
locationInput.addEventListener('input', () => {
    const input = locationInput.value;
    const filteredBranches = filterBranches(input);
    displayBranches(filteredBranches);
});


