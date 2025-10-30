let imgs = document.querySelectorAll('.photo_strip>div');
let photoStrip = document.querySelector('.photo_strip');
let viewFrame = document.querySelector('.view_frame');

function nextSlide(){
    let check = 0;
    setInterval(function(){
        if(check < imgs.length - 1){
            check++;
        }
        else{
            check = 0;
        }
        photoStrip.style.marginLeft = `-${check * viewFrame.offsetWidth}px`;
    },3000)
}
nextSlide();


// FORM ĐKI

let object= {};

function validate1(input_of_form,messError,spanError,rule){
    // duyệt qua từng rule của input hiện tại onblur và lấy ra messError
    
    let qal = object[rule.select];
    for(let i = 0; i < qal.length ; ++i){
        messError = qal[i](input_of_form.value);
        // messError sẽ đc gán = rule đầu tiên nó tìm thấy là có lỗi
        // console.log(qal[i]);
        // console.log(input_of_form.value);
        if(messError){
            break;
        }
    }
    if(messError){ // true
        spanError.innerText = messError;
        input_of_form.style.borderColor = 'red';
    }
    else{ // false
        spanError.innerText = '';
        input_of_form.style.borderColor = '#2babfa';
    }
    return !messError; // nếu có lỗi sẽ trả về false còn nếu k có lỗi sẽ trả về true 
}

function Validator(options){
    formCv = document.querySelector(options.form1);

    function inputParent(input,selectorParent){
        while (input.parentElement){
            if(input.parentElement.matches(selectorParent)){
                return input.parentElement;
            }
            input = input.parentElement;
        }
    }

    formCv.onsubmit = function(event){
        event.preventDefault();
        let isFormValid = true;
        options.rules.forEach(function(rule){
            let input_of_form = formCv.querySelector(rule.select);
            let messError = rule.check(input_of_form.value);
            let spanError = (inputParent(input_of_form,options.formInput)).querySelector('span');   
            let isValid = validate1(input_of_form,messError,spanError,rule);
            isFormValid = isValid;
        });

        
        if(isFormValid) {
            // Khi Không có Lỗi sẽ lấy ra data dc nhập đúng từ input
            let enableInput = formCv.querySelectorAll('[name]:not([disable])');
            let enableForm = {
                name : enableInput[0].value,
                email : enableInput[1].value,
                password : enableInput[2].value,
                role : "User",
            }
            console.log(enableInput);
            console.log(enableForm);

            let APIuser = "http://localhost:5028/api/NguoiDung";
            fetch(APIuser,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json" // Định dạng nội dung JSON
                },
                body: JSON.stringify(enableForm)
            })
            .then(response=>{
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data=>{
                console.log("Response từ server:", data);
                alert("Đăng Ký Thành Công");
                formQal.style.display = "none";
                overlay.style.display = 'none';
            })
            .catch(error=>{
                console.error("Lỗi khi gửi dữ liệu:", error);
            })
            
        }
        else{
            console.log('Có Lỗi ! Không Thể Xuất Ra Thông Tin ');
        }

    }

    options.rules.forEach(function(rule){
        let input_of_form = formCv.querySelector(rule.select);
        // Kiểm Tra tất cả các rule của cùng 1 input;
        // Nếu object[rule.select] là 1 mảng thì đẩy rule.check tiếp theo và trong mảng
        if(Array.isArray(object[rule.select])){
            object[rule.select].push(rule.check);
        }
        else{
            // Nếu object[rule.select] 0 phải là 1 mảng
            object[rule.select] = [rule.check];
        }

        

        input_of_form.onblur = function(){
            let messError = rule.check(input_of_form.value);
            let spanError = (inputParent(input_of_form,options.formInput)).querySelector('span');
            validate1(input_of_form,messError,spanError,rule);

            // Nếu Người Dùng Đang Nhập Thì Bỏ Cảnh Báo Lỗi
            input_of_form.oninput = function(){
                spanError.innerText = '';
                input_of_form.style.borderColor = '#2babfa';
            }
        }
    })
}
// Kiểm Tra Các Điều Kiện Của Mỗi Input
Validator.isRequired1 = function(select){
    return {
        select: select,
        check: function(input_of_form){
            return input_of_form.trim() ? undefined : '⚠️Vui Lòng Nhập Trường Này';
        }       
    }
}
Validator.isEmail1= function(select){
    return {
        select: select,
        check: function(input_of_form){
            let checkEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return checkEmail.test(input_of_form) ? undefined : '⚠️Vui Lòng Nhập Email Chính Xác'
        }
    }
}
Validator.isPassWord1 = function(select,len){
    return {
        select: select,
        check: function(input_of_form){
            return input_of_form.length >= len ? undefined : `⚠️Mật Khẩu Tối Thiểu ${len} Ký Tự`;
        }
    }
}
Validator.isRepertPW1= function(select,isTruePassword){
    return {
        select: select,
        check: function(input_of_form){
            return input_of_form ===  isTruePassword() ? undefined : '⚠️Vui Lòng Nhập Lại Mật Khẩu Chính Xác';
        }
    }
}
Validator.isNumberPhone = function(select){
    return {
        select: select,
        check: function(input_of_form){
            return Number.isFinite(+input_of_form) ? undefined : 'Vui Lòng Nhập Đúng SDT';
        }
    }
}
// ĐÓng Mở Form 
let btnLogin = document.querySelector('.cong_cu>a');
let formQal = document.querySelector('.form_qal1');
let formLogin = document.querySelector('.form_qal2');
let close_form = document.querySelectorAll('.close_form1');
let overlay = document.querySelector('.overlay');
let btn_create_cv = document.querySelector(".create_cv");
let spanLogin = document.querySelector(".footer1 span");
let spanSignin = document.querySelector(".footer2 span");
let btn_dangnhap = formLogin.querySelector("#dangki2"); 
let option_user = document.querySelector(".option_user");
let dropdown_menu = document.querySelector(".dropdown-menu");
let logined = false;
btnLogin.onclick = function(){
    formLogin.style.display = 'block';
    overlay.style.display = 'block';
    let inputs = formLogin.querySelectorAll("input");
    inputs.forEach(el=>{
        el.value = "";
    })
}
let tkhoan;
let password;
let userIdnow; 
btn_dangnhap.onclick = function(){
    tkhoan = formLogin.querySelector("#email2").value;
    password = formLogin.querySelector("#password2").value;
    if(tkhoan && password){
        user = {
            Email : tkhoan,
            Password : password
        }
        console.log(user);
        fetch("http://localhost:5028/api/NguoiDung/Login",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json" // Định dạng nội dung JSON
                },
                body: JSON.stringify(user)
            }
        ).then(responsive=>{
            return responsive.json();
        })
        .then(data=>{
            console.log("Response từ server:", data);
            localStorage.setItem("userIdnow", data.userId);
            alert("Đăng Nhập Thành Công");
            logined = "true";
            btnLogin.style.display = 'none';
            option_user.style.display = 'block';
            formLogin.style.display = 'none';
            overlay.style.display = 'none';
        })
        .catch(error=>{
            alert("Tài Khoản Hoặc Mật Khẩu chưa chính xác");
        })
    }
    else{
        alert("Bạn Chưa Nhập Đủ Thông Tin");
    }
}
option_user.onclick = function(){
    dropdown_menu.classList.toggle("hidden");
}
spanSignin.onclick = function(){
    formQal.style.display = 'block';
    overlay.style.display = 'block';
    formLogin.style.display = 'none';
}
spanLogin.onclick = function(){
    formQal.style.display = 'none';
    overlay.style.display = 'block';
    formLogin.style.display = 'block';
}
close_form.forEach(close=>{
    close.onclick = function(){
        formQal.style.display = 'none';
        overlay.style.display = 'none';
        formLogin.style.display = 'none';
    }
})
console.log(logined);
btn_create_cv.onclick = (event)=>{
    // event.stopPropagation();
    if(!logined){
        let inputs = formLogin.querySelectorAll("input");
        inputs.forEach(el=>{
            el.value = "";
        })
        formQal.style.display = 'none';
        overlay.style.display = 'block';
        formLogin.style.display = 'block';
    }
    else{
        window.location.href="./createcv.html";
    }
}

let update_name = document.querySelector(".update_name");
let update_password = document.querySelector(".update_password");
let form_setpassword = document.querySelector(".form-setpassword");
let form_setNameUser = document.querySelector(".form-container"); 
let close_tab = document.querySelectorAll(".close-tab");
update_name.onclick = () =>{
    form_setNameUser.classList.toggle("hidden");
    form_setpassword.classList.add("hidden");
    dropdown_menu.classList.add("hidden");

}

update_password.onclick = () =>{
    form_setpassword.classList.toggle("hidden");
    form_setNameUser.classList.add("hidden");
    dropdown_menu.classList.add("hidden");

}
close_tab.forEach(el=>{
    el.onclick = () =>{
        el.parentElement.classList.add("hidden");
    }
})

let logout = document.querySelector(".logout");
logout.onclick = ()=>{
    localStorage.setItem("userIdnow",null);
    logined = false;
    btnLogin.style.display = "block";
    option_user.style.display = "none";
    dropdown_menu.style.display = "none";
}
