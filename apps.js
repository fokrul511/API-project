const displycollaction=()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>displytext(data))
}
displycollaction();
const displytext=(data)=>{
    const DataCollaction=data;
    const mydiv=document.getElementById("collection-id");
    for(const userText of DataCollaction ){
        const div=document.createElement("div");
        div.classList="col-md-4 p-3 bg-success border text-white shadow"
        
        div.innerHTML=` 
        <div>
            <h6>ID:${userText.id}</h6>
            <h6>Name :${userText.name}</h6>
            <h6>UserName :${userText.username}</h6>
            <h6>Email :${userText.email}</h6>
            <h6>Address :${userText.address}</h6>
        </div>`
        mydiv.appendChild(div)
    }
}

