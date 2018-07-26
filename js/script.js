var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var main = document.getElementById("main");
var myList = document.getElementById("list");
var ul = document.getElementsByTagName("ul");
var story = myList.getElementsByClassName("item");
var popup = document.getElementsByClassName("popup")[0];
var close = document.querySelector(".close");


console.log(btn1);
console.log(btn2);
console.log(ul);
console.log(story);

function addItem(){
	var newLi = document.createElement("li");
	newLi.innerHTML = "Новая задача!";
	newLi.className = "item";
	myList.appendChild(newLi)
	popup.style.display = "none";
}
function delItem(){
	myList.removeChild(story[0]);

	if(story.length == 0){
		popup.style.display = "block";
	}
}

function closepopup(){
	popup.style.display = "none";
}

btn1.addEventListener("click", addItem);
btn2.addEventListener("click", delItem);
close.addEventListener("click", closepopup);

// hard

var name = prompt('Введите свое имя'); 
var age = prompt('Введите свой возраст');

if (parseInt(age) >= 18) {
 var isSubscribed = confirm('Подписаны ли вы на рассылку?');

 if (isSubscribed) {
  success();
 } else {
  alert(name + ', извините. По условиям нашего сайта - доступ разрешён при наличии подписки на наш сайт.');
 }
} else {
 alert(name + ', извините. По условиям нашего сайта - доступ разрешён с 18 лет.');
}

function success() {
 alert(name + ', спасибо за терпение. Добро пожаловать!');
}