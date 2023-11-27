// Bell Notification
document.querySelector('.bell').addEventListener('click', () => {
        const bellMenu = document.querySelector('.notification__wrapper');
        bellMenu.classList.toggle('show');
    
    });
document.querySelector('.profiler').addEventListener('click', () => {
        const profilerMenu = document.querySelector('.profiler__wrapper');
        profilerMenu.classList.toggle('show');
    
    });



// Function that gets rid of the notification bar

const disableElements = document.querySelectorAll('[data-cancel]');
const enabledElements = document.querySelector('.plan__header');

function removeContent(params) {
    enabledElements.classList.toggle('remove')
}
disableElements.forEach(disableElement => {
    disableElement.addEventListener('click', removeContent)
})


// Dashboard
  // Select the element with the class 'label__header'
  const labelHeader = document.querySelector(".label__header");
  
  
 function handleClick() {
    const contentElement = document.querySelector("#content");
    contentElement.classList.toggle("active");

    // remove the chevron with the class of hidden and class of show to it

    const chevrons = document.querySelectorAll(".chevron");
    // console.log(chevrons);
    chevrons.forEach((chevron) => {
      if (contentElement.classList.contains("active")) {
        chevron.classList.toggle("hidden");
      } else {
        chevron.classList.toggle("hidden");
      }
    });
}

labelHeader.addEventListener("click", handleClick);


let openContent = null; // Variable to keep track of the currently open content


// Select shopping items
const shoppingItems = document.querySelectorAll(".shopping-item-checkbox");
const accordionLabel = document.querySelectorAll(" .accordion__label");
const spinningBtn = document.querySelector("#animated-spinning-icon");
const notCompletedBtn = document.querySelector("#not-completed-icon");
const completedBtn = document.querySelector("#completed");

accordionLabel.forEach(label => {
    label.style.backgroundColor = 'transparent'
})

// console.log(accordionItems);
function toggleTaskStatus(item) {
    const notCompletedIcon = item.querySelector("#not-completed-icon");
    const completedIcon = item.querySelector("#completed");

    notCompletedIcon.classList.add("hidden");
    completedIcon.classList.remove("hidden");

}

function handleMarkAsDone(item) {
    const notCompletedIcon = item.querySelector("#not-completed-icon");
    const spinningBtn = item.querySelector("#animated-spinning-icon");
    const accordionLabel = item.querySelectorAll(" .accordion__label");
    // const openContent = item.querySelector(".accordion__content");

    notCompletedIcon.classList.add("hidden");
    spinningBtn.classList.remove("hidden");

    setTimeout(() => {
        spinningBtn.classList.add("hidden");
        toggleTaskStatus(item);
        
        
        // Close the previously open content
        if (openContent) {
            openContent.classList.remove("active");

        }

        // Set the current open content
        openContent = item.querySelector(".accordion__content");
        openContent.classList.add("active");
        accordionLabel.forEach(label => {
            label.style.backgroundColor = '#f3f3f3'
        })

    }, 2000);

    item.classList.add("check-done");
}

function handleMarkAsNotDone(item) {
    const completedIcon = item.querySelector("#completed");
    const spinningBtn = item.querySelector("#animated-spinning-icon");
    const notCompletedIcon = item.querySelector("#not-completed-icon");
    const openContent = item.querySelector(".accordion__content");
    const accordionLabel = item.querySelectorAll(" .accordion__label");

    completedIcon.classList.add("hidden");
    spinningBtn.classList.remove("hidden");
    
    setTimeout(() => {
        spinningBtn.classList.add("hidden");
        notCompletedIcon.classList.remove("hidden");

    }, 2000);

    item.classList.remove("check-done");
}

function handleCompletedOrNot(event) {
    const item = event.currentTarget.closest(".accordion__contentbox");
    if (!item) return;
 

    const markAsDone = item.classList.contains("check-done");

    if (markAsDone) {
        handleMarkAsNotDone(item);
    } else {
        handleMarkAsDone(item);
    }
}

shoppingItems.forEach((item) => {
    item.addEventListener("click", handleCompletedOrNot);
});

  
  