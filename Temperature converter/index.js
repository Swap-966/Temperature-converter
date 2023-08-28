let cels=document.getElementById('cel')
let fahr=document.getElementById('fah')
cels.addEventListener('input',function(){
    let c=cels.value
    let f=9/5*c +32
    fahr.value=f
})
fahr.addEventListener('input',function(){
    let f=fahr.value
    let c=5*(f-32)/9
    cels.value=c
})
