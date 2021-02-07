    let searchBtn = document.getElementById('searchBtn');

    searchBtn.addEventListener('click',function(){
     
    });

    // function displayFood() {
    //     let searchField = document.getElementById('searchField').value.trim();
    //     // fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchField}`)
    //     fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchField}`)
    //     .then(res => res.json())
    //     // .then(data => console.log((data.meals[0].strMeal)))
    //     .then(data => (data.meals))
    //     .then(innerData => innerData.map(el => console.log(el)))
    
    // }
    let searchField = document.getElementById('searchField').value.trim();
        // fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchField}`)
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchField}`)
        .then(res => res.json())
        // .then(data => (console.log(data.meals[0])))
        // .then(innerData => innerData.forEach(el => console.log(el)))
        .then(next => displayFood(next))


        const displayFood = food => {
            

            // food.forEach(foodElement => {
            //     const div = document.getElementById('foodGallery');
            //     const newDiv = document.createElement('div');
            //     newDiv.className = 'food';

            //     const foodDetails = `
            //         <h1>${foodElement.idMeal}</h1>
            //     `
            //     newDiv.innerHTML = foodDetails;
            //     div.appendChild(newDiv);
            // });
            for (let i = 0; i < food.length; i++) {
                const foodElement = food[i];

                const div = document.getElementById('foodGallery');
                const newDiv = document.createElement('div');
                newDiv.className = 'food';

                const foodDetails = `
                    <h1>${foodElement.strMeal}</h1>
                    <p>${foodElement.strMealThumb}</p>
                `
                newDiv.innerHTML = foodDetails;
                console.log(newDiv)
                div.appendChild(newDiv);
            }
        }