const valores = ["$500","$1000","$1500"]

let seguro = document.getElementById("seguro")
let valorseguro = document.getElementById("valorseguro")

seguro.addEventListener("change", function(a) {
    let pos = a.target.selectedIndex;
    valorseguro.innerText = `${seguro.value}: ${valores[pos]}`
    
})








/*
validate.extend(validate.validators.datetime, {
        parse: function(value, options) {
          return +moment.utc(value);
        },
        format: function(value, options) {
          var format = options.dateOnly ? "YYYY-MM-DD" : "YYYY-MM-DD hh:mm:ss";
          return moment.utc(value).format(format);
        }
});

var constraints = {
    nombre:{
        presence: true,
        format: {
            pattern: "[a-z]",
            message: "Debe introducir un nombre válido"
        }
    },
    apellido:{
        presence: true,
        format: {
            pattern: "[a-z]",
            message: "Debe introducir un nombre válido"
        }
    },
    dni: {
        presence: true,
        length: {
            minimum: 7,
            maximum: 8,
            message: "Debe introducir un número valido de 7 a 8 dígitos"
        },
        format:{
            pattern: "[0-9]",
            message: "El valor debe ser numérico"
        }
    },
    email: {
      presence: true,
      email: true
    },
    telefono: {
        presence: true,
        length: {
            minimum: 8,
            maximum: 12,
            message: "Debe introducir un número valido de 8 a 12 dígitos"
        },
        format:{
            pattern: "[0-9]",
            message: "El valor debe ser numérico"
        }
    }
}

let enviar = document.getElementById("enviar")
let frmcontacto = document.getElementsByName("frmcontacto")
console.log(frmcontacto)


enviar.addEventListener("click" , function(){
    //validate(frmcontacto,constraints)
    var errors = validate(frmcontacto, constraints);
    // then we update the form to reflect the results
    showErrors(frmcontacto, errors || {});
    if (!errors) {
      showSuccess();
    }
})

// Updates the inputs with the validation errors
function showErrors(frmcontacto, errors) {
    // We loop through all the inputs and show the errors for that input
    (frmcontacto.querySelectorAll("input[name], select[name]"), function(input) {
      // Since the errors can be null if no errors were found we need to handle
      // that
      showErrorsForInput(input, errors && errors[input.name]);
    });
  }
*/