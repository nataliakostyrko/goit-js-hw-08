const menuItem = document.querySelectorAll(`.item`);
const lengthMenuItem = menuItem.length;
console.log("Number of categories:", lengthMenuItem);

menuItem.forEach((item) => {

    const titleText = item.querySelector('h2').textContent;    
    const lengthList = item.querySelectorAll(`li`).length;
    
    console.log("Category:", titleText);    
    console.log("Elements:", lengthList);
});



