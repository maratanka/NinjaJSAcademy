const animalsGlobal = [];
var zooBudgetGlobal = 500000;


function addAnimal() {
    const newAnimal = document.getElementById("new-animal").value;
    const animalCost = parseInt(document.getElementById("animal-cost").value);
    const animal = new Animal(newAnimal, animalCost);
    animalsGlobal.push(animal);
    zooBudgetGlobal = zooBudgetGlobal - animalCost;
    renderBudget();
    renderAnimals(animalsGlobal);
    renderAnimalsCount();
}

class Animal {
    constructor(newAnimal, animalCost) {
        this.newAnimal = newAnimal;
        this.animalCost = animalCost;
        this.id = Date.now();
        this.getListObject = function () {

            const li = document.createElement('li');
            const pAnimal = document.createElement('p');
            const button = document.createElement('button');
            const _this = this;

            pAnimal.innerText = this.newAnimal;
            button.innerText = "DELETE";
            li.id = this.id;


            li.appendChild(pAnimal);
            li.appendChild(button);


            //Delete animal by click Delete button
            button.onclick = function deleteAnimals() {

                for (let i = 0; i < animalsGlobal.length; i++) {
                    if (animalsGlobal[i].id == _this.id) {
                        animalsGlobal.splice(i, 1);
                        renderAnimals(animalsGlobal);
                        i = i - 1;
                    }
                }
            };

            return li;
        };
    }
}

function renderAnimals(animals) {
    //clear old animals list
    const list = document.getElementById("animals-list");
    //create a new list
    list.innerHTML = '';

    for (let i = 0; i < animals.length; i++) {
        const newAnimal = animals[i];
        const li = newAnimal.getListObject();
        list.appendChild(li);
    }
}

function renderBudget() {
    const budget = document.getElementById("budgetAmount");
    budget.innerText = zooBudgetGlobal;
}

function renderAnimalsCount() {
    const animalsCount = document.getElementById("animalsCount");
    animalsCount.innerText = animalsGlobal.length;

}
function renderAll() {
    renderBudget();
    renderAnimalsCount();
    initializeIntervals();
}

function initializeIntervals() {
    setInterval(function addBudgetInterval() {
        zooBudgetGlobal = zooBudgetGlobal + 50;
        renderBudget();
        console.log("Wywolane initializeBudgetInterval()" + new Date().toISOString());
    }, 10000)

    setInterval(function deleteAnimalsInterval() {

        animalsGlobal.splice(Math.floor(Math.random() * animalsGlobal.length), 1);
        renderAnimals(animalsGlobal);
        renderAnimalsCount();

        console.log(animalsGlobal);
        console.log("Wywolane deleteAnimalsInterval()" + new Date().toISOString());
    }, 50000)

}
