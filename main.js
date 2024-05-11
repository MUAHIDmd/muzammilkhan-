let age = parseInt(prompt("Please enter your age:"));

if (!isNaN(age) && age >= 0) {
    if (age < 18) {
        console.log("Hello, young one! You're still underage.");
    } else if (age <= 30) {
        console.log("Hey there! You're in the prime of your life!");
    } else {
        console.log("Hello, wise one! You have experienced a lot in life.");
    }
} else {
    console.log("Invalid age. Please enter a valid age.");
}