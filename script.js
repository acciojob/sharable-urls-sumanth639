// your code here

let button=document.getElementById('button')
let url=document.getElementById('url')





function getURL(){

	let name=document.getElementById('name').value.trim()
    let year=document.getElementById('year').value.trim()

	let baseURL = "https://localhost:8080/";

	if(name||year){
		baseURL+='?'

		if(name) baseURL+=`name=${name}`
		if(name && year) baseURL+=`&year=${year}`
		if(!name && year) baseURL+=`year=${year}`
	}

	url.innerText=baseURL;
	
  
}


button.addEventListener('click',getURL)









