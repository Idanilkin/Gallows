"use strict";/*	Директива "use strict" переключает движок в «современный» режим, изменяя поведение некоторых 
встроенных функций. */
let secret_words = ["ложка", "программа", "текст", "компьютер", "шоколад", "зарядка", "ключ","лампа","стол" , "ручка","книга"];
let win_button = document.querySelector(".win button");
let fail_button = document.querySelector(".fail button");
let win = document.querySelector(".win");
let fail = document.querySelector(".fail");
let count_images = 1;
let lives = 6;/*объявить переменную lives и задать значение 6 */
let secret = "голова";/*объявить переменную secret и задать значение голова*/
let word = document.querySelector(".word");/*объявить переменную word и задать значение найденного селектора с классом word */
let text_lives = document.querySelector(".picture_text span");/*объявить переменную text_lives и задать значение найденного селектора с классом picture_text span */
let alphabet = document.querySelectorAll(".letters button");
let right_answer = 0;
let image = document.querySelector(".picture img");
let no_letter = true;/*объявить переменную no_letter и задать значение true */
function get_random(max){
	return Math.floor(Math.random()*max);
}
function new_game(){
lives = 6;
word.innerHTML = ""; /*внутрь содержимого HTML кода элемента с классом word поставить ничего */
text_lives.innerText = lives;/*внутрь содержимого текста элемента с классом text_lives поставить значение переменной lives*/
for (let i = 0;i<secret.length;i++)/*цикл : объявить переменную i и задать значение 0 ; в цикле повторяются следующие действия : если i < длины слова , внутрь содержимого HTML кода добавить div с классом letter, к i прибавить 1 */
{
	word.innerHTML = word.innerHTML + "<div class='letter'></div>";
}
}
secret = secret_words[get_random(secret_words.length)];
new_game();
let letter =  document.querySelectorAll(".letter");/*объявить переменную letter и задать значение найденного селектора с классом letter */
let buttons = document.querySelector(".letters");/*объявить переменную buttons и задать значение найденного селектора с классом letters */
 buttons.onclick = function(event) {/*при нажатии на div c кнопками выполнить функцию */
 	let target = event.target;/*объявить переменную target и задать значение элемента , на который мы нажали */
 	
 	if (target.tagName!="BUTTON") {
 		return;/*если элемент , на который мы нажали не является  кнопой , прекратить действие функции*/
 	}
 	target.disabled = true;
 	no_letter = true;/* задать переменной no_letter значение true*/
 	for (let i = 0;i<secret.length;i++) {
      	if (target.innerHTML.toLowerCase() == secret[i].toLowerCase()){
 			letter[i].innerHTML = target.innerHTML;
 			no_letter = false ;/* задать переменной no_letter значение false*/
 			right_answer++;	
 		}	
 		
 	}
 	if (no_letter) {
 			lives = lives-1;
 			text_lives.innerText = lives;
 			image.src = `Images/${++count_images}_kadr.png`;

 			 if (lives == 0){
			for (let i = 0; i < alphabet.length; i++) {
				alphabet[i].disabled = true;
			} 
			document.querySelector(".fail p span").innerHTML = secret;
			fail.style.display = "block";
		}
 	}
 	if (right_answer == secret.length) {
 		for (let i = 0; i < alphabet.length; i++) {
 			alphabet[i].disabled = true;
 		}
 		document.querySelector(".win p span").innerHTML = secret;
 		win.style.display = "block";
 	}
 };
         win_button.onclick = function(){
        	win.style.display = "none";
        	for (let i = 0; i < alphabet.length; i++) {
 			alphabet[i].disabled = false; 
 		}

 		new_game();
 		letter =  document.querySelectorAll(".letter");	
 		image.src = "Images/1_kadr.png";
 		right_answer = 0;
 		count_images = 1;
    };
    fail_button.onclick = function(){
    	fail.style.display = "none";
    		for (let i = 0; i < alphabet.length; i++) {
 			alphabet[i].disabled = false; 
 		}

 		new_game();
 		letter =  document.querySelectorAll(".letter");	
 		image.src = "Images/1_kadr.png";
 		right_answer = 0;
 		count_images = 1;
    }