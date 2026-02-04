function changeColor() {
    // สร้างตัวเลขสุ่มสำหรับรหัสสี Hex
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    // เปลี่ยนสีพื้นหลังของ body
    document.body.style.backgroundColor = randomColor;
}