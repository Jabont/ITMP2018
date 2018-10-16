function addChild(){
	parent = document.querySelector('#item-wrap');
	child = document.createElement('item');
	child.setAttribute('x','3');
	child.setAttribute('y','-1');
	child.classList.add('cherry');
	parent.appendChild(child);
}

play = setInterval(function(){
	cherry = document.querySelectorAll('.cherry');
	for (var i = 0 ; i < cherry.length; i++) {
		yNow = parseInt(cherry[i].getAttribute('y'));
		cherry[i].setAttribute('y',yNow+1);
	};
	
},1000);

// โจทย์
// 1. สุ่มว่าจะเป็น cherry หรือ banana
// 2. สุ่มว่าจะเกิดหรือไม่เกิด
// 3. สร้าง class fruit ลงไป และแก้ play ให้เจอ fruit แทน cherry