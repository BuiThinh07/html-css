function renderLogin() {
    var login = '';
    login = '<div class="main-form">\n'+
    '                    <div class="main-form__close">\n'+
    '                        <i class="fas fa-times"></i>\n'+
    '                    </div>\n'+
    '\n'+
    '                    <!-- form đăng nhập -->\n'+
    '                    <form action="" method="POST" class="form form-1" id="form-1">\n'+
    '                        <h3 class="heading">Đăng ký</h3>\n'+
    '\n'+
    '                        <div class="spacer"></div>\n'+
    '\n'+
    '                        <div class="form-group">\n'+
    '                            <label for="fullname" class="form-label">Tên đầy đủ</label>\n'+
    '                            <input id="fullname" name="fullname" type="text" placeholder="VD: Bùi Thịnh"\n'+
    '                                class="form-control">\n'+
    '                            <span class="form-message"></span>\n'+
    '                        </div>\n'+
    '\n'+
    '                        <div class="form-group">\n'+
    '                            <label for="email" class="form-label">Email</label>\n'+
    '                            <input id="email" name="email" type="text" placeholder="VD: Buithinh@gmail.com"\n'+
    '                                class="form-control">\n'+
    '                            <span class="form-message"></span>\n'+
    '                        </div>\n'+
    '\n'+
    '                        <div class="form-group">\n'+
    '                            <label for="password" class="form-label">Mật khẩu</label>\n'+
    '                            <input id="password" name="password" type="password" placeholder="Nhập mật khẩu"\n'+
    '                                class="form-control">\n'+
    '                            <span class="form-message"></span>\n'+
    '                        </div>\n'+
    '\n'+
    '                        <div class="form-group">\n'+
    '                            <label for="password_confirmation" class="form-label">Nhập lại mật khẩu</label>\n'+
    '                            <input id="password_confirmation" name="password_confirmation"\n'+
    '                                placeholder="Nhập lại mật khẩu" type="password" class="form-control">\n'+
    '                            <span class="form-message"></span>\n'+
    '                        </div>\n'+
    '\n'+
    '                        <button class="form-submit">Đăng ký</button>\n'+
    '                    </form>\n'+
    '\n'+
    '                    <!-- Form đăng kí -->\n'+
    '                    <form action="" method="POST" class="form form-2" id="form-2">\n'+
    '                        <h3 class="heading">Đăng nhập</h3>\n'+
    '\n'+
    '                        <div class="spacer"></div>\n'+
    '\n'+
    '                        <div class="form-group">\n'+
    '                            <label for="email" class="form-label">Email</label>\n'+
    '                            <input id="email" name="email" type="text" placeholder="VD: Buithinh@gmail.com"\n'+
    '                                class="form-control">\n'+
    '                            <span class="form-message"></span>\n'+
    '                        </div>\n'+
    '\n'+
    '                        <div class="form-group">\n'+
    '                            <label for="password" class="form-label">Mật khẩu</label>\n'+
    '                            <input id="password" name="password" type="password" placeholder="Nhập mật khẩu"\n'+
    '                                class="form-control">\n'+
    '                            <span class="form-message"></span>\n'+
    '                        </div>\n'+
    '\n'+
    '                        <button class="form-submit">Đăng nhập</button>\n'+
    '                    </form>\n'+
    '\n'+
    '                </div>';
    return login;
}

// Đối tượng `Validator`
function Validator(options) {
    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    var selectorRules = {};

    // Hàm thực hiện validate
    function validate(inputElement, rule) {
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
        var errorMessage;

        // Lấy ra các rules của selector
        var rules = selectorRules[rule.selector];
        
        // Lặp qua từng rule & kiểm tra
        // Nếu có lỗi thì dừng việc kiểm
        for (var i = 0; i < rules.length; ++i) {
            switch (inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    );
                    break;
                default:
                    errorMessage = rules[i](inputElement.value);
            }
            if (errorMessage) break;
        }
        
        if (errorMessage) {
            errorElement.innerText = errorMessage;
            getParent(inputElement, options.formGroupSelector).classList.add('invalid');
        } else {
            errorElement.innerText = '';
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
        }

        return !errorMessage;
    }

    // Lấy element của form cần validate
    var formElement = document.querySelector(options.form);
    if (formElement) {
        // Khi submit form
        formElement.onsubmit = function (e) {
            e.preventDefault();

            var isFormValid = true;

            // Lặp qua từng rules và validate
            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if (!isValid) {
                    isFormValid = false;
                }
            });

            if (isFormValid) {
                // Trường hợp submit với javascript
                if (typeof options.onSubmit === 'function') {
                    var enableInputs = formElement.querySelectorAll('[name]');
                    var formValues = Array.from(enableInputs).reduce(function (values, input) {
                        
                        switch(input.type) {
                            case 'radio':
                                values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                                break;
                            case 'checkbox':
                                if (!input.matches(':checked')) {
                                    values[input.name] = '';
                                    return values;
                                }
                                if (!Array.isArray(values[input.name])) {
                                    values[input.name] = [];
                                }
                                values[input.name].push(input.value);
                                break;
                            case 'file':
                                values[input.name] = input.files;
                                break;
                            default:
                                values[input.name] = input.value;
                        }

                        return values;
                    }, {});
                    options.onSubmit(formValues);
                }
                // Trường hợp submit với hành vi mặc định
                else {
                    formElement.submit();
                }
            }
        }

        // Lặp qua mỗi rule và xử lý (lắng nghe sự kiện blur, input, ...)
        options.rules.forEach(function (rule) {

            // Lưu lại các rules cho mỗi input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElements = formElement.querySelectorAll(rule.selector);

            Array.from(inputElements).forEach(function (inputElement) {
               // Xử lý trường hợp blur khỏi input
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                }

                // Xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = function () {
                    var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
                } 
            });
        });
    }

}



// Định nghĩa rules
// Nguyên tắc của các rules:
// 1. Khi có lỗi => Trả ra message lỗi
// 2. Khi hợp lệ => Không trả ra cái gì cả (undefined)
Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value ? undefined :  message || 'Vui lòng nhập trường này'
        }
    };
}

Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined :  message || 'Trường này phải là email';
        }
    };
}

Validator.minLength = function (selector, min, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined :  message || `Vui lòng nhập tối thiểu ${min} kí tự`;
        }
    };
}

Validator.isConfirmed = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác';
        }
    }
}
