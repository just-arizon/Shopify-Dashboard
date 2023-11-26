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
  
//   Select shopping item
  const shoppingBtn = document.querySelector("#shopping-item-checkbox");
  const spinningBtn = document.querySelector("#animated-spinning-icon");
  const notCompletedBtn = document.querySelector("#not-completed-icon");
  const completedBtn = document.querySelector("#completed");

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

function handleMarkAsDone(){
    notCompletedBtn.classList.add("hidden");

    spinningBtn.classList.remove("hidden");

    setTimeout(() => {
        spinningBtn.classList.add("hidden");
        
         
        completedBtn.classList.remove("hidden");
    }, 2000);

    setInterval(() => {
     
    },1000)

    shoppingBtn.classList.add("check-done");
}


function handleMarkAsNotDone(){
 completedBtn.classList.add("hidden");
 spinningBtn.classList.remove("hidden");

 setTimeout(() => {
    spinningBtn.classList.add("hidden");
 
    notCompletedBtn.classList.remove("hidden");

 },2000)
}

function handleCompletedOrNot() {
  const markAsDone = shoppingBtn.classList.contains("check-done");

  if(markAsDone){
    handleMarkAsNotDone();

  }else{
    handleMarkAsDone();

  }
}

  labelHeader.addEventListener("click", handleClick);
  shoppingBtn.addEventListener("click", handleCompletedOrNot);
  