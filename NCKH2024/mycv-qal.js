let imgs = document.querySelectorAll('.photo_strip>div');
let photoStrip = document.querySelector('.photo_strip');
let viewFrame = document.querySelector('.view_frame');

// FORM ĐKI
let object= {};

function validate1(input_of_form,messError,spanError,rule){
    // duyệt qua từng rule của input hiện tại onblur và lấy ra messError
    let qal = object[rule.select];
    console.log(qal);
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
            console.log(rule,isFormValid);
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
            let getalluser = `http://localhost:5028/api/NguoiDung/AllUsers`;
            let APIuser = "http://localhost:5028/api/NguoiDung/AddNewUser";
            fetch(getalluser)
            .then(respon =>{
                return respon.json();
            })
            .then(data=>{
                console.log(data);
                let qall = true;
                console.log(formCv.querySelector("#email1").value)
                for(let user of data){
                    console.log(user.email);
                    if(user.email == formCv.querySelector("#email1").value){
                        qall = false;
                        break;
                    }
                }
                console.log(qall);
                if(qall){
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
                    console.log("okk");
                }
                else{
                    alert("Email đã tồn tại");
                    formCv.querySelector("#email1").value = "";
                }
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
let update_name = document.querySelector(".update_name");
let update_password = document.querySelector(".update_password");
let form_setpassword = document.querySelector(".form-setpassword");
let form_setNameUser = document.querySelector(".form-container"); 
let close_tab = document.querySelectorAll(".close-tab");
let nameUser = dropdown_menu.querySelector(".name_user span");
let btn_create_new_letter = document.querySelector(".shadow>a");
let btnchange_name_user = document.querySelector("#changeUsernameForm>button[type=submit]");
let btnchange_passwordof_user = document.querySelector("#passwordChangeForm>button[type=submit]");
btnLogin.onclick = function(){
    formLogin.style.display = 'block';
    overlay.style.display = 'block';
    let inputs = formLogin.querySelectorAll("input");
    inputs.forEach(el=>{
        el.value = "";
    })
}
formLogin.querySelectorAll("input").forEach(input=>{
    catchError(input,"⚠️ Vui Lòng Điền Thông Tin Vào Trường Này");
})
console.log(localStorage.getItem("userIdnow"));
btn_dangnhap.onclick = function(){
    let tkhoan;
    let password;
    let userIdnow; 
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
            userIdnow = data.userId;
            localStorage.setItem("status","add");
            localStorage.setItem("logined",true);
            alert("Đăng Nhập Thành Công");

            btnLogin.style.display = 'none';
            option_user.style.display = 'block';
            formLogin.style.display = 'none';
            overlay.style.display = 'none';       
            //confirmPassword
            nameUser.innerText = data.name;
            //newUsername
            
        })
        .catch(error=>{
            alert("Tài Khoản Hoặc Mật Khẩu chưa chính xác");
        })
    }
    else{
        alert("Bạn Chưa Nhập Đủ Thông Tin");
    }
}
console.log(localStorage.getItem("logined"))
if(localStorage.getItem("logined") == "true"){
    let url = `http://localhost:5028/api/NguoiDung/${localStorage.getItem("userIdnow")}`
    btnLogin.style.display = 'none';
    option_user.style.display = 'block';
    formLogin.style.display = 'none';
    overlay.style.display = 'none';
    fetch(url)
    .then(res=>{
        return res.json();
    })
    .then(dat=>{
        nameUser.innerText = dat.name;
    })
}

option_user.onclick = function(){
    dropdown_menu.classList.toggle("hidden");
    catchError(newUsername,"⚠️ Vui Lòng điền tên bạn muốn đổi");
            // Đổi tên user
            btnchange_name_user.onclick = (e) =>{
                console.log("Hello");
                // e.stopPropagation();
                let urln = `http://localhost:5028/api/NguoiDung/Update_NameUser`;   
                let newUsername = document.querySelector("#newUsername");
                if(newUsername.value == ""){
                    newUsername.style.borderColor = "red";
                    newUsername.nextElementSibling.innerHTML = "⚠️ Vui Lòng điền tên bạn muốn đổi";
                }
                else{
                    nameUser.innerText = newUsername.value;
                    fetch(urln,{
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            userId: localStorage.getItem("userIdnow"),
                            name: newUsername.value,
                            email: "string",
                            password: "string",
                            role: "string"
                        })
                    })
                    .then(respon=>{
                        return respon.json();
                    })
                    .then(data=>{
                        form_setNameUser.classList.add("hidden");
                        alert("Đổi Tên Người Dùng Thành Công");
                    })
                    console.log(JSON.stringify({
                        userId: localStorage.getItem("userIdnow"),
                        name: newUsername.value,
                        email: "string",
                        password: "string",
                        role: "string"
                    }));
                }
            }

            let list_input = form_setpassword.querySelectorAll("input[type=password]");
            list_input.forEach(elem=>{
                catchError(elem,"⚠️ Vui Lòng điền thông tin vào trường này !");
            })
            // Đổi Mật Khẩu 
            btnchange_passwordof_user.onclick = () =>{
                let urlp = `http://localhost:5028/api/NguoiDung/Update_PasswordUser`;
                let urluser = `http://localhost:5028/api/NguoiDung/${localStorage.getItem("userIdnow")}`;
                let newPasswordUser = document.querySelector("#confirmPassword");
                let newpassword = document.querySelector("#newPassword");
                let currentPassword = document.querySelector("#currentPassword");

                let checkk = true;
                console.log(list_input);
                let mess_error = "";
                list_input.forEach(ele=>{
                    if(ele.value == ""){
                        ele.style.borderColor = "red";
                        mess_error = "⚠️ Vui Lòng điền đầy đủ thông tin";
                        checkk = false;
                    }
                    else{
                        if(ele.value.length < 6){
                            console.log(ele.value.length);
                            ele.style.borderColor = "red";
                            mess_error = "⚠️ Mật Khẩu yêu cầu 6 ký tự";
                            checkk = false;
                        }
                        else{
                            ele.style.borderColor = "blue";
                            mess_error = "";
                        }
                    }
                    ele.nextElementSibling.innerHTML = mess_error;
                })
                console.log(checkk);
                if(checkk){
                    fetch(urluser)
                    .then(res=>{
                        return res.json();
                    })
                    .then(data=>{
                        console.log(currentPassword.value);
                        console.log(data);
                        let checklayer2 = true;
                        let errormess = "";
                        if(data.password !== currentPassword.value){
                            checklayer2 = false;
                            errormess = "⚠️ Mật Khẩu Hiện Tại Chưa Chính Xác !";
                        }
                        if(newpassword.value !== newPasswordUser.value){
                            checklayer2 = false;
                            errormess = "⚠️ Mật khẩu mới và xác nhận mật khẩu không khớp. Vui lòng kiểm tra lại !";
                        }
                        if(checklayer2){
                            fetch(urlp,{
                                method: "PUT",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    userId: localStorage.getItem("userIdnow"),
                                    name: "string",
                                    email: "string",
                                    password: newPasswordUser.value,
                                    role: "string"
                                })
                            })
                            .then(res=>{
                                return res.json();
                            })
                            .then(dat=>{
                                alert("Đổi mật Khẩu thành công !");
                                form_setpassword.classList.add("hidden");
                            })
                        }
                        else{
                            alert(errormess);
                        }
                    })
                }
            }
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
btn_create_cv.onclick = (event)=>{
    // event.stopPropagation();
    if(localStorage.getItem("logined") !== "true"){
        let inputs = formLogin.querySelectorAll("input");
        inputs.forEach(el=>{
            el.value = "";
        })
        formQal.style.display = 'none';
        overlay.style.display = 'block';
        formLogin.style.display = 'block';
    }
    else{
        window.location.href="http://127.0.0.1:5500/createcv.html?0";
    }
}
btn_create_new_letter.onclick = (event)=>{
    // event.stopPropagation();
    if(localStorage.getItem("logined") !== "true"){
        let inputs = formLogin.querySelectorAll("input");
        inputs.forEach(el=>{
            el.value = "";
        })
        formQal.style.display = 'none';
        overlay.style.display = 'block';
        formLogin.style.display = 'block';
    }
    else{
        window.location.href="./letterCV.html?0";
    }
}
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
    localStorage.setItem("logined",false)
    btnLogin.style.display = "block";
    option_user.style.display = "none";
    dropdown_menu.classList.add("hidden");
    form_setpassword.classList.add("hidden");
    form_setNameUser.classList.add("hidden");
}

function catchError(input,error){
    input.onblur = ()=>{
        if(input.value == ""){
            input.style.borderColor = "red"; 
            input.nextElementSibling.innerHTML = error;
        }
        // console.log("Ok");
    }
    input.oninput = ()=>{
        input.style.borderColor = "blue"; 
        input.nextElementSibling.innerHTML = "";
    }
}
let khung_nhin = document.querySelector(".khung_nhin");
let daianh =  document.querySelector(".daianh");
let list_video = document.querySelectorAll(".daianh>div");
let btn_left = document.querySelector(".list_video_yt>button:first-child");
let btn_right = document.querySelector(".list_video_yt>button:last-child");

let count = 0;
let marginL = 0;
btn_left.onclick = () =>{
    if(count > 0){
        btn_right.classList.remove("hidden");
        marginL = marginL + 384;
        count--;
        console.log(count);
        daianh.style.marginLeft = `${marginL}px`;
    }
    else{
        btn_left.classList.add("hidden");
    }
}
btn_right.onclick = () =>{
    if(count < list_video.length - 3){
        btn_left.classList.remove("hidden");
        marginL = marginL - 384;
        count++;
        console.log(count);
        daianh.style.marginLeft = `${marginL}px`;
    }
    else{
        btn_right.classList.add("hidden");
    }
}

let btn_2_createCV = document.querySelector(".taoCV");
let btn_2_createLetterCV = document.querySelector(".taoThu");

btn_2_createCV.onclick = () =>{
    if(localStorage.getItem("logined") !== "true"){
        let inputs = formLogin.querySelectorAll("input");
        inputs.forEach(el=>{
            el.value = "";
        })
        formQal.style.display = 'none';
        overlay.style.display = 'block';
        formLogin.style.display = 'block';
    }
    else{
        window.location.href="http://127.0.0.1:5500/createcv.html?0";
    }
}
btn_2_createLetterCV.onclick = () =>{
    if(localStorage.getItem("logined") !== "true"){
        let inputs = formLogin.querySelectorAll("input");
        inputs.forEach(el=>{
            el.value = "";
        })
        formQal.style.display = 'none';
        overlay.style.display = 'block';
        formLogin.style.display = 'block';
    }
    else{
        window.location.href="./letterCV.html?0";
    }
}
// bug màu sắc
// bug thư khi viết dài 
// chức năng đóng mở gợi ý và mẫu thư 
