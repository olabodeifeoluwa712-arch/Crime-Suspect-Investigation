const places =["market", "church", "office", "mall", "gym", "bank", "saloon", "eatery", "spa", "club", "office", "airport", "gym", "eatery", "market", "office", "mall", "eatery", "spa", "market", "eatery", "saloon", "church", "office", "spa", "club", "office", "office", "mall", "eatery", "gym", "bank", "saloon", "airport", "gym", "eatery"];
const target_location = document.getElementById('location');
const button = document.getElementById('submit');
const result = document.getElementById('result');
button.addEventListener("click", () => {
    function frequency(places, target_location) {
        let local = [];
        for (i = 0; i < places.length; i++) {
            if (places[i] === target_location) {
                local.push(places[i]);
            }
           
        }
         console.log(local);
        console.log("For this array the function will return frequency of " + local.length + " for the word " + local[0] + ".");

    }
    frequency(places, target_location.value);

}
)
// another approach to the function without using sn array method-push
for(let i=0;i<places.length; i++){
    let count=0;
    if(places[i]===target_location){
        count++;
    }
}
