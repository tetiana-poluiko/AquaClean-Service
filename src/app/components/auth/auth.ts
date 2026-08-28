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
loginVal: string = '';
passwordVal: string = '';
emailVal: string = '';
showSuccessModal: boolean = false; // Переменная для управления показом окна

// Функция отправки данных
async onRegister() {
const { data, error } = await supabase
.from('users_AquaClean')
.insert([
{ 
login: this.loginVal, 
password: this.passwordVal, 
email: this.emailVal 
}
]);

if (error) {
console.error('Fehler bei der Registrierung:', error.message);
alert('Fehler bei der Registrierung');
} else {
    // Включаем показ нашего модального окна вместо alert()
     this.showSuccessModal = true;
          //console.log('Erfolgreich gespeichert:', data);
          //alert('Die Registrierung war erfolgreich!');
}
}
// Функция закрытия окна по кнопке «ОК»
closeModal() {
  this.showSuccessModal = false;
  // Здесь можно очистить форму или сделать перенаправление
}
}


