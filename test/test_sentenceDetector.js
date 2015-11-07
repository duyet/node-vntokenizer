var sentenceDetector = require('../');

console.log(sentenceDetector);

var s = "Điều này hoàn toàn trái ngược với chính sách của Microsoft thúc đẩy người dùng tải về và cập nhật Windows 10 miễn phí khi trong tháng đầu tiên đã có khoảng 70 triệu máy tính chạy chuyển sang sử dụng phiên bản hệ điều hành mới, theo thống kê của Microsoft.";
sentenceDetector(s, function(err, result) {
	console.log(err, result);
})