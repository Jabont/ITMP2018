function addChild(){
	var myArray = ["cherry","banana","free"];
	var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
	parent = document.querySelector('#item-wrap');
	child = document.createElement('item');
	child.setAttribute('x','3');
	child.setAttribute('y','-1');
	child.classList.add(randomItem);
	parent.appendChild(child);
	console.log(randomItem);
}
play = setInterval(function(){
	var myArray = ["cherry","banana","free"];
	for(i=0;i<myArray.length;i++){
		fruit = document.querySelectorAll('.'+myArray[i]);
		for (var j = 0 ; j < fruit.length; j++) {
			yNow = parseInt(fruit[j].getAttribute('y'));
			fruit[j].setAttribute('y',yNow+1);
		};
	}
},1000);

// โจทย์
// 1. สุ่มว่าจะเป็น cherry หรือ banana
// 2. สุ่มว่าจะเกิดหรือไม่เกิด
// 3. สร้าง class fruit ลงไป และแก้ play ให้เจอ fruit แทน cherry