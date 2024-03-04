import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase,ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = { 
    databaseURL: "https://codelab-75550-default-rtdb.asia-southeast1.firebasedatabase.app"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const ditatoloInDB = ref(database, "ditatolo")
 
const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const  ditatoloEL = document.getElementById("ditatolo")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    
    push(ditatoloInDB, inputValue)
    
    resetInputFieldEl()          
})

onValue(ditatoloInDB, function(snapshot){
    
 let itemsArray = Object.entries (snapshot.val()) 

     clearDitatoloEl()
    
    for (let i = 0; i < itemsArray.length; i++) {
        let currentItem = itemsArray[i]        
        let currentItemID = currentItem[0]
        let currentItemValue = currentItem[1]
        
        addItemToDitatoloEl(currentItemValue)
    }
    
    newEl.addEventListener("click", function() {
        console.log(currentItem)
    })
    
})

function clearDitatoloEl(){
    ditatoloEL.innerHTML = ""
}
    
function resetInputFieldEl() {
    inputFieldEl.value = ""
}

function addItemToDitatoloEl(itemValue) {
    ditatoloEL.innerHTML +=  `<li>${itemValue}</li>`
}