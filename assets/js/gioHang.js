

var keyLocalStorageItemGioHang = 'danhSachItemGioHang';

function taoDoiTuongItemGioHang(idSanPham, soLuong) {
    var itemGioHang = new Object();
    itemGioHang.idSanPham = idSanPham;
    itemGioHang.soLuong = soLuong;
    return itemGioHang;
}

function layDanhSachItemGioHang() {
    var danhSachItemGioHang = new Array();
    var jsonDanhSachItemGioHang = localStorage.getItem(keyLocalStorageItemGioHang);
     
    if(jsonDanhSachItemGioHang != null) {
        danhSachItemGioHang = JSON.parse(jsonDanhSachItemGioHang);
    }
    return danhSachItemGioHang;
}

function hienThiTrongIconGioHang() {
    var danhSachItemGioHang = layDanhSachItemGioHang();
    console.log(danhSachItemGioHang)
    var HTML = chuyenDanhSachItemGioHangSangHTML(danhSachItemGioHang);
    var nodeIconGioHang = document.querySelector('.header__cart-list-item');
    nodeIconGioHang.innerHTML = HTML;
}

function chuyenDanhSachItemGioHangSangHTML(danhSachItemGioHang) {
    var HTML = '';
    for (var i = 0; i < danhSachItemGioHang.length; i++) {
        HTML += chuyenDoiTuongItemGioHangSangHTML(danhSachItemGioHang[i]);
    }
    return HTML;
}

function chuyenDoiTuongItemGioHangSangHTML(itemGioHang) {
    var sanPham = laySanPhamTheoId(itemGioHang.idSanPham);
    var tongTien = sanPham.tinhGiaBan() * itemGioHang.soLuong;
    var html = '<li class="header__cart-item">\n' +
    '          <img src="./assets/img/' + sanPham.hinhAnh + '" alt="" class="header__cart-item-img">\n' +
    '          <div class="header__cart-item-info">\n' +
    '               <div class="header__cart-item-header">\n' +
    '                    <h5 class="header__cart-item-name">' + sanPham.ten + '</h5>\n' +
    '                    <div class="header__cart-item-price-wrap">\n' +
    '                         <div class="header__cart-item-price">' + sanPham.tinhGiaBan() + '.000đ</div>\n' +
    '                         <span class="header__cart-item-multiply">x</span>\n' +
    '                         <span class="header__cart-item-quantity">' + itemGioHang.soLuong + '</span>\n' +
    '                    </div>\n' +
    '               </div>\n' +
    '               <div class="header__cart-item-body">\n' +
    '                    <span class="header__cart-item-desciption">Giá gốc: ' + sanPham.giaGoc + '.000 đ</span>\n' +
    '               </div>\n' +
    '          </div>\n' +
    '      </li>';
    return html;
}

function luuDanhSachItemGioHangVaoLocalStorage(danhSachItemGioHang) {
    var jsonDanhSachItemGioHang = JSON.stringify(danhSachItemGioHang);
    localStorage.setItem(keyLocalStorageItemGioHang, jsonDanhSachItemGioHang)
}

function onclickDuaVaoGioHang(idSanPham) {
    alert('Thêm sản phầm thành công!');

    var danhSachItemGioHang = layDanhSachItemGioHang();

    var coTonTaiTrongDanhSachItemGioHang = false;
    for (var i = 0; i < danhSachItemGioHang.length; i++) {
        var itemGioHangHienTai = danhSachItemGioHang[i];
        /* Nếu tồn tại thì tăng số lượng */
        if (itemGioHangHienTai.idSanPham == idSanPham) {
            var nodeSoLuong = document.querySelector('.detail-item-quantity-number');
            if(nodeSoLuong == null){
                itemGioHangHienTai.soLuong++;          
            }
            else {
                itemGioHangHienTai.soLuong = nodeSoLuong.value;
            }
            coTonTaiTrongDanhSachItemGioHang = true;
        }
    }
    /*  Nếu sản phẩm chưa tồn tại thì thêm mới item giỏ hàng, có số lượng sản phẩm mặc định bằng 1 */
    if (coTonTaiTrongDanhSachItemGioHang == false) {
        var nodeSoLuong = document.querySelector('.detail-item-quantity-number');
        if(nodeSoLuong == null){
            var itemGioHang = taoDoiTuongItemGioHang(idSanPham, 1);
        }
        else {
            var itemGioHang = taoDoiTuongItemGioHang(idSanPham, nodeSoLuong.value);
        }
        danhSachItemGioHang.push(itemGioHang);
    }
    luuDanhSachItemGioHangVaoLocalStorage(danhSachItemGioHang);

    hienThiTrongIconGioHang();
}

function onclickXoaItemTrongGioHang(x ,idSanPham) { 
    /* Lấy ra thẻ item gio hàng cần xóa */
    var nodeSanPhamCanXoa = x.parentElement;
    /* Xóa item sản phẩm trong giỏi hàng  */
    nodeSanPhamCanXoa.remove();
    var danhSachItemGioHang =   layDanhSachItemGioHang(); 
    console.log(danhSachItemGioHang);
    /* Xóa phần tử vừa xóa trong danh sách giỏ hàng  */
    for (var i = 0; i < danhSachItemGioHang.length; i++) {
        if(danhSachItemGioHang[i].idSanPham == idSanPham) {
            danhSachItemGioHang.splice(i, 1);
        }
    }
    /* Lưu vào local storage*/
    var jsonDanhSachItemGioHang = JSON.stringify(danhSachItemGioHang);
    localStorage.setItem(keyLocalStorageItemGioHang, jsonDanhSachItemGioHang);
}


function hienThiDanhSachItemGioHang() {
    var danhSachItemGioHang = layDanhSachItemGioHang();
    var HTML = chuyenDanhSachGioHangSangHTML(danhSachItemGioHang);
    var nodeChiTietGioHang = document.querySelector('.chi-tiet-cart');
    nodeChiTietGioHang.innerHTML = HTML;
}

function chuyenDanhSachGioHangSangHTML(danhSachItemGioHang) {

    var danhSachItemGioHang = layDanhSachItemGioHang();
    var tongTienCart = 0;
    for (var i = 0; i < danhSachItemGioHang.length; i++) {
        var sanPham = laySanPhamTheoId(danhSachItemGioHang[i].idSanPham);
        tongTienCart += sanPham.tinhGiaBan() * danhSachItemGioHang[i].soLuong; 
    }

    var htmlTong = '';
    htmlTong += '<p class="cart-title">CHI TIẾT GIỎ HÀNG</p>\n'+
                '<div class="gio-hang" id="gio-hang">';
    for (var i = 0; i < danhSachItemGioHang.length; i++) {
        htmlTong += chuyenItemGioHangSangHTML(danhSachItemGioHang[i]);
    }
    htmlTong += '        </div>\n'+
                '        <div class="tong-cart">\n'+
                '            <p>Tổng tiền: ' + tongTienCart + '.000 đ</p>\n'+
                '        </div>\n'+
                '        <button onclick="hienThiBangThanhToan()" class="btn thanh-toan">Thanh toán</button>';
    return htmlTong;
}

function chuyenItemGioHangSangHTML(itemGioHang) {

    var sanPham = laySanPhamTheoId(itemGioHang.idSanPham);
    sanPham = TaoDoiTuongSanPham(sanPham.hinhAnh, sanPham.ten, sanPham.giaGoc, sanPham.phanTramGiamGia, sanPham.id);
    var tongTien = sanPham.tinhGiaBan() * itemGioHang.soLuong;
    var html = 
        '            <div class="col l-12 item-gio-hang">\n' +
        '            <a onclick = "onClickChiTietSanPham(\''+ sanPham.id +'\')" href="http://127.0.0.1:5501/detail-san-ph%E1%BA%A9m.html">\n'+
        '            <div class="hinh-anh">\n' +
        '                <img src="./assets/img/' + sanPham.hinhAnh + '" alt="">\n' +
        '            </div>\n' +
        '            <p class="ten">' + sanPham.ten + '</p>\n' +
        '            </a>\n'+
        '            <div class="gia">\n' +
        '                <span class="gia-goc">' + sanPham.giaGoc + '.000 đ</span>\n' +
        '                <span class="gia-ban">' + sanPham.tinhGiaBan() + '.000 đ</span>\n' +
        '            </div>\n' +
        '            <input onblur = "dieuChinhSoLuongTrongGioHang(this, \''+ sanPham.id +'\')" type="number" class="soLuong" value="' + itemGioHang.soLuong + '">\n' +
        '            <p class="tong-tien">' + tongTien + '.000 đ</p>\n' +
        '            <div class="hanhDong" onclick = "onclickXoaItemTrongGioHang(this, \'' + sanPham.id + '\')">\n' +
        '                <i class="far fa-trash-alt"></i>\n' +
        '            </div>\n' +
        '        </div>';
    return html;
}

function hienThiKhungThanhToanGioHang() {
    var danhSachItemGioHang = layDanhSachItemGioHang();
    var tongTienCart = 0;
    for (var i = 0; i < danhSachItemGioHang.length; i++) {
        var sanPham = laySanPhamTheoId(danhSachItemGioHang[i].idSanPham);
        tongTienCart += sanPham.tinhGiaBan() * danhSachItemGioHang[i].soLuong; 
    }
    var nodeContainer = document.querySelector('.modal1');
    var html = '';
    html = '<div class="col l-6 m-8 s-12 modal-container">\n'+
    '            <div class="modal-container__close">\n'+
    '                <i class="fas fa-times"></i>\n'+
    '            </div>\n'+
    '            <p class="modal-container__title">Chi tiết chuyển khoản</p>\n'+
    '            <div class="modal-container-list">\n'+
    '                <div class="modal-item">\n'+
    '                    <p class="modal-item-sumMoney">Tổng tiền</p>\n'+
    '                    <p class="btn-banking">' + tongTienCart + '.000 đ</p>\n'+
    '                </div>\n'+
    '                <div class="modal-item">\n'+
    '                    <p>Tài khoản nguồn</p>\n'+
    '                    <input type="text" class="stkOfYou">\n'+
    '                </div>\n'+
    '                <div class="modal-item">\n'+
    '                    <p>Tài khoản Shop</p>\n'+
    '                    <p class="btn-banking">1234567890123</p>\n'+
    '                </div>\n'+
    '                <div class="modal-item">\n'+
    '                    <p>Tiền chuyển khoản</p>\n'+
    '                    <p class="btn-banking">' + tongTienCart + '.000 đ</p>\n'+
    '                </div>\n'+
    '                <a href=""><button onclick="onclikThanhToanAllCart()" class="btn banking">Thanh toán</button></a>' +'\n'+
    '            </div>\n'+
    '        </div>';
    return html;
}

/* tính lại số tiền khi điều chỉnh số lượng trong chi tiết giỏ hàng */
function dieuChinhSoLuongTrongGioHang(x, idSanPham) {
    var danhSachItemGioHang = layDanhSachItemGioHang();
    console.log(x.value);
    for (var i = 0; i < danhSachItemGioHang.length; i++) {
        if (idSanPham == danhSachItemGioHang[i].idSanPham) {
            danhSachItemGioHang[i].soLuong = x.value;
        }
    }
    luuDanhSachItemGioHangVaoLocalStorage(danhSachItemGioHang);
    hienThiTrongIconGioHang();
    hienThiDanhSachItemGioHang();
}

/* Nút thanh toán khi mua 1 loại sản phẩm */
function onclickThanhToanChiTietSanPham(idSanPham) {

    var nodeTK = document.querySelector('.modal-item input');
    console.log(nodeTK.value);
    if (nodeTK.value == null || nodeTK.value == '') {
        alert('Hãy nhập số tài khoản của bạn!!');
    }

    else {
        alert('Bạn đã thanh toán thành công');

        var danhSachItemGioHang = layDanhSachItemGioHang();
        for (var i = 0; i < danhSachItemGioHang.length; i++) {
            if (danhSachItemGioHang[i].idSanPham == idSanPham) {
                danhSachItemGioHang.splice(i, 1);
            }
        }
        var jsonDanhSachItemGioHang = JSON.stringify(danhSachItemGioHang);
        localStorage.setItem(keyLocalStorageItemGioHang, jsonDanhSachItemGioHang);

        hienThiTrongIconGioHang();
        hienThiChiTietSanPham();

        const nodeModal = document.querySelector('.modal1');
        nodeModal.classList.add('close');
    }
}

/* Nút thanh toán khi thanh toán cả giỏ hàng */
function onclikThanhToanAllCart() {
    var nodeTK = document.querySelector('.modal-item input');
    console.log(nodeTK.value);
    if (nodeTK.value == null || nodeTK.value == '') {
        alert('Hãy nhập số tài khoản của bạn!!');
    }

    else {
        alert('Bạn đã thanh toán thành công');
               
        const nodeModal = document.querySelector('.modal1');
        nodeModal.classList.add('close');
        
        localStorage.removeItem('danhSachItemGioHang');
    }
}

