const unitInput = document.getElementById("unit-input")
const convertBtn = document.getElementById("convert-btn")

const paraMeterFeet = document.getElementById("meters-feet")
const paraLitersGallons = document.getElementById("liters-gallons")
const paraKilosPounds = document.getElementById("kilos-pounds")

let userInput = ""

const meterToFoot = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204

convertBtn.addEventListener('click', function() {
    userInput = unitInput.value
    unitInput.value = ""

    paraMeterFeet.innerHTML = `<p class="measure-subtitle" id="meters-feet">
    ${userInput} meters = ${metersToFeet(userInput).toFeet} feet | ${userInput} feet = ${metersToFeet(userInput).toMeters} meters
    </p>`

    paraLitersGallons.innerHTML = `<p class"measure-subtitle" id="meters-feet">
    ${userInput} liters = ${litersToGallons(userInput).toGallons} gallons | ${userInput} gallons = ${litersToGallons(userInput).toLiters} liters
    </p>`
})

function metersToFeet(meter){
    return {
        toFeet: (meter * meterToFoot).toFixed(3),
        toMeters: (meter / meterToFoot).toFixed(3)
    }
}

function litersToGallons(liter) {
    return {
        toGallons: (liter * literToGallon).toFixed(3),
        toLiters: (liter / literToGallon).toFixed(3)
    }
}