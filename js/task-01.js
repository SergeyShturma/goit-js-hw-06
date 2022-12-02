const categoriesEl = document.querySelectorAll('.item');
console.log('Number of categories: ', categoriesEl.length);

// console.log('Number of categories: ', document.querySelectorAll('li.item').length);


categoriesEl.forEach((el) => {

let categoryName = el.querySelector('h2').textContent;
    let totalEl = el.querySelectorAll('li').length;
    console.log('\n');
    console.log('Category: ', categoryName);
    console.log ('Elements: ', totalEl);

});
