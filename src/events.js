/* eslint-disable class-methods-use-this */

export default class Event {
  // toggleMenuButton() {
  //   const simpleBarElement = document.getElementsByClassName('js-simplebar')[0];

  //   if (simpleBarElement) {
  //     const sidebarElement = document.getElementsByClassName('sidebar')[0];
  //     const sidebarToggleElement = document.getElementsByClassName('sidebar-toggle')[0];

  //     sidebarToggleElement.addEventListener('click', () => {
  //       sidebarElement.classList.toggle('collapsed');
  //     });
  //   }
  //   const dropdown = document.querySelector('.nav-item.dropdown');

  //   dropdown.addEventListener('mousemove', () => {
  //     const menu = document.querySelector('.dropdown-menu.dropdown-menu-right');
  //     menu.classList.add('show');
  //     menu.addEventListener('mouseleave', () => {
  //       const menuDrop = document.querySelector('.dropdown-menu.dropdown-menu-right');
  //       menuDrop.classList.remove('show');
  //     });
  //   });
  // }

  // dropdownMenu() {
  //   const dropdown = document.querySelector('.nav-item.dropdown');

  //   dropdown.addEventListener('mousemove', () => {
  //     const menu = document.querySelector('.dropdown-menu.dropdown-menu-right');
  //     menu.classList.add('show');
  //     menu.addEventListener('mouseleave', () => {
  //       const menuDrop = document.querySelector('.dropdown-menu.dropdown-menu-right');
  //       menuDrop.classList.remove('show');
  //     });
  //   });
  // }

  printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
  }

  ruleValidSignUp() {
    document.querySelector('#registration-btn-regForm').addEventListener('click', () => {
      const firstName = document.querySelector('#user-name').value;
      const secondName = document.querySelector('#user-surname').value;
      const email = document.querySelector('#login-reg-form').value;
      const pass = document.querySelector('#password-reg-form').value;
      // Defining error variables with a default value
      let passErr;
      let emailErr;
      let fioErr;
      let infoErr;

      // Validate password
      if (pass === '') {
        this.printError('passErr', 'Введите пароль');
      } else {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        if (regex.test(pass) === false) {
          this.printError(
            'passErr',
            'Введите пароль, соответствующий правилам: минимум - 6 знаков, одна заглавная буква, одна строчная буква'
          );
        } else {
          this.printError('passErr', '');
          passErr = false;
        }
      }
      // Validate FirstName
      if (firstName === '') {
        this.printError('fioErr', 'Введите Ваше Имя');
      } else {
        const regex = /^[А-ЯA-Z][а-яa-zА-ЯA-Z\-]{0,}\s[А-ЯA-Z][а-яa-zА-ЯA-Z\-]{1,}(\s[А-ЯA-Z][а-яa-zА-ЯA-Z\-]{1,})?$/;
        if (regex.test(firstName) === false) {
          this.printError('fioErr', 'Введите Имя, соответствующее правилам: Имя с большой буквы');
        } else {
          this.printError('fioErr', '');
          fioErr = false;
        }
      }
      // Validate secondName
      if (secondName === '') {
        this.printError('infoErr', 'Введите Фамилию');
      } else {
        return false;
      }

      // Validate email address
      if (email === '') {
        this.printError('emailErr', 'Введите электронную почту');
      } else {
        // Regular expression for basic email validation
        const regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
          this.printError('emailErr', 'Введите почту, соответствующую правилам: name@example.com');
        } else {
          this.printError('emailErr', '');
          emailErr = false;
        }
      }
      if ((passErr || emailErr || fioErr || infoErr) === true) {
        return false;
      }
    });
  }

  ruleValidLogin() {
    document.querySelector('#login-btn').addEventListener('click', () => {
      const email = document.querySelector('#login').value;
      const pass = document.querySelector('#password').value;
      // Defining error variables with a default value
      let passErr;
      let emailErr;

      // Validate password
      if (pass === '') {
        this.printError('passErr', 'Введите пароль');
      } else {
        return false;
      }

      // Validate email address
      if (email === '') {
        this.printError('emailErr', 'Введите почту');
      } else {
        // Regular expression for basic email validation
        const regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
          this.printError('emailErr', 'Введите почту, соответствующую правилам: example@mail.com');
        } else {
          this.printError('emailErr', '');
          emailErr = false;
        }
      }
      if ((passErr || emailErr) === true) {
        return false;
      }
    });
  }

  renderValidSignUp() {
    this.ruleValidSignUp();
  }

  renderValidLogin() {
    this.ruleValidLogin();
  }

  // renderDrop() {
  //   this.dropdownMenu();
  // }

  // renderToggle() {
  //   this.toggleMenuButton();
  // }

  // focus() {
  //   const login = document.querySelector('#loginClick');
  //   login.addEventListener('click', () => {
  //     document.querySelector('#cardFocus').focus();
  //   });
  // }

  // renderFocus() {
  //   this.focus();
  // }
}
