const form = document.getElementById("form");
const username=document.getElementById("username");
const Email=document.getElementById("Email");
const password=document.getElementById("password");
const Cpassword=document.getElementById("confirm-password");
const submit=document.getElementById("btn");
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();

})
const validateInputs= ()=>{
    const usernameValue=username.value.trim();
    const EmailValue=Email.value.trim();
    const passwordValue=password.value.trim();
    const CpasswordValue=Cpassword.value.trim();
    if(usernameValue=== ''){
        setError(username,'username is require');
    }
        else{
            setSuccess(username);
        }
        if(passwordValue === ''){
            setError(password , 'password is required');
        }
        else if (passwordValue.length <8){
            setError(password,'password must be at least  8 character.')
        }
        else {
            setSuccess(password);
        }

        if(CpasswordValue===''){
            setError(Cpassword,'please confirm your password');
        }
        else if (CpasswordValue !==
            passwordValue){
                setError(password,"password doestn match");
            }
            else{
                setSuccess(Cpassword);
            }
}
const setError = (element,message)=>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.
    querySelector('.error');
    errorDisplay.innerText = 'please require ';

    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}
const setSuccess = element =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector
    ('.error');


    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}