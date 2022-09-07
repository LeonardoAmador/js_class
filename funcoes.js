function diga_oi(){
    console.log("OI!");
}

function diga_oi_para(nome){
    console.log(`OI, ${nome}!`);
}

diga_oi_para("Leonardo");
setInterval(()=>{
    diga_oi_para("Joao");
},5000);

setInterval(()=>{
    diga_oi_para("Cigarro")
}, 40);