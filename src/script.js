const registrationForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
// const inputs = document.querySelectorAll("input");

function validateData(input){
    const type = input.target.dataset.type;
    let data = input.target.value;
    if(!validators[type].regex.test(data)){
        input.target.parentElement.children[2].textContent = validators[type].message;
    }
}


const validators = {
  name: {
    regex: /^[A-Za-z ]+$/,
    message: "Wrong name format"
  },
  email: {
    regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: "Invalid email format"
  },
  phone: {
    regex: /^[6-9]\d{9}$/,
    message: "Invalid phone number"
  },
  pincode: {
    regex: /^\d{6}$/,
    message: "Invalid pincode"
  }
};

document.querySelectorAll("input[data-type]").forEach(input=>{
    input.addEventListener("blur",(input)=>{
        validateData(input);

    })
})


