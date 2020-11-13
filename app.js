/*
async function getUsers(){
    const result = await axios.get('https://reqres.in/api/users')
    console.log(result);
}

async function createUser(){
    const result = await axios.post('https://reqres.in/api/users', {username: 'SpiderMan', email: 'WallCrawler@gmail.com', age: 100})
    console.log(result);
}
    getUsers();
    createUser();
    */

    //PART 1
    async function getGIPHY(){ 
        const result = await axios.get('http://api.giphy.com/v1/gifs/search?q=hilarious&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym');
        console.log(result);
    }
    //PART 2
        function submitAction(){
        //const srchBtn = document.querySelector('#srchBtn');
        //const inputValue = document.querySelector('#inputData').value;

        const searchForm = document.querySelector('#searchForm');
        searchForm.addEventListener('submit', searchFormAction);
        }

        function appendingAction(queryResult){
        //const queryResult = await axios.get('api.giphy.com/v1/gifs/search', { params: { inputValue } });
        const divArea = document.querySelector('#gifArea');
        let numOfResults = queryResult.data.length;
        for(let gif of queryResult){
            //for each gif result from queryResult
            let newImage = document.createElement('img'); //Create a new Image element
            let newGif = gif.data.images.original.url;
            let gifData = gif.data; //Get the data for that one specific gif
            let gifURL = gifData.url; //Get the URL of the gifData
            newImage.src = gifURL; // Make the SRC of the new Image element the gifURL

            divArea.appendChild(newGif);
        }
        //clearInputValue();
        return divArea
    }

    async function searchFormAction(){
        //e.preventDefault();
        const inputValue = document.querySelector('#inputData').value;
        const getQuery = await axios.get(`api.giphy.com/v1/gifs/search/${inputValue}`);
        appendingAction(getQuery);
    }
/*
    function clearInputValue(){
        let inputVal = document.querySelector('#inputData').value;
        inputVal = '';

        //return inputVal
    }
*/
    //getGIPHY();
    submitAction();