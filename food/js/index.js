// const conatinerDiv = document.getElementById('foodGallery');
const searchBtn = document.getElementById('searchBtn');


searchBtn.addEventListener('click',function(){
    const serachField = document.getElementById('searchField').value;

    const invalid = document.getElementById('invalid');
    if(serachField === ''){
        invalid.style.display = 'block';
    }
    else{
        invalid.style.display = 'none';
        foodFromApi(serachField);
    }
});

//data get from api
const foodFromApi = ApiMeal => {
    const url = (`https://www.themealdb.com/api/json/v1/1/search.php?s=${ApiMeal}`);
    // console.log(url);

    fetch(url)
    .then(res => res.json())
    // .then (data => console.log(data))
    .then (data => displayFood(data.meals))


    //display data in first page
    const displayFood = foodElement => {
        const conatinerDiv = document.getElementById('foodGallery');
        foodElement.map(food => {
            const newDiv = document.createElement('div');
            newDiv.className = 'new-div';

            const foodInfo = `
                
                    <img src = "${food.strMealThumb}">
                    <h1>${food.strMeal}</h1>
               
            `
            newDiv.innerHTML = foodInfo;
            conatinerDiv.appendChild(newDiv);
        })
    }
}



const singleFoodDetails = foodName => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;

    fetch(url)
    .then(res => res.json())
    .then(data => {
        renderFood(data.meals[0]);
    });
};

const renderFood = food => {
    const foodDetails = document.getElementById('foodDetails');
    foodDetails.innerHTML = `
        <img src="${food.strMealThumb}">
        
    `


}