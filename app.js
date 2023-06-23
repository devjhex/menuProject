let items = [


    {
        name:'Tacos Close Up',
        price:'$15.55',
        image:'tacos_close_up.png',
        alt:"tacos-close-up",
        text:"This is a group of tacos on a tray but what makes it different from the others is how and why they were made, in addition to being made for the mouth they're are made on the day jhex was born🤣🤣",
        category:'Food only'
    },
    {
        name:'Tacos tray',
        price:'$20.45',
        image:'tacos_tray.png',
        alt:"tacos-on-tray",
        text:"This tacos tray with the delicious look and italian style of cooking with lots of nature in it with no derivatives from the outside to the marrow.",
        category:"Food only"
    },
    {
        name:'Tacos and drink',
        price:'$50.45',
        image:'tacos_and_drink.png',
        alt:'tacos-and-drink',
        text:"This tacos tray together with a bottle of whisky plus with the delicious look and italian style of cooking with lots of nature in it with no derivatives from the outside to the marrow makes it the best look ever in a meal.",
        category:"Food and Drinks"
    },
    {
        name:'Tacos and drink for Dinner',
        price:'$50.45',
        image:'tacos_and_drink.png',
        alt:'tacos-and-drink',
        text:"This tacos tray together with a bottle of whisky plus with the delicious look and italian style of cooking with lots of nature in it with no derivatives from the outside to the marrow makes it the best look ever in a meal.",
        category:"Dinner"
    }
];
let buttons = document.querySelector(".buttons");




window.addEventListener("DOMContentLoaded",function(){
    display(items);
/* First Generate an array of all of the categories available and maybe filter them to get the ones unique */
    let uniqueCategories = [...new Set (items.map((prop)=>{
        return prop.category;
    })),"All"];
    //  console.log(uniqueCategories);

    let filterhtml = uniqueCategories.map((category)=>{
        return `<button class="bg-green-950 rounded-2xl mr-3 text-yellow-500 w-auto p-2 hover:bg-green-900 hover:border-2 hover:border-yellow-300 transition-all button" data-category="${category}">${category}</button>`;
    });
    buttons.innerHTML = filterhtml.join('');

    let filterBtns = document.querySelectorAll(".button");
    filterBtns.forEach(function(btn){
    btn.addEventListener("click",function(e){

    let category = e.currentTarget.dataset.category;
    console.log(category);

    if(btn.textContent==="Food only"){
        let filt = items.filter((obj)=>{
            return obj.category == "Food only"
        });
        display(filt);
    }
    else if(btn.textContent==="Food and Drinks"){
        let filt = items.filter((obj)=>{
        return obj.category == "Food and Drinks";
    });
        display(filt);
    }
    else if(btn.textContent==="All"){
        display(items);
    }
 })
})
});

function display(item){
    let i = ``;
    let menu = document.querySelector(".menu");
    item.forEach(function(item){

        
         i += `<article class="bg-green-950 w-5/6 sm:w-[420px] text-yellow-500 ml-8 mt-4 font-serif p-4 rounded-3xl cursor-pointer hover:bg-green-900 hover:border-[1px] border-yellow-300 transition-all group mx-auto sm:mx-auto">
        <h4 class="text-2xl">${item.name}</h4>
        <div class="w-10 h-1 bg-yellow-500 rounded"></div>
        <span class="text-3xl mb-2 block text-yellow-500">${item.price}</span>
        <img class="rounded-xl" src=${item.image} alt=${item.alt}>
        <div class="bg-green-800 w-1/2 h-1 rounded mt-2 group-hover:bg-yellow-600"></div>
        <p>${item.text}</p>
       </article>
      `;
    });
    menu.innerHTML=i;
}