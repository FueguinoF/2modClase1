const emailContraints = {
    email: {
      email:true
    }
  }
  
function formValidate(){

    let { nombre,apellido,dni,email,telefono } = form;
    let valid = true;
    
    if(nombre.value.length < 3 || !(isNaN(nombre.value))){
      nombre.classList.add('invalid')
      valid = false;
    } else {
      nombre.classList.remove('invalid');
    }

    if(apellido.value.length < 3 || !(isNaN(apellido.value))){
      apellido.classList.add('invalid')
      valid = false;
    } else {
      apellido.classList.remove('invalid');
    }
  
  
    if(dni.value.length < 7 || dni.value.length > 8){
      dni.classList.add('invalid')
      valid = false;
    } else {
      dni.classList.remove('invalid');
    }
  
    let invalidEmail = validate({email:email.value},emailContraints,{format:'grouped'});
    
    if(invalidEmail){
      email.classList.add('invalid')
      valid = false;
    } else {
      email.classList.remove('invalid');
    }
    
    if(telefono.value.length < 8){
      telefono.classList.add('invalid')
      valid = false;
    } else {
      telefono.classList.remove('invalid');
    }
  
    if(!valid)
      return false;
  
    return true;
}

const form = document.getElementById('frmcontacto');

form.addEventListener('submit',(event) => {
    event.preventDefault();
    console.log("netra")
    console.log(form)
    if(!formValidate()){
      return;
    }
})


let seguro = document.getElementById("seguro");
let valorseguro = document.getElementById("valorseguro");

/*
const valores = ["$500","$1000","$1500"]

seguro.addEventListener("change", function(a) {
    let pos = a.target.selectedIndex;
    valorseguro.innerText = `${seguro.value}: ${valores[pos]}`
    
})
Esto fue una primera versión pero me había complicado sin sentido*/


seguro.addEventListener("change", (a)=>{
    valorseguro.innerText = `${seguro.value}`
})
