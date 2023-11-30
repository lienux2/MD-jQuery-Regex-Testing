import $ from 'jquery';
import { nameValidation } from './utils/nameValidation/nameValidation';
import { emailValidation } from './utils/emailValidation/emailValidation';
import { passwordValidation } from './utils/passwordValidation/passwordValidation';

$('.js-wrapper').css({
    'display': 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    'width': '100vw',
    'height': '100vh',
    'margin': '0',
})
    .html(`
    <form class="js-form">
        <h1 class="form__heading">Login Form</h1>
        <div class="form__container">
        <hr/>
        <div class="form__content">
          <label for="name"><strong>Username</strong></label>
          <input class="js-form__input js-name" type="text" placeholder="Enter Username" name="name">
          <label for="email"><strong>Email</strong></label>
          <input class="js-form__input js-email" type="text" placeholder="Enter Email" name="email">
          <label for="password"><strong>Password</strong></label>
          <input class="js-form__input js-password" type="password" placeholder="Enter Password" name="password">
        </div>
        <button class="form__button" type="submit">Login</button>
      </form>
`);

$('.js-form').css({
    'border': '5px solid #f1f1f1',
    'padding': '20px',
    'box-sizing': 'border-box',
    'background-color': 'white',
})

$('.form__heading').css({
    'text-align': 'center',
    'font-size': '28px',
})

$('.form__container').css({
    'text-align': 'left',
    'margin': '24px 50px 12px',
})

$('.form__content').css({
    'padding': '16px 0',
    'text-align': 'left',
})

$('.js-form__input').css({
    'width': '100%',
    'padding': '16px 8px',
    'margin': '8px 0',
    'display': 'inline-block',
    'border': '1px solid #ccc',
    'box-sizing': 'border-box',
})

$('.form__button').css({
    'background-color': '#8ebf42',
    'color': 'white',
    'padding': '14px 0',
    'margin': '10px 0',
    'border': 'none',
    'border-radius': '12px',
    'cursor': 'pointer',
    'width': '100%',
})

$('.js-form').on('submit', (event) => {
    event.preventDefault();

    const name: string = $('.js-name').val() as string;
    const email: string = $('.js-email').val() as string;
    const password: string = $('.js-password').val() as string;

    if (name == '' && email == '' && password == '') {
        showToast("There is no username, email and password entered")
    } else if (name == '') {
        showToast("You have to enter username")
    } else if (email == '') {
        showToast("You have to enter email")
    } else if (password == '') {
        showToast("You have to enter password")
    }

    const nameIsValid = nameValidation(name);
    const emailIsValid = emailValidation(email);
    const passwordIsValid = passwordValidation(password);

    console.log(nameIsValid);

    if (nameIsValid && emailIsValid && passwordIsValid) {
        showToast("Form has been submited")
    } else if (!nameIsValid && name != '') {
        showToast("Username must contain from 2 to 50 characters. Letters only!")
    } else if (!emailIsValid && email != '') {
        showToast("Email must be valid format (example@example.com)")
    } else if (!passwordIsValid && password != '') {
        showToast("Password must be at least 8 characters long, must consist of at least 1 special character (!, @, #, $, %, ^, &, *) and at least 1 number.")
    }
});

const showToast = (message: string) => {
    // @ts-ignore
    window.Toastify({
        text: message,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
            background: "#2B2A4C",
            color: "#fff",

        },
        onClick: function () { }
    }).showToast();
}