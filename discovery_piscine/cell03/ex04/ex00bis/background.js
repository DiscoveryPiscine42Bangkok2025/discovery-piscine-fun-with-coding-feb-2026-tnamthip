function changeColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    $('body').css('background-color', randomColor); // ใช้ .css() แทนการเข้าถึง style โดยตรง
}

//function changeColor() {
//    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
//    document.body.style.backgroundColor = randomColor;
//}