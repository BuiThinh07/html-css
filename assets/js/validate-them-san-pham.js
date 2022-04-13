function kiemTraFormValidateCacInputDeTrong() {
    var hopLe = true;
    /* Bước 1: truy cập tất cả các node muốn check => danh sách NodeInputs  */
    var nodeInputKhongDeTrong = document.querySelectorAll('input[khongDeTrong]');
    for (var i = 0; i < nodeInputKhongDeTrong.length; i++) {
        var nodeInput = nodeInputKhongDeTrong[i];
        inputValue = nodeInput.value;

        var idNodeInput = nodeInput.getAttribute('id');
        var nodeHienThiLoi = truyXuatNodeHienThiLoiTheoIdInput(idNodeInput);
        nodeHienThiLoi.innerHTML ='';

        if (inputValue == '' || inputValue.length == 0) {
            var noiDungLoi = LayNoiDungHienThiLoi(nodeInput);
            nodeHienThiLoi.innerHTML = noiDungLoi;   
            hopLe = false;  
        }
    }
    return hopLe;
}

function truyXuatNodeHienThiLoiTheoIdInput(inputId) {
    var nodeHienThiLoi = document.querySelector('label.error[for="'+ inputId +'"]');
    return nodeHienThiLoi;
}

function LayNoiDungHienThiLoi (nodeInput) {
    var noiDungLoi = "Không được để trống";
    if (nodeInput.hasAttribute('noiDungLoiDeTrong')) {
        noiDungLoi = nodeInput.getAttribute('noiDungLoiDeTrong')
    }
    return noiDungLoi;
}

function kiemTraGiaTriNhap() {
    var ketQua = true;

    var nodeCheck = document.querySelector('input[kiemTraGiaTri]');
    var valueCheck = nodeCheck.value;

    var idNodeCheck = nodeCheck.getAttribute('id');
    var nodeHienThiCanCheck = document.querySelector('label.error[for="'+ idNodeCheck +'"]');
    nodeHienThiCanCheck.innerHTML = '';
    if(valueCheck < 0 || valueCheck > 100 || valueCheck == '') {
        nodeHienThiCanCheck.innerHTML = 'Bạn phải nhập trong khoảng từ 0-100';
        ketQua = false;
    }
    return ketQua;
}