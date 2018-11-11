var chance = 100;
var hp = 50;
var speed = 500;
var resetChance = 10;

function addChild(){
	parent = document.querySelector('#item-wrap');
	child = document.createElement('item');
	child.setAttribute('x',Math.floor(Math.random()*7));
	child.setAttribute('y','-1');
	child.classList.add('fruit');
	if (Math.floor(Math.random()*10) < 8) {
		child.classList.add('cherry');
		child.innerText = "-10";
	} else {
		child.classList.add('banana');
		child.innerText = "20";
	}
	parent.appendChild(child);
}

play = setInterval(function(){
	fruits = document.querySelectorAll('.fruit');
	for (var i = 0 ; i < fruits.length; i++) {
		yNow = parseInt(fruits[i].getAttribute('y'));
		if (yNow < 9) {
			fruits[i].setAttribute('y',yNow+1);
		} else {
			fruits[i].parentNode.removeChild(fruits[i]);
			hp += parseInt(fruits[i].innerText);
			base = document.querySelector(".control");
			base.innerText = "HP : "+hp;
			if (hp <= 0) {
				clearInterval(play);
			}
		}
	};

	isOverap(document.querySelector("#switch"), fruits);

	// Random Create New Fruit
	if (Math.floor(Math.random()*101) <= chance) {
		addChild();
		chance = resetChance;
	} else {
		chance = chance+20;
	}
	
	resetChance = (resetChance+1)%100;

},speed);

function playerMoveLeft() {
	player = document.querySelector("#switch");
	xNow = parseInt(player.getAttribute('x'));
	player.setAttribute('x', Math.max(0, xNow-1));
	isOverap(player, document.querySelectorAll(".fruit"));
}

function playerMoveRight() {
	player = document.querySelector("#switch");
	xNow = parseInt(player.getAttribute('x'));
	player.setAttribute('x', Math.min(xNow+1, 6));
	isOverap(player, document.querySelectorAll(".fruit"));
}

function isOverap(player, fruits) {
	for (var i = 0 ; i < fruits.length; i++) {
		xFruit = parseInt(fruits[i].getAttribute('x'));
		yFruit = parseInt(fruits[i].getAttribute('y'));
		xPlayer = parseInt(player.getAttribute('x'));
		if (yFruit == 9 && xPlayer == xFruit) {
			fruits[i].parentNode.removeChild(fruits[i]);
		}
	}
}

document.addEventListener('keydown', function(event) {
	if (event.keyCode == 37) {
		playerMoveLeft();
	} else if(event.keyCode == 39) {
		playerMoveRight();
	}
})

// โจทย์
// 1. สุ่มว่าจะเป็น cherry หรือ banana
// 2. สุ่มว่าจะเกิดหรือไม่เกิด
// 3. สร้าง class fruit ลงไป และแก้ play ให้เจอ fruit แทน cherry