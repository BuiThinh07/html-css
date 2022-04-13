
function hienThiChiTietSanPham() {
    var jsonIdSanPham = localStorage.getItem('idChiTietSanPham');
    var idSanPham = JSON.parse(jsonIdSanPham);
    var sanPham = laySanPhamTheoId(idSanPham);
    var nodeContainer = document.querySelector('.container');
    var html = '<div class="detail">\n' +
        '            <div class="grid wide">\n' +
        '                <div class="col l-12 m-12 c-12">\n' +
        '                    <div class="col l-5 m-5 c-12">\n' +
        '                        <div class="detail-item-img">\n' +
        '                            <img src="./assets/img/' + sanPham.hinhAnh + '" alt="">\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                    <div class="col l-7 m-7 c-12 detail-item">\n' +
        '                        <div class="detail-item-title">' + sanPham.ten + '</div>\n' +
        '                        <div class="detail-item-price">\n' +
        '                            <div class="detail-item-price__old">' + sanPham.giaGoc + '.000 đ</div>\n' +
        '                            <div class="detail-item-price__current">' + sanPham.tinhGiaBan() + '.000 đ</div>\n' +
        '                            <div class="detail-item-price__percent-reduce">' + sanPham.phanTramGiamGia + '% GIẢM</div>\n' +
        '                        </div>\n' +
        '                        <div class="detail-item-subtitle">\n' +
        '                            <p>\n' +
        '                                Gì cũng rẻ\n' +
        '                                <i class="fas fa-laugh-squint"></i>\n' +
        '                            </p>\n' +
        '                            <label>Giá tốt nhất so với các sản phẩm cùng loại!</label>\n' +
        '                        </div>\n' +
        '                        <div class="detail-item-color">\n' +
        '                            <p>Màu</p>\n' +
        '                            <ul class="detail-item-list-color">\n' +
        '                                <li value="0">Đen</li>\n' +
        '                                <li value="0">Trắng</li>\n' +
        '                                <li value="0">Đỏ</li>\n' +
        '                                <li value="0">Xanh dương</li>\n' +
        '                            </ul>\n' +
        '                        </div>\n' +
        '                        <div class="detail-item-size">\n' +
        '                            <p>Size</p>\n' +
        '                            <ul class="detail-item-list-size">\n' +
        '                                <li value="0">XL</li>\n' +
        '                                <li value="0">L</li>\n' +
        '                                <li value="0">M</li>\n' +
        '                            </ul>\n' +
        '                        </div>\n' +
        '                        <div class="detail-item-quantity">\n' +
        '                            <p>Số lượng</p>\n' +
        '                            <li class="detail-item-quantity-reduce">-</li>\n' +
        '                            <input class="detail-item-quantity-number" value="1">\n' +
        '                            <li class="detail-item-quantity-crease">+</li>\n' +
        '                        </div>\n' +
        '                        <div class="detail-item-button">\n' +
        '                            <button onclick = "onclickDuaVaoGioHang(\'' + sanPham.id + '\')" class="btn in-cart">\n' +
        '                                <i class="fas fa-shopping-cart"></i>\n' +
        '                                Thêm vào giỏ hàng\n' +
        '                            </button>\n' +
        '                            <button class="btn buy">Mua ngay</button>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>';

    nodeContainer.innerHTML = html;

}

function hienThiKhungThanhToan() {
    var jsonIdSanPham = localStorage.getItem('idChiTietSanPham');
    var idSanPham = JSON.parse(jsonIdSanPham);
    var sanPham = laySanPhamTheoId(idSanPham);
    var color =  document.querySelector('ul.detail-item-list-color .choonse').textContent;
    var size = document.querySelector('ul.detail-item-list-size .choonse').textContent;
    var quantity = document.querySelector('.detail-item-quantity-number').value;
    var tongTien = quantity * sanPham.tinhGiaBan();
    var nodeContainer = document.querySelector('.modal1');
    var html = '';
    html = '<div class="col l-6 m-8 s-12 modal-container">\n'+
    '            <div class="modal-container__close">\n'+
    '                <i class="fas fa-times"></i>\n'+
    '            </div>\n'+
    '            <p class="modal-container__title">Chi tiết chuyển khoản</p>\n'+
    '            <div class="modal-container-list">\n'+
    '                <div class="modal-item">\n'+
    '                    <p class="modal-item-name">Name</p>\n'+
    '                    <p class="btn-banking">' + sanPham.ten + '</p>\n'+
    '                </div>\n'+
    '                <div class="modal-item">\n'+
    '                    <p class="modal-item-color">Color</p>\n'+
    '                    <p class="btn-banking">' + color + '</p>\n'+
    '                </div>\n'+
    '                <div class="modal-item">\n'+
    '                    <p class="modal-item-size">Size</p>\n'+
    '                    <p class="btn-banking">' + size + '</p>\n'+
    '                </div>\n'+
    '                <div class="modal-item">\n'+
    '                    <p class="modal-item-quantity">Số lượng</p>\n'+
    '                    <p class="btn-banking">' + quantity + '</p>\n'+
    '                </div>\n'+
    '                <div class="modal-item">\n'+
    '                    <p class="modal-item-giaBan">Giá</p>\n'+
    '                    <p class="btn-banking">' + sanPham.tinhGiaBan() + '.000 đ</p>\n'+
    '                </div>\n'+
    '                <div class="modal-item">\n'+
    '                    <p class="modal-item-sumMoney">Tổng tiền</p>\n'+
    '                    <p class="btn-banking">' + tongTien + '.000 đ</p>\n'+
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
    '                    <p class="btn-banking">' + tongTien + '.000 đ</p>\n'+
    '                </div>\n'+
    '                <a href=""><button onclick="onclickThanhToanChiTietSanPham(\'' + sanPham.id + '\')" class="btn banking">Thanh toán</button></a>\n'+
    '            </div>\n'+
    '        </div>';
    return html;
}