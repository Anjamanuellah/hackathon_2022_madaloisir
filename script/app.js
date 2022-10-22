let btn = document.getElementById("btn");
let btnIcon = document.getElementById("btn-icon");
let detail = document.getElementById("detail");

const toggleDetail = () => {
    if(btnIcon.name === "chevron-down") {
        btnIcon.name = "chevron-up";
        detail.style.height = "max-content";
    }
    else{
        btnIcon.name = "chevron-down";
        detail.style.height = 0;
    }
};

btn.addEventListener("click", toggleDetail);