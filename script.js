const subhanAllahDisplay = document.getElementById('subhanAllahDisplay')
const subhanAllahIncrimentBtn = document.getElementById('subhanAllahIncrimentBtn')
const subhanAllahDecrimentBtn = document.getElementById('subhanAllahDecrimentBtn')

const alhamdulillahDisplay = document.getElementById('alhamdulillahDisplay')
const alhamdulillahIncrimentBtn = document.getElementById('alhamdulillahIncrimentBtn')
const alhamdulillahDecrimentBtn = document.getElementById('alhamdulillahDecrimentBtn')

const allahAkberDisplay = document.getElementById('allahAkberDisplay')
const allahAkberIncrimentBtn = document.getElementById('allahAkberIncrimentBtn')
const allahAkberDecrimentBtn = document.getElementById('allahAkberDecrimentBtn')

const resetBtn = document.getElementById('resetBtn')


let subhanAllahInitialValue = 0;
let alhamdulillahInitialValue = 0;
let allahAkberInitialValue = 0;


subhanAllahIncrimentBtn.addEventListener('click', function () {
    
    subhanAllahInitialValue += 1
    subhanAllahDisplay.innerText = subhanAllahInitialValue

})

subhanAllahDecrimentBtn.addEventListener('click', function () {

    if (subhanAllahInitialValue == 0) {
        return alert('You can not added negative value');
    }

    subhanAllahInitialValue -= 1
    subhanAllahDisplay.innerText = subhanAllahInitialValue

})

alhamdulillahIncrimentBtn.addEventListener('click', function () {

    alhamdulillahInitialValue += 1
    alhamdulillahDisplay.innerText = alhamdulillahInitialValue

})

alhamdulillahDecrimentBtn.addEventListener('click', function () {

    if (alhamdulillahInitialValue == 0) {
        return alert('You can not added negative value');
    }

    alhamdulillahInitialValue -= 1
    alhamdulillahDisplay.innerText = alhamdulillahInitialValue

})

allahAkberIncrimentBtn.addEventListener('click', function () {

    allahAkberInitialValue += 1
    allahAkberDisplay.innerText = allahAkberInitialValue

})

allahAkberDecrimentBtn.addEventListener('click', function () {

    if (allahAkberInitialValue == 0) {
        return alert('You can not added negative value');
    }

    allahAkberInitialValue -= 1
    allahAkberDisplay.innerText = allahAkberInitialValue

})

resetBtn.addEventListener('click', function () {

    subhanAllahDisplay.innerText = 0
    alhamdulillahDisplay.innerText = 0
    allahAkberDisplay.innerText = 0
    subhanAllahInitialValue = 0;
    alhamdulillahInitialValue = 0;
    allahAkberInitialValue = 0;

})