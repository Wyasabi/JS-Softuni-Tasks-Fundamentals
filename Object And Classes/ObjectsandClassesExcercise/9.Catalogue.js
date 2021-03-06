// You have to create a sorted catalogue of store products. You will be given the products’ names and prices. 
// You need to order them by alphabetical order. 
// The input comes as array of strings. Each element holds info about a product in the following format:
// “{productName} : {productPrice}”
// The product’s name will be a string, which will always start with a capital letter, and the price will be a number. 
// You can safely assume there will be NO duplicate product input. The comparison for alphabetical order is case-insensitive.
// As output you must print all the products in a specified format. They must be ordered exactly as specified above. 
// The products must be divided into groups, by the initial of their name. The group’s initial should be printed, 
// and after that the products should be printed with 2 spaces before their names. For more info check the examples.


function orderedCatalogue(array){
    let catalogue = [];
    for (let i = 0; i < array.length; i++) {
        let elements = array[i].split(' : ');
        let product = {
            name: elements[0],
            price: parseFloat(elements[1])
        };
        catalogue.push(product);
    }
    
    catalogue.sort((a,b) => a.name.localeCompare(b.name));
 
    let currentLetter = '';
    for (const product of catalogue) {
        if (product.name.charAt(0).toUpperCase() === currentLetter){
            console.log(`  ${product.name}: ${product.price}`)
        }else {
            currentLetter = product.name.charAt(0).toUpperCase();
            console.log(currentLetter);
            console.log(`  ${product.name}: ${product.price}`)
 
        }
    }
}
