// Code your solutions in this file

let finalCard;

function writeCards(arr,event) {

    let message = [];

    for (let i = 0; i < arr.length;i++) {
        message.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`);
    }

return message;

}
writeCards(["Charlie", "Samip", "Ali"], "birthday");


function countDown(num) {
    let i = num;
    while (i >= 0) {
        console.log (i);
        i--;
    }
    return countDown
}
