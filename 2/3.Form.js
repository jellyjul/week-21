const button = document.getElementById("submit")

function formValidation() {
    const idname =  document.getElementById('name')
    const surname = document.getElementById('surname')
    const number = document.getElementById('number')
    const email = document.getElementById('email')
    const country = document.getElementById('select')
    const pass = document.getElementById('password')


    if (allLetter(idname)){
        if (allLetter(surname)){
            if (validateEmail(email)){
                if (validateTelNumber(number)){
                    if (countrySelect(country)){
                        if (validatePassword(pass,7,12)){
                        }
                    }
                }
            }
        }
    }
        return false;
        
    
    
    function allLetter(idname){ 
        let nameAfter = document.querySelector('.registration-form__name-surname')
        let removed = document.querySelector('.red')
        if (document.querySelector('.red')){
            console.log(removed)
            nameAfter.removeChild(removed)
        }

        const letters = /^[А-яЁё ]/;
        if(idname.value.match(letters)){
            return true;
        }
        else {
            let newElement = document.createElement('p')
            newElement.classList.add('red')
            newElement.textContent = "Ваше имя и фамилия должны содержать только русские буквы!"
            nameAfter.appendChild(newElement);
            idname.focus();
            return false;
        }
    }

    function validateEmail(email){
        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(email.value.match(mailformat)){
            return true;
        }
        else {
            alert("Ваша электронная почта введена неверно!");
            email.focus();
            return false;
        }
    }
    function validateTelNumber(number){ 
        const numberFormat = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
        if(number.value.match(numberFormat)){
            return true;
        }
        else {
            alert('Ваш номер телефона введен неверно!');
            number.focus();
            return false;
        }
    }
    function countrySelect(country){
        if(country.value === "Default"){
            alert('Выберит страну из списка');
            country.focus();
            return false;
        }
        else{
            return true;
        }
    }
    function validatePassword(pass,mx,my){
        const passLength = pass.value.length;
        if (passLength == 0 ||passLength >= my || passLength < mx){
            alert("Пароль не может быть пустым / длина от"+mx+" до "+my);
            pass.focus();
            return false;
        }

    else {
        let user = {
            userName : idname.value,
            userSurname :surname.value,
            userEmail: number.value,
            userNumber : number.value,
            userCountry : country.value,
            userPass : pass.value
            }
            console.log(user)

        fetch('https://httpbin.org/post ', {
        method: 'POST',
        headers: {
            "Content-Type" : "application/json;charset=utf-8"
        },
        body: JSON.stringify(user)
        })
.then(response => response.JSON())
.then(user => console.log(user))


        alert(`${idname.value}, Форма успешна отправлена!`);

        return true;
    }
}
}

button.addEventListener('click', (event) => {
    event.preventDefault();
    formValidation()
  })