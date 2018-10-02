b = document.querySelectorAll('div');
for (i = 0; i<b.length; i++) {
    color = 275;
    //320 คือระยะห่างจากม่วงไปแดง
    h_num = (320/b.length)-1;
    color_hsl = color-(h_num*i);
    b[i].style.background = "hsl("+color_hsl+",100%,80%)"
};

card = document.querySelectorAll('.card');
card_round = card[0].getAttribute('round');
card[0].style.borderRadius = ""+card_round+"px";