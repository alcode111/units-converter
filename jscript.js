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

})

function metersToFeet(meter){
    return {
        toFeet: (meter * meterToFoot).toFixed(3),
        toMeters: (meter / meterToFoot).toFixed(3)
    }
}