const generate = (passwordLength, includeLower, includeUpper, includeNumber, includeSymbols) => {

    const passLower = "abcdefghijklmnopqrstuvwxyz";
    const passUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passNumber = "0123456789";
    const passSymbols = "+-*/=<>%"

    let allowPass = '';
    let password = '';

    allowPass += includeLower ? passLower : '' ;
    allowPass += includeUpper ? passUpper : '' ;
    allowPass += includeNumber ? passNumber : '' ;
    allowPass += includeSymbols ? passSymbols : '' ;


    if (passwordLength <= 0){
        return (`Please enter valid Password length which is atleast 1.`)
    };

    if (allowPass === ''){
        return (`Please turn on atleast 1 password feature`);
    }

    for(i = 1; i <= passwordLength; i++){
        let randomIndex = Math.floor(Math.random() * allowPass.length);
        password += allowPass[randomIndex];
    }

    return password;



}


const passwordLength = 10;
const includeUpper = true;
const includeLower = true;
const includeNumber = true;
const includeSymbols = true;


const password = generate(passwordLength, includeLower, includeUpper, includeNumber, includeSymbols);


console.log(`Generated Email: ${password}@gmail.com`);
console.log(`Generated Password: ${password}`);
