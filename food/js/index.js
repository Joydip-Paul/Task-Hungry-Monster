const searchFoods = () => {
    const searchMeal = document.getElementById('searchField').value;
    console.log(searchMeal);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`

    //load data
    fetch(url)
    .then(res => res.json())
    .then(data => displayFoods(data.meals))
    .catch(error => displayError ('Please Enter Valid Food'));
}

const displayFoods = foods => {
    const divContainer = document.getElementById('divContainer');
    divContainer.innerHTML = ' ';
    foods.forEach(meal => {
        const singleDiv = document.createElement('div');
        singleDiv.className = 'single-div';
        singleDiv.innerHTML = `

            <div onclick="getIngredients('${meal.idMeal}')">
                <img src = "${meal.strMealThumb}">
                <h2>${meal.strMeal}</h2>
            </div>
        `
        divContainer.appendChild(singleDiv);
    });
}

const getIngredients = (list) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${list}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayIngredients(data.meals))
}

const displayIngredients = mealInfo => {
    const modal = document.getElementById('modal');

    mealInfo.forEach (meal => {
        console.log(meal.strCategory)
        const newModalDiv = document.createElement('div');
        newModalDiv.className = 'modal';
        newModalDiv.innerHTML = `
            <div>
                <img src = "${meal.strMealThumb}">
                <h2>${meal.strMeal}</h2>
                <h5>Ingredients</h5>
                <p> <i class="fas fa-check-square"></i> ${meal.strIngredient1}</p>
                <p> <i class="fas fa-check-square"></i> ${meal.strIngredient2}</p>
                <p> <i class="fas fa-check-square"></i> ${meal.strIngredient3}</p>
                <p> <i class="fas fa-check-square"></i> ${meal.strIngredient4}</p>
                <p> <i class="fas fa-check-square"></i> ${meal.strIngredient5}</p>
                <p> <i class="fas fa-check-square"></i> ${meal.strIngredient6}</p>
            </div>
        `
        modal.appendChild(newModalDiv);
    })
}


const displayError = error => {
    const errorTag = document.getElementById('error');
    errorTag.innerText = error;
}