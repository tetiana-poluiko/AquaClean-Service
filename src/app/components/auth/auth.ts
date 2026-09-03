import { Component } from '@angular/core';
import { supabase } from '../../supabase';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  imports: [FormsModule],
  templateUrl: './auth.html',
  styleUrl: './auth.scss',
})
export class AuthComponent {
// Переменные для привязки полей формы
AnmeldungWahl : boolean = true;
userData: any[] = [];
loginVal: string = '';
passwordVal: string = '';
emailVal: string = '';
showSuccessModal: boolean = false; // Содержание этой переменной прописано в HTML-шаблоне
//Переменная для управления показом окна
showErrorModal: boolean = false;
// Добавление нового пользователя в БД
async onRegister() {
const { data, error } = await supabase
//Проверка: существует ли такой пользователь
.from('users_AquaClean')
.select('*')
.eq('login', this.loginVal)
   if (error) { //если пропадет интернет или будет др техн сбой
      console.error('Fehler bei der Registrierung:', error.message);
      alert('Fehler bei der Registrierung');
      return;
    } else if (data&& data.length>0){ //Если ответ на запрос select пришел не пустой, а со строкой данных пользователя 
          this.showErrorModal = true;
          return;
        } else {
                const { data, error } = await supabase
                .from('users_AquaClean')
                .insert([
                    { 
                     login: this.loginVal, 
                     password: this.passwordVal, 
                     email: this.emailVal   
                    }
                  ]);
                if (error) { //если пропадет интернет или будет др техн сбой
                  console.error('Fehler beim Speichern:', error.message);
                  alert('Fehler beim Speichern des Benutzers');
                  return;
                  }
                this.showSuccessModal = true;
              }                    
}
async onAnmeldung() {
const { data, error } = await supabase
.from('users_AquaClean')
.select('*')
.eq('login', this.loginVal)
.eq('password', this.passwordVal)
this.userData = data;
alert('Hallo ' + data[0].login);
localStorage.setItem('userName', this.userData[0].login);
}

// Функция закрытия окна по кнопке «ОК»
closeModal() {
  this.showSuccessModal = false;
  this.showErrorModal = false;
  // Здесь можно очистить форму или сделать перенаправление 
}
}


