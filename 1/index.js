function getGif(){

    const APIKEY = "i0rNfFwLkETX14K15tYjUpwtvpGhBxVx" ;
    let inputGif = document.getElementById('search').value;
    fetch(`http://api.giphy.com/v1/gifs/search?q=${inputGif}&api_key=${APIKEY}&limit=5`)
        .then(response => response.json())
        .then(gif =>  {
            console.log(gif)
            const gifArray = gif.data
            console.log(gifArray)
            document.querySelector('.gif').innerHTML=""

            gifArray.forEach(data => {
                let image = document.createElement('img')
                document.querySelector('.gif').appendChild(image)
                image.src = data.images.original.url
            }) 
        }
    )
    .catch(error =>console.log(error))
}


