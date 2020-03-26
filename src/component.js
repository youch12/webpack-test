export default (text = "Hello webpack") => {
    let message = "Message From ES6";
    const element = document.createElement("p");

    element.innerHTML = text;

    return element;
};