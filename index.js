/* Bài tập 1: Tính tiền lương nhân viên  
- input: Nhập tiền lương 1 ngày của nhân viên và số ngày làm
- process: Tính tiền lương theo công thức Lương 1 ngày*số ngày làm
- output: xuất số tiền lương*/

var dailyPay = 100000;
var workDay = 24;
var totalPay = workDay * dailyPay;

console.log("Bài tập 1: Tổng tiền lương là: " + totalPay);

/*Bài tập 2: Tính giá trị trung bình
  - input: Nhập vào 5 số thực
  - process: Tính giá trị trung bình của 5 số
  - output: Xuất giá trị trung bình */

  var num1 = 7;
  var num2 = 82;
  var num3 = 70;
  var num4 = 12;
  var num5 = 69;

  var average = Math.floor((num1 + num2 + num3 + num4 + num5) / 5);

  console.log("Bài tập 2: Giá trị trung bình của 5 số là: " + average);

/*Bài tập 3: Quy đổi tiền
  - input: Nhập vào số tiền USD
  - process: Đổi sang VND theo công thức USD*23500
  - output: Xuất giá trị VND */

  var usd = 350;
  var vnd = usd * 23500;

  console.log("Bài tập 3: Giá trị VND: " + vnd);

/*Bài tập 4: Tính diện tích chu vi hình chữ nhật
  - input: Nhập vào chiều dài và chiều rộng HCN
  - process: Tính diện tích theo công thức dài*rộng và chu vi theo công thức (dài + rộng)*2
  - output: Xuất diện tích và chu vi */

  var length = 30;
  var width = 15;
  var area = length * width;
  var perimeter = (length + width) * 2;

  console.log("Bài tập 4: Diện tích: " + area + "; " + "Chu vi: " + perimeter);

/*Bài tập 5: Tính tổng 2 ký số
  - input: Nhập vào 1 số có 2 chữ số
  - process: Tính tổng của 2 ký số
  - output: Xuất tổng ra màn hình */
  
  var number = 55;
  var calcSum = 0;

  if (number > 9 && number < 100) {
    calcSum = Math.floor(number / 10) + (number % 10);
  }

  console.log("Bài tập 5: Tổng 2 ký số: " + calcSum);