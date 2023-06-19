// serrvices data
const services =[
    {
        name:"App Development",
        image:"images/app-development.png",    
    },
    {
        name:"Data-Storage",
        image:"images/data-storage.png",    
    },

    {
        name:"layout",
        image:"images/layout.png",    
    },

    {
        name:"User-Interface",
        image:"images/user-interface.png",    
    },
    {
        name:"Web-Design",
        image:"images/web-design.png",    
    },



];
//current slide
let i=0;

let j=services.length;
let  servicescontainer = document.getElementById ("services-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
    1 = (j+i+1)% j;
    displayServices();
});
prevBtn.addEventListener("click", () => {
    1 = (j+i+1)% j;
    displayServices();
});

 let  displayServices = () =>{
    servicecontainer.innerHTML =`
    <img src = ${services[i].image}>
    
    `;
 };window.onload  = displayServices;