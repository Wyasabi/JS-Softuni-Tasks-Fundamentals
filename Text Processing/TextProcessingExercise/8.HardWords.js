// You will receive an array which holds string and another array. 
// The string is a letter from young boy who does not yet know some words and you have to help him. 
// The letter has few holes, these holes are the words unknown to the boy and you must fill them with 
// strings from the array you receive at the second index. 
// If a length of the hole is 4 you have to replace it with string with the same length and so on…


function hardWords([str, words]){

    let index = str.indexOf('_');
    counter = 0;
    while(index !== -1){
        counter++;
        //index++;


        if(str[index + counter] !== "_"){
            let word = words.filter(x => x.length === counter)[0];
            str = str.substring(0, index) + word + str.substring(index + counter);
            index = str.indexOf('_');
            counter = 0;
            
        }
    }
    console.log(str);
}

hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
);
