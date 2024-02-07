let correctEmail='masangalincoln@gmail.com';
let correctpassword='22u4491eve@2024';

let email=prompt("Enter your email");
let password=prompt("Enter your password");

function loginCredentials(enterEmail, enterPassword){
    if (enterEmail===correctEmail && enterPassword===correctpassword){
        console.log(`Your email: ${email}, login was sucessful!`);
    }
    else{
        console.log(`Your email or password are invalid, login unsucessful`);
    }
}
loginCredentials(email,password);
