// Admissions Management with priority area and category
function manageAdmissions() {
    let studentName = document.getElementById("studentName").value;
    let score1 = parseFloat(document.getElementById("score1").value);
    let score2 = parseFloat(document.getElementById("score2").value);
    let score3 = parseFloat(document.getElementById("score3").value);
    let priorityArea = document.getElementById("priorityArea").value; //điểm khu vực
    let category = document.getElementById("category").value;  //điểm đối tượng
    let boardScore = parseFloat(document.getElementById("boardScore").value); // điểm hội đồng


    // Kiểm tra xem điểm có hợp lệ không
    if (score1 <= 0 || score2 <= 0 || score3 <= 0) {
        document.getElementById("admissionResult").textContent = "Điểm không hợp lệ";
        return;
    }

    //Tính tổng điểm gốc
    let baseScore = score1 + score2 + score3;

    // Priority points initialization
    let priorityPoints = 0;

    // Cộng điểm dựa trên khu vực ưu tiên
    if (priorityArea == 'A') {
        priorityPoints += 2;
    } else if (priorityArea == 'B') {
        priorityPoints += 1;
    } else if (priorityArea == 'C') {
        priorityPoints += 0.5;
    }

    // Cộng điểm dựa trên đối tượng ưu tiên
    if (category == '1') {
        priorityPoints += 2;
    } else if (category == '2') {
        priorityPoints += 1;
    } else if (category == '3') {
        priorityPoints += 0.5;
    }

    // Tính tổng điểm (điểm gốc + điểm cộng thêm)
    let totalScore = baseScore + priorityPoints;

    // hiển thị kết quả điểm
    document.getElementById("baseScoreResult").textContent = `Điểm Gốc: ${baseScore.toFixed(2)}`;
    document.getElementById("totalScoreResult").textContent = `Tổng Điểm (Điểm Gốc + Điểm Cộng Thêm): ${totalScore.toFixed(2)}`;

    // So sánh và trả về kết quả tuyển sinh
    let result = "Không đủ điều kiện tuyển sinh.";
    if (totalScore >= boardScore) {
        result = "Đủ điều kiện tuyển sinh!";
    } else {
        result = "Không đủ điều kiện tuyển sinh!";
    }
    document.getElementById("admissionResult").textContent = `Trạng thái Tuyển Sinh: ${result}`;

}


function calculateElectricityBill() {
    let customerName = document.getElementById("customerName").value;
    let electricityUsage = parseInt(document.getElementById("electricityUsage").value);

    if (isNaN(electricityUsage) || electricityUsage <= 0 || customerName === "") {
        document.getElementById("electricityBillResult").textContent = "Vui lòng nhập số KWh hợp lệ và tên khách hàng";
        return;
    }

    let billAmount = 0;

    if (electricityUsage <= 50) {
        billAmount = electricityUsage * 500;  
    } else if (electricityUsage <= 100) {
        billAmount = 50 * 500 + (electricityUsage - 50) * 650;  
    } else if (electricityUsage <= 200) {
        billAmount = 50 * 500 + 50 * 650 + (electricityUsage - 100) * 850;  
    } else if (electricityUsage <= 350) {
        billAmount = 50 * 500 + 50 * 650 + 100 * 850 + (electricityUsage - 200) * 1100;
    } else {
        billAmount = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (electricityUsage - 350) * 1300;  
    }

    document.getElementById("electricityBillResult").textContent = `${customerName} phải trả tiền điện: ${billAmount} VND`;
}

function calculateIncomeTax() {
    let name = document.getElementById("name").value;
    let totalIncome = parseFloat(document.getElementById("totalIncome").value);
    let dependents = parseInt(document.getElementById("dependents").value);

    if (isNaN(totalIncome) || isNaN(dependents) || name === "") {
        document.getElementById("taxResult").textContent = "Thông tin không hợp lệ";
        return;
    }

    let taxableIncome = totalIncome - 4 - (dependents * 1.6);

    let taxRate = 0;

    if (taxableIncome <= 60) {
        taxRate = 5;
    } else if (taxableIncome <= 120) {
        taxRate = 10;
    } else if (taxableIncome <= 210) {
        taxRate = 15;
    } else if (taxableIncome <= 384) {
        taxRate = 20;
    } else if (taxableIncome <= 624) {
        taxRate = 25;
    } else if (taxableIncome <= 960) {
        taxRate = 30;
    } else {
        taxRate = 35;
    }

    let incomeTax = taxableIncome * (taxRate / 100);

    let amountAfterTax = totalIncome - incomeTax;

    document.getElementById("taxResult").textContent = `Thuế phải trả: ${incomeTax.toFixed(2)} triệu VND`;
    document.getElementById("amountAfterTax").textContent = `Số tiền còn lại sau thuế: ${amountAfterTax.toFixed(2)} triệu VND`;
}

function calculateCableBill() {
    let customerName = document.getElementById("customerName").value;
    let customerType = document.getElementById("customerType").value;
    let channels = parseInt(document.getElementById("channels").value);
    let connections = parseInt(document.getElementById("connections").value);

    let billAmount = 0;


    if (isNaN(channels) || channels <= 0) {
        document.getElementById("cableBillResult").textContent = "Vui lòng nhập số kênh hợp lệ và lớn hơn 0";
        return;
    }

    if (customerType === "business") {
        if (isNaN(connections) || connections < 0) {
            document.getElementById("cableBillResult").textContent = "Vui lòng nhập số kết nối hợp lệ và lớn hơn hoặc bằng 0 cho khách hàng Doanh Nghiệp!";
            return;
        }
    }

    if (customerType === "household") {
        billAmount += 4.5; 
        billAmount += 20.5; 
        billAmount += channels * 7.5; 
    } else if (customerType === "business") {
        billAmount += 15;  
        billAmount += 75 + (connections - 10) * 5; 
        billAmount += channels * 50; 
    }

    document.getElementById("cableBillResult").textContent = `Số tiền phải trả: ${billAmount.toFixed(2)} $`;
}

function toggleConnectionInput() {
    let customerType = document.getElementById("customerType").value;
    let connectionInput = document.getElementById("connectionInput");

    if (customerType === "business") {
        connectionInput.style.display = "block";
    } else {
        connectionInput.style.display = "none";
    }
}