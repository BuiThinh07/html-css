function taoId() {
    id = Math.random().toString().substr(2, 10) + "_" + String(new Date().getTime());
    return id;
}

function TaoDoiTuongSanPham(hinhAnh, ten, giaGoc, phanTramGiamGia, id) {
    var sanPham = new Object();

    sanPham.hinhAnh = hinhAnh;
    sanPham.ten = ten;
    sanPham.giaGoc = giaGoc;
    sanPham.phanTramGiamGia = phanTramGiamGia;
    if (id != null) {
        sanPham.id = id;
    }
    else {
        sanPham.id = taoId();
    }

    sanPham.tinhGiaBan = function () {
        var giaBan = Math.round(this.giaGoc * (100 - this.phanTramGiamGia)/100);
        return giaBan;
    }

    sanPham.toJson = function () {
        var json = JSON.stringify(this);
        return json;
    }

    /* Từ json chuyển thành 1 đối tượng đầy đủ các phương thức 
    input: json 
    output: đối tượng đầy đủ */

    sanPham.fromJson = function (json) {
        var doiTuongDayDu = new Object();
        /* Bước 1: chuyển từ json thành đối tương  */
        var doiTuong = JSON.parse(json);
        /* Bước 2: Chuyển đối đối tượng thành đối tượng đầy đủ */
        doiTuongDayDu = TaoDoiTuongSanPham(doiTuong.hinhAnh, doiTuong.ten, doiTuong.giaGoc, doiTuong.phanTramGiamGia, doiTuong.id);
        return doiTuongDayDu;
    }

    sanPham.fromJsons = function (jsonDanhSachSanPham) {
        var danhSachSanPhamDayDu = new Array();
        var danhSachSanPham = JSON.parse(jsonDanhSachSanPham);

        for (var i = 0; i < danhSachSanPham.length; i++) {
            var sanPham = danhSachSanPham[i];
            var sanPhamDayDu = TaoDoiTuongSanPham(sanPham.hinhAnh, sanPham.ten, sanPham.giaGoc, sanPham.phanTramGiamGia, sanPham.id);
            danhSachSanPhamDayDu[i] = sanPhamDayDu;
        }
        return danhSachSanPhamDayDu;
    }

    return sanPham;
}

/* Mô tả: Chuyển 1 đoạn danh sách đối tượng thành 1 đoạn html để hiện thị được dssp ra màn hình
input: danh sách sản phẩm
outout: HTML hiển thị dssp   
*/
function chuyenDanhSachSanPhamThanhHTML(danhSachSanPham) {
    var HTMLDanhSachSanPham = '<div class="col l-12 m-12 c-12">';
    for (var i = 0; i < danhSachSanPham.length; i++) {
        var sanPham = danhSachSanPham[i];
        var htmlSanPham = chuyenDoiTuongSanPhamThanhHTML(sanPham);
        HTMLDanhSachSanPham += htmlSanPham;
    }

    HTMLDanhSachSanPham += '</div>';

    return HTMLDanhSachSanPham;
}

/* Mô tả: Chuyển 1 đối tượng thành 1 đoạn html để hiện thị được sp ra màn hình
input: 1 đối tượng sản phẩm
outout: HTML hiển thị đối tượng đó 
*/
function chuyenDoiTuongSanPhamThanhHTML(sanPham) {
    /* Tạo lại đối tượng đầy đr các function */
    sanPham = TaoDoiTuongSanPham(sanPham.hinhAnh, sanPham.ten, sanPham.giaGoc, sanPham.phanTramGiamGia, sanPham.id);

    var html = '';
    html = 
    '                                <div class="col l-3 m-4 c-6">\n'+
    '                                    <div class="item__flower">\n'+
    '                                        <a onclick = "onClickChiTietSanPham(\''+ sanPham.id +'\')" href="http://127.0.0.1:5501/detail-san-ph%E1%BA%A9m.html">\n'+
    '                                            <div class="item__flower-img">\n'+
    '                                                <img src="./assets/img/'+ sanPham.hinhAnh +'" alt="">\n' +
    '                                            </div>\n'+
    '                                            <div class="item__flower-title">' + sanPham.ten + '</div>\n'+
    '                                        </a>\n'+
    '                                        <div class="item__flower-body">\n'+
    '                                            <div class="item__flower-price">\n'+
    '                                                <div class="item__flower-oldPrice">' + sanPham.giaGoc + '.000 đ</div>\n'+
    '                                                <div class="item__flower-presenPrice">' + sanPham.tinhGiaBan() + '.000 đ</div>\n'+
    '                                            </div>\n'+
    '                                                <div class="item__flower-cart">\n'+
    '                                                    <i onclick = "onclickDuaVaoGioHang(\''+ sanPham.id +'\')" class="item__flower-cart-icon fas fa-shopping-cart"></i>\n'+
    '                                                </div>\n'+
    '                                        </div>\n'+
    '                                        <div class="item__flower__sale-off">\n'+
    '                                            <span class="item__flower__sale-off-percent">' + sanPham.phanTramGiamGia + '%</span>\n'+
    '                                            <span class="item__flower__sale-off-label">GIẢM</span>\n'+
    '                                        </div>\n'+
    '                                    </div>\n'+
    '                               </div>';
    return html;
}

/* input: id
output: đối tượng có id là id */
function truyXuatSanPhamTheoId(id) {
    /* Bước 1: Lấy lên danh sách toàn bộ đối tượng */
    var jsonDanhSachSanPham = localStorage.getItem('danhSachSanPham');
    var danhSachSanPham = JSON.parse(jsonDanhSachSanPham);

    /* Bước 2: Duyệt toàn bộ đối tượng, kiểm tra xem id của đối tượng có bằng với id truyền vào không */
    for (var i = 0; i < danhSachSanPham.length; i++) {
        var sanPhamHienTai = danhSachSanPham[i];
        if (sanPhamHienTai.id == id) {
            return sanPhamHienTai;
        }
    }
}

/* Mô tả: từ id sản phẩm lấy lên đối tượng sản phẩm với đầy đủ các hàm bên trong 
input: id sản phẩm
output: đối tượng sản phẩm */
function laySanPhamTheoId(idSanPham) {
    var sanPham = new Object();
    /* Bước 1: load toàn bộ danh sách sản phẩm */
    var danhSachSanPham = layDanhSachSanPhamDuoiLocalStorage();

    /* Bước 2: tìm ra đối tượng sản phẩm có id = idSanPham */
    for (i = 0; i < danhSachSanPham.length; i++) {
        var sanPhamHienTai = danhSachSanPham[i];
        if (sanPhamHienTai.id == idSanPham) {
            sanPham = sanPhamHienTai;
        }
    }

    /* Bước 3: Chuyển đối tượng thành đối tượng đầy đủ */
    sanPham = TaoDoiTuongSanPham(sanPham.hinhAnh, sanPham.ten, sanPham.giaGoc, sanPham.phanTramGiamGia, sanPham.id);
    return sanPham;
}

/* mô tả: Lấy toàn bộ danh sách sản phẩm dưới local storage */
function layDanhSachSanPhamDuoiLocalStorage() {
    jsonDanhSachSanPham =  localStorage.getItem('danhSachSanPham');
    var danhSachSanPham = JSON.parse(jsonDanhSachSanPham);
    return danhSachSanPham;
}
