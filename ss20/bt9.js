// gán giá trị
let a = 5;
// gán chuỗi
let b= “5”;
// trả về true vì toán tử == chỉ so sánh giá trị, không so sánh kiểu dữ liệu.
console.log(a==b);
// trả về false vì toán tử === so sánh cả giá trị và kiểu dữ liệu. Trong trường hợp này, a là số và b là chuỗi.
console.log(a===b);
// trả về false vì nó chỉ kiểm tra xem hai giá trị có khác nhau không, không kiểm tra kiểu dữ liệu.
console.log(a!=b);
// trả về true vì nó kiểm tra cả giá trị và kiểu dữ liệu. Trong trường hợp này, a là số và b là chuỗi, vì vậy chúng không tương đương.
console.log(a!==b);
