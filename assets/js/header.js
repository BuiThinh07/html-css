function renderHeader() {
    var header = '';
    header = '<div class="grid wide">\n'+
    '            <!-- navbar -->\n'+
    '            <div class="header__navbar">\n'+
    '                <ul class="header__navbar-list">\n'+
    '                    <li class="header__navbar-item">\n'+
    '                        <label>Floda</label>\n'+
    '                    </li>\n'+
    '\n'+
    '                    <li class="header__navbar-item">\n'+
    '                        <ul class="header__navbar-item-list">\n'+
    '                            <li class="header__navbar-list-item trang-chu">\n'+
    '                                <a href="http://127.0.0.1:5501/document.html">\n'+
    '                                    TRANG CHỦ\n'+
    '                                </a>\n'+
    '                            </li>\n'+
    '                            <li class="header__navbar-list-item header__navbar-list-qr">\n'+
    '                                TẢI ỨNG DỤNG\n'+
    '                                <div class="header__qr">\n'+
    '                                    <img src="./assets/img/mãQR.png" alt="Quét QR" class="header__qr-img">\n'+
    '                                    <div class="header__qr-apps">\n'+
    '                                        <a href="https://shopee.vn/web" class="header__qr-link">\n'+
    '                                            <img src="./assets/img/appStore.png" alt="app Store"\n'+
    '                                                class="header__qr-download-img">\n'+
    '                                        </a>\n'+
    '                                        <a href="https://shopee.vn/web" class="header__qr-link">\n'+
    '                                            <img src="./assets/img/ggPlay.png" alt="gg Play"\n'+
    '                                                class="header__qr-download-img">\n'+
    '                                        </a>\n'+
    '                                    </div>\n'+
    '                                </div>\n'+
    '                            </li>\n'+
    '                            <li class="header__navbar-list-item header__navbar-list-choonse-flower">\n'+
    '                                ÁO HOODIE\n'+
    '                            </li>\n'+
    '                            <li class="header__navbar-list-item ">\n'+
    '                                <p class="header-colections">KẾT NỐI</p>\n'+
    '                            </li>\n'+
    '                            <div class="header__navbar-list-collection">\n'+
    '                                <a href="https://www.facebook.com/ShopeeVN" class="header__navbar-icon-link">\n'+
    '                                    <i class="header__navbar-icon fab fa-facebook"></i>\n'+
    '                                </a>\n'+
    '                                <a href="https://www.instagram.com/Shopee_VN/" class="header__navbar-icon-link">\n'+
    '                                    <i class="header__navbar-icon fab fa-instagram"></i>\n'+
    '                                </a>\n'+
    '                            </div>\n'+
    '                        </ul>\n'+
    '                    </li>\n'+
    '\n'+
    '                    <li class="header__navbar-item header__navbar-list-icon">\n'+
    '\n'+
    '                        <ul class="header__navbar-list-icon">\n'+
    '                            <li class="header__navbar-item-icon header__navbar-item-icon-search">\n'+
    '                                <i class="fas fa-search"></i>\n'+
    '                                <div class="header-search">\n'+
    '                                    <div class="header-search__list">\n'+
    '                                        <div class="header-search__input">\n'+
    '                                            <input type="text" placeholder="Nhập để tìm kiếm">\n'+
    '                                        </div>\n'+
    '                                        <div class="header-search__icon"><i class="fas fa-search"></i></div>\n'+
    '\n'+
    '                                    </div>\n'+
    '                                </div>\n'+
    '                            </li>\n'+
    '                            <li class="header__navbar-item-icon"><i class="fas fa-heart"></i></li>\n'+
    '                            <li class="header__navbar-item-icon header-list-choose-user">\n'+
    '                                <i class="fas fa-user"></i>\n'+
    '                                <ul class="header-list-choose-login">\n'+
    '                                    <li class="header-item-choose mg-t-10 header-item-choose--login">Đăng nhập</li>\n'+
    '                                    <li class="header-item-choose header-item-choose--register">Đăng kí</li>\n'+
    '                                </ul>\n'+
    '                            </li>\n'+
    '                            <li class="header__navbar-item-icon header-list-cart">\n'+
    '                                <i class="fas fa-shopping-cart"></i>\n'+
    '                                <div class="header__cart-list ">\n'+
    '\n'+
    '                                    <h4 class="header__cart-heading">Sản phẩm đã thêm</h4>\n'+
    '                                    <ul class="header__cart-list-item">\n'+
    '                                        <!-- items -->\n'+
    '                                        <li class="header__cart-item">\n'+
    '                                            <img src="./assets/img/anh1.jpg" alt="" class="header__cart-item-img">\n'+
    '                                            <div class="header__cart-item-info">\n'+
    '                                                <div class="header__cart-item-header">\n'+
    '                                                    <h5 class="header__cart-item-name">Bộ kem đặc trị vùng mắt</h5>\n'+
    '                                                    <div class="header__cart-item-price-wrap">\n'+
    '                                                        <div class="header__cart-item-price">2.000.000</div>\n'+
    '                                                        <span class="header__cart-item-multiply">x</span>\n'+
    '                                                        <span class="header__cart-item-quantity">2</span>\n'+
    '                                                    </div>\n'+
    '                                                </div>\n'+
    '                                                <div class="header__cart-item-body">\n'+
    '                                                    <span class="header__cart-item-desciption">Phân loại Bạc</span>\n'+
    '                                                    <span class="header__cart-item-delete">Xóa</span>\n'+
    '                                                </div>\n'+
    '                                            </div>\n'+
    '                                        </li>\n'+
    '\n'+
    '                                    </ul>\n'+
    '                                    <a href="http://127.0.0.1:5501/gio-hang.html"><button\n'+
    '                                            class="header__cart-view btn ">Xem chi tiết giỏ\n'+
    '                                            hàng</button></a>\n'+
    '                                </div>\n'+
    '                            </li>\n'+
    '                        </ul>\n'+
    '\n'+
    '                    </li>\n'+
    '\n'+
    '                </ul>\n'+
    '            </div>\n'+
    '        </div>';
    return header;
}