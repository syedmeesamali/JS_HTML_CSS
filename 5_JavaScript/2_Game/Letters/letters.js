document.addEventListener('DOMContentLoaded', () => {
    console.log("Document loaded!");
    
    //Main items to be acquired
    let cardContainer = document.querySelectorAll(".flip-card");
    //cardContainer.addEventListener('click', flipCard(cardContainer));
    let arr1 = [1,3,5,7,9];
    let arr2 = arr1.map(mem => mem + " is odd");
    console.log(arr2);
    //Just some course practice - using same project
    let Person = {
        name: "ali",
        age: 34,
        chars: ["happy", "free", "moody"],
        company: {comp_name: "CCL", years: 6.5}
    }
    console.log("Most he is: " + Person.chars[2]);

})
