/*----------------Bài 1----------------*/
/*
1/Xác định đầu vào:
+ Lương 1 ngày: 100.000
+ Số ngày làm
+ Tiền lương

2/Bước xử lí:
+ Tiền lương = lương 1 ngày * số ngày làm

3/ In kết quả ra màn hình */

function handleResult() {
var luongNgay = 100000;
var ngayLam = document.getElementById("ngaylam").value;
console.log("Ngày làm:", ngayLam);
var tienLuong;

tienLuong = luongNgay * ngayLam;
tienLuong = tienLuong.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});

console.log("Tiền lương :", tienLuong);


document.getElementById("result").innerHTML =
"<p>" + "Tiền lương : " + tienLuong + "</p>";

document.getElementById("result").classList.add("result");
}
/*----------------Bài 2----------------*/
/*
1/Xác định đầu vào:
+ 5 số thực n1,n2,...n5
+ Biến chứa kết quả giá trị trung bình

2/Bước xử lí:
+ Giá trị trung bình = tổng 5 số thực / 5

3/ In kết quả ra màn hình */

function handleResult2() {
var number1 = document.getElementById("number1").value * 1;
console.log("number1 :", number1);
var number2 = document.getElementById("number2").value * 1;
console.log("number2 :", number2);
var number3 = document.getElementById("number3").value * 1;
console.log("number3 :", number3);
var number4 = document.getElementById("number4").value * 1;
console.log("number4 :", number4);
var number5 = document.getElementById("number5").value * 1;
console.log("number5 :", number5);
var giaTriTrungBinh;

giaTriTrungBinh = (number1 + number2 + number3 + number4 + number5) / 5;

console.log("Giá trị trung bình :", giaTriTrungBinh);

document.getElementById("result2").innerHTML =
"<p>" + "Giá trị trung bình : " + giaTriTrungBinh + "</p>";

document.getElementById("result2").classList.add("result");
}

/*----------------Bài 3----------------*/
/*
1/Xác định đầu vào:
+ Giá USD : 23.500
+ Số USD
+ Biến chứa số tiền sau khi qui dổi

2/Bước xử lí:
+ Số tiền sau khi qui đổi = số USD * giá USD

3/ In kết quả ra màn hình */

function handleResult3() {
var giaUSD = 23500;
var soUSD = document.getElementById("soUSD").value;
var ketQua;

ketQua = giaUSD * soUSD;
ketQua = ketQua.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});

console.log("Số tiền sau khi quy đổi :", ketQua);

document.getElementById("result3").innerHTML =
"<p>" + "Giá trị quy đổi sang VND : " + ketQua + "</p>";

document.getElementById("result3").classList.add("result");
}

/*----------------Bài 4----------------*/
/*
1/Xác định đầu vào:
+ Chiều dài
+ Chiều rộng
+ Diện tích
+ Chu vi

2/Bước xử lí:
+ Diện tích = chiều dài * chiều rộng
+ Chu vi = (chiều dài + chiều rộng) * 2

3/ In kết quả ra màn hình */

function handleResult4() {
var chieuDai = document.getElementById("chieuDai").value * 1;
var chieuRong = document.getElementById("chieuRong").value * 1;
var dienTich;
var chuVi;

dienTich = chieuDai * chieuRong;
chuVi = (chieuDai + chieuRong) * 2;

console.log("Diện tích :", dienTich);
console.log("Chu vi :", chuVi);

document.getElementById("result4").innerHTML =
"<p>" + "Diện tích : " + dienTich + "</p>" + "<p>" + "Chu vi : " + chuVi + "</p>"
;

document.getElementById("result4").classList.add("result");}

/*----------------Bài 5----------------*/
/*
1/Xác định đầu vào:
+ Số có 2 chữ số 
+ Biến tổng và biến 2 ký số

2/Bước xử lí:
+ Xác định ký số hàng chục
+ Xác định ký số hàng đơn vị
+ Tổng 2 ký số

3/ In kết quả ra màn hình */

function handleResult5() {
var number = document.getElementById("number").value;
var hangChuc = Math.floor(number / 10);
var hangDonVi = Math.floor(number % 10);
var sum;

sum = hangChuc + hangDonVi;

console.log("Tổng 2 ký số :", sum);

document.getElementById("result5").innerHTML =
"<p>" + "Tổng 2 ký số : " + sum + "</p>"
;

document.getElementById("result5").classList.add("result");}