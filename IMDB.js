async function getImdb(){
    let title = document.getElementById("input").value
    try{

        let a = await fetch(`https://www.omdbapi.com/?apikey=54e125f9&t=${title}`);
        let data = await a.json()
        console.log(data);
        displayMovie(data)
    }
    catch(rej){
        console.log('Some err is there in fetching...');
    }

}
//getImdb()

function displayMovie(data){
    document.querySelector('#container').innerHTML=null

    let title = document.createElement('h1');
    title.textContent= `Movie name : ${data.Title}`
    let plot = document.createElement('h2');
    plot.textContent= data.Plot
    let year = document.createElement('h4');
    year.textContent= `Publish Year : ${data.Year}`
    // let email= document.createElement('h4');
    // email.textContent = `email : ${data.data.email}`
    let poster = document.createElement('img');
    poster.src = data.Poster;
    
    let div=document.createElement('div');
    div.append(title,poster,year,plot);
    document.querySelector('#container').append(div)

}