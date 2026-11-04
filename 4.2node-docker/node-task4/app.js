const now = new Date();

const options = {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "long",
};

console.log("Current date and time:");
console.log(now.toLocaleString("en-IN", options));
