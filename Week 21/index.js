const yogaButton = document.querySelector("#yoga-btn");
const soloButton = document.querySelector("#solo-btn");
const groupButton = document.querySelector("#group-btn");
const stretchingButton = document.querySelector("#stretching-btn");

const textDiv = document.getElementById("sport-1");

const image = document.getElementById("sport-img-1");


yogaButton.addEventListener("click" ,() =>{
    yogaButton.classList.add("active-button");
    yogaButton.classList.remove("deactive-button");
    soloButton.classList.remove("active-button");
    groupButton.classList.remove("active-button");
    stretchingButton.classList.remove("active-button");
    soloButton.classList.add("deactive-button");
    groupButton.classList.add("deactive-button");
    stretchingButton.classList.add("deactive-button");
    image.setAttribute("src", "/Week 21/assets/yoga.jpg");
    textDiv.innerHTML = `<h2 class="display-6 my-3"><b>Why Are Your Yoga?</b><p class="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum asperiores accusamus ea amet soluta beatae quasi, sequi quidem unde perspiciatis!</p></h2><h2 class="display-6 my-3"><b>When Comes Yoga Your Time</b><p class="my-3">Lorem ipsum dolor sit amet </p></h2>`;

}
);

soloButton.addEventListener("click" ,() =>{
    soloButton.classList.add("active-button");
    soloButton.classList.remove("deactive-button");
    yogaButton.classList.remove("active-button");
    groupButton.classList.remove("active-button");
    stretchingButton.classList.remove("active-button");
    yogaButton.classList.add("deactive-button");
    groupButton.classList.add("deactive-button");
    stretchingButton.classList.add("deactive-button");
    image.setAttribute("src", "/Week 21/assets/solo.jpg");
    textDiv.innerHTML = `<h2 class="display-6 my-3"><b>Why Are Your solo?</b><p class="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum asperiores accusamus ea amet soluta beatae quasi, sequi quidem unde perspiciatis!</p></h2><h2 class="display-6 my-3"><b>When Comes Solo Your Time</b><p class="my-3">Lorem ipsum dolor sit amet </p></h2>`;

}
);

groupButton.addEventListener("click" ,() =>{
    groupButton.classList.add("active-button");
    groupButton.classList.remove("deactive-button");
    soloButton.classList.remove("active-button");
    yogaButton.classList.remove("active-button");
    stretchingButton.classList.remove("active-button");
    soloButton.classList.add("deactive-button");
    yogaButton.classList.add("deactive-button");
    stretchingButton.classList.add("deactive-button");
    image.setAttribute("src", "/Week 21/assets/group.webp");
    textDiv.innerHTML = `<h2 class="display-6 my-3"><b>Why Are Your Group?</b><p class="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum asperiores accusamus ea amet soluta beatae quasi, sequi quidem unde perspiciatis!</p></h2><h2 class="display-6 my-3"><b>When Comes Group Your Time</b><p class="my-3">Lorem ipsum dolor sit amet </p></h2>`;

});

stretchingButton.addEventListener("click" ,() =>{
    stretchingButton.classList.add("active-button");
    stretchingButton.classList.remove("deactive-button");
    soloButton.classList.remove("active-button");
    groupButton.classList.remove("active-button");
    yogaButton.classList.remove("active-button");
    soloButton.classList.add("deactive-button");
    groupButton.classList.add("deactive-button");
    yogaButton.classList.add("deactive-button");
    image.setAttribute("src", "/Week 21/assets/stret.webp");
    textDiv.innerHTML = `<h2 class="display-6 my-3"><b>Why Are Your Stretch?</b><p class="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum asperiores accusamus ea amet soluta beatae quasi, sequi quidem unde perspiciatis!</p></h2><h2 class="display-6 my-3"><b>When Comes Stretch Your Time</b><p class="my-3">Lorem ipsum dolor sit amet </p></h2>`;
}
);


const bmiHeight = document.getElementById("height");
const bmiWeight = document.getElementById("weight");
let resultBMI=0;

function calculateBMI(){
   let heightValue = parseFloat(bmiHeight.value) / 100;
   let weightValue = parseFloat(bmiWeight.value);
   if (isNaN(heightValue) || isNaN(weightValue)) {
    document.querySelector(".triangle-up").setAttribute("visibility","hidden");
        return false;
    } else {
      resultBMI = weightValue / Math.pow((heightValue), 2);
      showResult();
    }
}

bmiWeight.addEventListener("input",()=>calculateBMI());
bmiHeight.addEventListener("input",()=>calculateBMI());

// function showResult() {
//     console.log(resultBMI);
//     const triangle = document.getElementById("triangle");
//     triangle.setAttribute("style","visibility: visible");
    

//     switch(resultBMI){
//         case resultBMI<18.5:
            
//             triangle.setAttribute("style", "left:1500px;");
//             break;
//             case (resultBMI<24.9) && (resultBMI>=18.5):
//             triangle.setAttribute("style", "left:1600px;");
//             break;
//             case (resultBMI<29.9) && (resultBMI>=25):
//             triangle.setAttribute("style", "left:1700px;");
//             break;
//             case (resultBMI<34.9) && (resultBMI>=30):
//             triangle.setAttribute("style", "left:1800px;");
//             break;
//             case (resultBMI>=35):
//             triangle.setAttribute("style", "left:1900px;");
//             break;
//         default:
//             break;
//     }

function showResult() {
    console.log(resultBMI);
    const triangle = document.getElementById("triangle");
    triangle.style.visibility = "visible";

    if (resultBMI < 18.5) {
        triangle.style.left = "14%";
    } else if (resultBMI >= 18.5 && resultBMI < 24.9) {
        triangle.style.left = "31%";
    } else if (resultBMI >= 25 && resultBMI < 29.9) {
        triangle.style.left = "48%";
    } else if (resultBMI >= 30 && resultBMI < 34.9) {
        triangle.style.left = "65%";
    } else if (resultBMI >= 35) {
        triangle.style.left = "83%";
    }
}






