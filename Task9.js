fetch("https://fakestoreapi.com/products").then((rawData)=>{

    return rawData.json();
    
}).then((pureJs)=>{
    
    pureJs.forEach((c,i,t)=>{
        let div=document.querySelector("div");
        let newDiv=document.createElement("div")
        newDiv.innerHTML=`<img src="${c.image}"/> <h1>${c.title.slice(0,50)}</h1> <h3>price:-${c.price}</h3> <h3>${c.category}</h3> <h4>${c.rating}</h4> <button class="btn">Add to cart</button>`
        div.append(newDiv);

    })
    pureJs.filter((c,i,t)=>{
        let h2=document.querySelector("h2");
        h2.textContent=c.title
    })
}).catch((error)=>{
    let error1=document.querySelector(".error1");
    let div=document.querySelector("div");
    div.style.height="0px";
    error1.innerHTML=error;

})
