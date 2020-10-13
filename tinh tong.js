
function tinhtong() {
    let a = Number(document.getElementById('a').value);
    console.log(a)
    let b = Number(document.getElementById('b').value);
    let tong =  a + b;
    console.log(tong)
    document.getElementById("tong").innerText = tong;
    ;
}
