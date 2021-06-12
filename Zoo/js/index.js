function Zoo(budget) {
    this.budget = budget;
    this.animalList = [];
    this.visiting = function () {
        const min = 1 * zoo.animalList.length;
        const max = 10 * zoo.animalList.length;
        const visitorListNumber = getRandomInt(min, max);

        let earnings = 0;

        for (let i = 0; i < zoo.animalList.length; i++) {
            earnings += zoo.animalList[i].value * visitorListNumber;
        }
        zoo.budget = zoo.budget + earnings;
        renderBudget();
    }

    this.buyAnimal = function (animal, name) {
        let newAnimal = undefined;
        switch (animal) {
            case "Elephant":
                newAnimal = new Elephant(name);
                this.animalList.push(new Elephant(name));
                this.budget -= newAnimal.price;

                break;
            case "Penguin":
                newAnimal = new Penguin(name);
                this.animalList.push(new Penguin(name));
                this.budget -= newAnimal.price;
                break;
            case "Lion":
                newAnimal = new Lion(name);
                this.animalList.push(new Lion(name));
                this.budget -= newAnimal.price;
                break;
        }
        renderBudget();

    }
}

function Animal(name, age) {
    this.name = name;
    this.age = age;
    this.index = Date.now();

    this.generateElement = function () {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const p = document.createElement('p');
        const p1 = document.createElement('p');

        p.innerText = this.name;
        p1.innerText = this.age;
        img.src = this.img;
        li.id = this.index;

        li.appendChild(img);
        li.appendChild(p);
        li.appendChild(p1);
        return li;
    }

}

function Elephant(name) {
    this.price = 1000;
    this.img = "https://assets.nrdc.org/sites/default/files/styles/full_content--retina/public/media-uploads/wlds43_654640_2400.jpg"
    Animal.call(this, name, getRandomInt(1, 5));
    this.value = 3;
    this.maxAge = getRandomInt(50, 150);

    this.activity = function() {
        let activityName = "Photo";
        var decider = document.getElementById('myCheck');
        if (decider.checked) {
            console.log("You can take photo with me");
        } else {
            return;
        }
    }
}

function Penguin(name) {
    this.price = 50;
    this.img = "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iKIWgaiJUtss/v2/-1x-1.jpg"
    Animal.call(this, name, getRandomInt(1, 2));
    this.value = 1;
    this.maxAge = getRandomInt(7, 15);


}

function Lion(name) {
    this.price = 300;
    this.img = "https://images.photowall.com/products/69237/lion-close-up.jpg?h=699&q=85"
    Animal.call(this, name, getRandomInt(1, 3));
    this.value = 2;
    this.maxAge = getRandomInt(30, 50);


}

var zoo = new Zoo(10000);

setInterval(zoo.visiting, 10000);

setInterval(addYearRandom, 15000);


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function addAnimal() {
    const animal = document.getElementById("animal-select").value;
    const animalName = document.getElementById("animal-name").value;
    zoo.buyAnimal(animal, animalName);
    renderAnimalList();

}

function addYearRandom() {
    //Validate if animalList is not empty
    if (zoo.animalList < 1) {
        return;
    }

    var randomAnimal = zoo.animalList[Math.floor(Math.random() * zoo.animalList.length)];
    //  console.log(item.age);
    randomAnimal.age = randomAnimal.age + 1;
    // console.log(item.age);
    renderAnimalList();
    deleteAnimals();
}

function deleteAnimals() {
    for (let i = 0; i < zoo.animalList.length; i++) {
        if (zoo.animalList[i].age >= zoo.animalList[i].maxAge) {
            console.log("Age: " + zoo.animalList[i].age + " Max age: " + zoo.animalList[i].maxAge);

            printAnimalsNames(zoo.animalList);
            zoo.animalList.splice(i, 1);
            printAnimalsNames(zoo.animalList);

            renderAnimalList();
        }
    }
}

function printAnimalsNames(animalList) {
    var animalsName = "";
    animalList.forEach(function (animal) {
        animalsName += animal.name + ",";
    });
    console.log(animalsName);
}

function renderAnimalList() {
    const animalList = document.getElementById("animal-list");
    animalList.innerHTML = "";
    for (let i = 0; i < zoo.animalList.length; i++) {
        const animal = zoo.animalList[i];
        const domElement = animal.generateElement();
        animalList.appendChild(domElement);

    }

}

function renderBudget() {
    const budget = document.getElementById("budgetAmount");
    budget.innerText = zoo.budget;
}
