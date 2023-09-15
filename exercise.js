function printName() {
    let helloName = "Hello John";

    function inner() {
        console.log(helloName);
        return helloName;
    }
    setTimeout(inner, 1000);
}
printName();

//setTimeout(printName, 1000);