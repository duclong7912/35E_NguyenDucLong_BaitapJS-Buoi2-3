                 // Bài tập 1

//      - Tính tiền lương nhân viên

document.getElementById("btnTinhLuong").onclick = function() {

// - Đầu vào:

var luongNgay = document.getElementById("luongNgay").value * 1;
var soNgayLam = document.getElementById("soNgayLam").value * 1;

// - Xử lý:

var tongLuong = luongNgay * soNgayLam;
var currentFormat = new Intl.NumberFormat("VN-vn");

var ketQua = "Tổng lương nhận được là: " + currentFormat.format(tongLuong) + 'đ';
//  - Đầu ra:

document.getElementById("showLuong").innerHTML = ketQua;
}

                    // Bài tập 2

//         - Tính giá trị trung bình

document.getElementById("tinhTrungBinh").onclick = function(){

//   - Đầu vào:

var number1 = document.getElementById("number1").value * 1;
var number2 = document.getElementById("number2").value * 1;
var number3 = document.getElementById("number3").value * 1;
var number4 = document.getElementById("number4").value * 1;
var number5 = document.getElementById("number5").value * 1;

// - Xử lý:

var tongTrungBinh = (number1 + number2 + number3 + number4 + number5) / 5;

var ketQua = "Tổng trung bình là: " + tongTrungBinh ;

// - Đầu ra:

document.getElementById("showTrungBinh").innerHTML = ketQua;
} 

                    // Bài tập 3

//          - Quy đổi tiền

document.getElementById("btnQuyDoi").onclick = function() {
    
// - Đầu vào:

const giaUSD = 23500;
var soUSD = document.getElementById("soUSD").value;

// - Xử lý:

var tongTien = giaUSD * soUSD;
var currentFormat = new Intl.NumberFormat("VN-vn");

var ketQua = "Số tiền nhận được là: " + currentFormat.format(tongTien) +"đ";

// - Đầu ra:

document.getElementById("showTien").innerHTML = ketQua;

}
                    // Bài tập 4

//          - Tính diện tích, chu vi hình chữ nhật

document.getElementById("btnTinh").onclick = function() {

// - Đầu vào:

var chieuDai = document.getElementById("chieuDai").value * 1;
var chieuRong = document.getElementById("chieuRong").value * 1;

// - Xử lý:

var dienTich = chieuDai * chieuRong;
var chuVi = (chieuDai + chieuRong) * 2;

var ketQua = "Diện tích là: " + dienTich;
ketQua += " - Chu vi là: " + chuVi;

// - Đầu ra:

document.getElementById("showKetQua").innerHTML = ketQua;

}
                    // Bài tập 5

//          - Tính tổng 2 ký số

document.getElementById("tinhKySo").onclick = function() {
    
// - Đầu vào:

var haiSo = document.getElementById("haiSo").value ;

// - Xử lý:

var hangChuc = Math.floor( haiSo / 10);
var hangDonVi = Math.floor(haiSo % 10);

var tongKySo = hangChuc + hangDonVi;

var ketQua = "Tổng 2 ký số là: " + tongKySo;

// - Đầu ra:

document.getElementById("showTongKySo").innerHTML = ketQua;

}


