const productList = document.getElementById
("product-list");
const searchInput = document.getElementById
("search-input");
const searchBtn = document.getElementById
("search-btn");
const categoryBtns =document.querySelectorAll
(".category-btn");



function filterProduct(){
const searchValue = searchInput.value.
toLowerCase();
const productItems = document.querySelectorAll
(".product-item");

const activecategory = document.querySelector 
(".category-btn.active").dataset.category;

productItems.forEach(item =>{
    const title = item.querySelector("h3").
    innerText.toLowerCase();
    const category = item.dataset.category;

    if((title.includes(searchValue) || 
    searchValue =="") && (category===
        activecategory || activecategory ==="all" )){
        item.style.display ="block";
    }
    else{
        item.style.display = "none";
    }
})

}
function setcategory(e){
    categoryBtns.forEach(btn => btn.classList.remove("active"));
        e.target.classList.add("active");
        filterProduct();
    
}
searchBtn.addEventListener("click",filterProduct);
searchInput.addEventListener("keyup",filterProduct);
categoryBtns.forEach(btn => {
    btn.addEventListener("click",setcategory);
})
filterProduct();