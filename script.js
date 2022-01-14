"use strict";

const title = document.getElementById("title");
const input = document.getElementById("input");
const convert = document.getElementById("convert");
const swap = document.getElementById("swap");
const result = document.getElementById("result");
const darkmode = document.getElementById("darkmode");
let swapped = false;
let themeswapped = false;

convert.addEventListener('click', convertFunc);
swap.addEventListener('click', swapFunc);
darkmode.addEventListener('click', darkmodeFunc);


function convertFunc() {
    const str = input.value;
    if(str == '') {
        result.innerHTML = 'Input must not be empty.'
    } else if(!isNaN(str)) {
        if(!swapped) {
            result.innerHTML = `${str}°C is ${Math.round(((str * (9/5)) + 32) * 10) / 10}°F`
        } else {
            result.innerHTML = `${str}°F is ${Math.round(((str - 32) * (5/9)) * 10) / 10}°C`
        }
    } else {
        result.innerHTML = 'Enter a valid input.'
    }
}

function swapFunc() {
    if(swapped) {
        swapped = false;
        title.innerHTML = 'Celsius to Fahrenheit';
        swap.innerHTML = 'F° to C°';
        convertFunc();
    } else {
        swapped = true;
        title.innerHTML = 'Fahrenheit to Celsius';
        swap.innerHTML = 'C° to F°';
        convertFunc();
    }
}

function darkmodeFunc() {
    if(themeswapped) {
        themeswapped = false;
        darkmode.innerHTML = 'Dark Mode';
        document.body.style.backgroundColor = 'rgb(255, 255, 255)';
        result.classList.remove("result_darkmode");
        title.classList.remove("title_darkmode");
        input.classList.remove("input_darkmode");
    } else {
        themeswapped = true;
        darkmode.innerHTML = 'Light Mode';
        document.body.style.backgroundColor = 'rgb(15, 15, 15)';
        result.classList.add("result_darkmode");
        title.classList.add("title_darkmode");
        input.classList.add("input_darkmode");
    }
}