const joke=document.getElementById("joke");
const jokebtn=document.getElementById("jokebtn");

// function generatejoke(){
// fetch("https://icanhazdadjoke.com",{
//     headers:{'Accept': 'application/json'}
// })


 async function generatejoke(){
    const variab = {
        headers: {
          Accept: 'application/json',
        }
      }
    const res= await fetch("https://icanhazdadjoke.com", variab)
    const data= await res.json()
    // console.log(data);
    joke.innerHTML=data.joke;
}
generatejoke();
jokebtn.addEventListener("click",generatejoke);
