// mỗi bức thư thì nó sẽ được chia làm các phần chính 

const industry = `http://localhost:5028/api/NguoiDung/Industries`;
const template = `http://localhost:5028/api/NguoiDung/TemplateLetters`;
let paper = document.querySelector(".paper")
let tempalteletterCV = document.querySelector(".tempalteletterCV");
let userIdnow = localStorage.getItem("userIdnow");

let headingLetter = paper.querySelector(".headingletter");
let contentLetter = paper.querySelector(".content");
let initialLetter = paper.querySelector(".initial");

console.log(userIdnow)
fetch(industry)
.then(responsive=>{
    return responsive.json();
})
.then(data=>{
    console.log(data);
    data.forEach(category=>{
        let qal = `<div class="categoryTemp">
                    <div idind="${category.idind}">
                        <p>⭐ Mẫu Thư xin việc ngành ${category.nameind}</p>
                        <ul class="hidden"></ul> 
                        <div class="hehe"></div>
                    </div>
                </div>`
        tempalteletterCV.innerHTML += qal;
    })
    fetch(template)
    .then(respon=>{
        return respon.json();
    })
    .then(data=>{
        data.forEach(mau=>{
            let qal = `<li idtemp="${mau.idtemp}">${mau.nametemp}</li>`
            document.querySelector(`.categoryTemp>div[idind="${mau.idind}"]>ul`).innerHTML += qal;
        })
        let lis = document.querySelectorAll(".tempalteletterCV li");
        lis.forEach(li=>{
            li.onclick = ()=>{
                headingLetter.innerHTML = "";
                headingLetter.setAttribute("contenteditable","true")
                contentLetter.innerHTML = "";
                contentLetter.setAttribute("contenteditable","true")
                initialLetter.innerHTML = "";  
                initialLetter.setAttribute("contenteditable","true")
                let id = li.getAttribute("idtemp");
                data.forEach(mau=>{
                    if(mau.idtemp == id){
                        headingLetter.innerHTML += `<b>Tiêu Đề :</b> ${mau.heading}`;
                        contentLetter.innerHTML += `<b>Nội Dung : <br></b>\n
                            ${mau.content}                                                
                        `;
                        initialLetter.innerHTML += `${mau.initial}`;
                    }
                })
            }
        })

    })
    let title = document.querySelectorAll(".categoryTemp p")
    title.forEach(p=>{
        p.onclick = ()=>{
            p.nextElementSibling.classList.toggle("hidden");
        }
    })
})
let btn_font_left = document.querySelector('.slide_font>button:first-child');
let btn_font_right = document.querySelector('.slide_font>button:last-child');
let list_font = document.querySelector('.list_fonts');
let khungnhin_f = document.querySelector('.khungnhin_f');
let fonts = document.querySelectorAll('.list_fonts div');
let box_font = document.querySelector(".window_font");
let font = list_font.querySelectorAll('li');
let check = 0;
btn_font_left.onclick = function(e){
    if(check < 1){
        btn_font_left.style.opacity = '0.4';
        e.preventDefault();
    }
    else{
        btn_font_right.style.opacity = '1';
        check--;
    }
    console.log(check);
    list_font.style.marginLeft = `-${check * khungnhin_f.offsetWidth}px`;
}

btn_font_right.onclick = function(e){
    if(check > fonts.length - 2){
        btn_font_right.style.opacity = '0.4';
        e.preventDefault();
    }
    else{
        btn_font_left.style.opacity = '1';
        check++;
    }
    console.log(check);
    list_font.style.marginLeft = `-${check * khungnhin_f.offsetWidth}px`;
}
let font_size = document.querySelectorAll(".font_size input");

font_size.forEach(function(ele){
    ele.onchange = function(e){
        let papers = document.querySelector('.paper');
        font_size.forEach(function(ele){
            ele.checked = false;
        })
        ele.checked = true;
        papers.style.fontSize = e.target.nextElementSibling.getAttribute("data_size");
    }
})
font.forEach(function(ele){
    ele.onclick = function(e){
        let papers = document.querySelectorAll('.paper');
        papers.forEach(function(ele){
            ele.style.fontFamily = e.target.style.fontFamily;
        })
    }
})

let btnfont = document.querySelector(".congcu2>ul>li:first-child");
btnfont.onclick = ()=>{
    box_font.classList.toggle("hidden");
}

let currentURL = window.location.href;
console.log(currentURL);
console.log(readMailIDinURL(currentURL));
let IDCVwhenChoose = readMailIDinURL(currentURL);
console.log(userIdnow);
console.log(IDCVwhenChoose);
localStorage.setItem("checkxemthemchua1",false);
if(readMailIDinURL(currentURL) == 0){
    localStorage.setItem("IDLTcurrent",undefined);
}
else{
    if(readMailIDinURL(currentURL) !== undefined){
        localStorage.setItem("IDLTcurrent",IDCVwhenChoose);
    }
}
console.log(localStorage.getItem("IDLTcurrent"))
function readMailIDinURL(url){
    let handle = String(url);
    let idcvNOW;
    for(let i = 0 ; i < handle.length ; i++){
        if(handle[i] == "?"){
            idcvNOW = handle.substring(i+1);
            return idcvNOW;
        }
    }
}
if(localStorage.getItem("IDLTcurrent") !== "undefined"){
    console.log("Đây : ",localStorage.getItem("IDLTcurrent"))
    renderLetter(false);
}
console.log(localStorage.getItem("statusletter"));
if(localStorage.getItem("statusletter") == "update"){
    let btnsave = document.querySelector(".congcu2>ul>li:nth-child(3)");
    let btnadd = document.querySelector(".congcu2>ul>li:nth-child(4)");
    btnsave.classList.remove("hidden");
    btnadd.classList.add("hidden");
}
else{
    let btnsave = document.querySelector(".congcu2>ul>li:nth-child(3)");
    let btnadd = document.querySelector(".congcu2>ul>li:nth-child(4)");
    btnadd.classList.remove("hidden");
    btnsave.classList.add("hidden");
}
function renderLetter(check){
    if(!check){
        let mail_id = localStorage.getItem("IDLTcurrent");
        let url = `http://localhost:5028/api/NguoiDung/GetDetailLetter_byUser_n_Mailid?userid=${userIdnow}&idcv=${mail_id}`
        fetch(url)
        .then(resp=>{
            return resp.json();
        })
        .then(dat=>{    
            console.log(dat);
            let letter = document.querySelector(".paper");
            let headLetter = letter.querySelector(".headingletter");
            let content = letter.querySelector(".content");
            let initial = letter.querySelector(".initial");
            headLetter.innerHTML = dat.head;
            headLetter.setAttribute("contenteditable","true");
            content.innerHTML = dat.content;
            content.setAttribute("contenteditable","true");
            initial.innerHTML = dat.signatureLetter;
            initial.setAttribute("contenteditable","true");  
            paper.style.fontSize = dat.font_size;
            paper.style.fontFamily = dat.font_family        
        })
    }
}

let btn_addnewLetter = document.querySelector(".addnewLetter");
let btn_saveLetter = document.querySelector(".saveLetter");
let btn_downLetter = document.querySelector(".downLetter");

async function addNewLetter(){
        let urlAdd = `http://localhost:5028/api/NguoiDung/LetterCV`;
            fetch(urlAdd,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userid: userIdnow,
                    head: headingLetter.textContent,
                    content: contentLetter.textContent,
                    signatureLetter: initialLetter.textContent,
                    font_size : paper.style.fontSize ? paper.style.fontSize : "13.5px",
                    font_family : paper.style.fontFamily ? paper.style.fontFamily : "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
                })
            })
            .then(respo=>{
                return respo.json();
            })
            .then(dataqal=>{
                console.log(dataqal);
                // alert("Thêm Dữ liệu Thành Công !");
            })
            .catch(error=>{
                console.log("Lỗi Khi Thêm Dữ Liệu");
            })
}
async function updateMyLetter(){
    updateurl = `http://localhost:5028/api/NguoiDung/Update_LetterUser`;
    fetch(updateurl,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            mail_id: localStorage.getItem("IDLTcurrent"),
            userid: userIdnow,
            head: headingLetter.innerText,
            content: contentLetter.innerText,
            signatureLetter: initialLetter.innerText,
            font_size : paper.style.fontSize ? paper.style.fontSize : "13.5px",
            font_family : paper.style.fontFamily ? paper.style.fontFamily : "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
        })
    })
    .then(res=>{
        return res.json();
    })
    .then(dat=>{
        console.log(JSON.stringify({
            mail_id: localStorage.getItem("IDLTcurrent"),
            userid: userIdnow,
            head: headingLetter.innerText,
            content: contentLetter.innerText,
            signatureLetter: initialLetter.innerText
        }));
        // alert("Cập Nhật Thư Xin Việc Thành Công");
    })
    .catch(error=>{
        alert("Lỗi !");
    })
}
btn_addnewLetter.onclick = ()=>{
    console.log(headingLetter.innerText);
    console.log(contentLetter.innerText);
    console.log(initialLetter.innerText);
    localStorage.setItem("checkxemthemchua1",true);
    if(headingLetter.innerText === "" || contentLetter.innerText === "" || initialLetter.innerText === ""){
        alert("Vui lòng điền đủ thông tin ở các phần của thư xin Việc");
    }
    else{
        addNewLetter();
    }
}

btn_saveLetter.onclick = ()=>{
    updateMyLetter();
}
// Setting khug chat của chatbot
async function AutoSaveCv(){
    contentYourCv = {
        model : "",
        font : "",
        fontSize : "",
        color : "",
        uploadImg : "",
        userprofile : {
            name : "",
            position : "",
        },
        information : {
            phone : "",
            address : "",
            github : "",
            email : "",
            birth : "",
            imgSize : "",
            container : ""
        },
        overview : [
            // {
            //     content : "",
            //     container : ""
            // }
        ],
        workexperience : [
            // {
            //     time: "",
            //     company_name : "",
            //     position : "",
            //     content : "",container : ""
            // },
            // {
            //     time: "",
            //     company_name : "",
            //     position : "",
            //     content : "",container : ""
            // }
        ],
        education : [
            // {
            //     time: "",
            //     school_name : "",
            //     content : "",container : ""
            // },
        ],
        skill : [
            // {
            //     skill_name : "",
            //     content : "",container : ""
            // }
        ],
        project : [
            // {
            //     project_name : "",
            //     time : "",
            //     client : "",
            //     descriptions : "",
            //     number_of_members : "",
            //     position : "",
            //     responsibilities : "",
            //     technology_in_use : "",container : ""
            // }
        ],
        awards : [
            // {
            //     award_name : "",
            //     time : "",
            //     content : "",container : ""
            // } 
        ],
        goals : [
            // {
            //     term : "",
            //     content : "",container : ""
            // }
        ],
        language : [
            // {
            //     language_name : "",
            //     level : "",
            //     content : "",container : ""
            // }
        ],
        certificate : [
            // {
            //     time : "",
            //     content : "",container : ""
            // }
        ],
        another : [
            // {
            //     part_name : "",
            //     title : "",
            //     content : "",container : ""
            // }
        ],
    }  
    if(headingLetter.innerText == "" || contentLetter.innerText == "" || initialLetter.innerText == ""){
        return;
    }
    if(IDCVwhenChoose == 0){
        console.warn("Trước ( mới )",contentYourCv);
        await addNewLetter();
        console.warn("Sau ( mới )",contentYourCv)
        let allCV = `http://localhost:5028/api/NguoiDung/AllLetter_by_ID_user?userid=${userIdnow}`;
        let res = await fetch(allCV);
        let dat = await res.json();
        IDCVwhenChoose = dat[dat.length - 1].mail_id;
        localStorage.setItem("IDLTcurrent",dat[dat.length - 1].mail_id);
        console.log(localStorage.getItem("IDLTcurrent"));
    }
    else{
        if(localStorage.getItem("IDLTcurrent") !== "undefined"){
            console.warn("Trước",contentYourCv);
            console.warn("Sau",contentYourCv);
            console.log(localStorage.getItem("IDLTcurrent"));
            updateMyLetter();
        }
    }
}

// Chức năng tải xuống 
let downLoad_pdf = document.querySelector(".congcu2>ul>li:nth-child(1)");

function default_event(e){
    e.preventDefault();
}

btn_downLetter.addEventListener("click",default_event);
btn_downLetter.onclick = function(){
    let yourCVs = document.querySelectorAll(".paper");
    let container = document.createElement("div");
    console.log(yourCVs);
    yourCVs.forEach(function(ele) {
        let clone = ele.cloneNode(true);
        container.appendChild(clone);
    });

    const options = {
        marginTop: 0,
        paddingTop : 0,
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    console.log(container);
    html2pdf().set(options).from(container).save();
}

setInterval(AutoSaveCv,1500);
// document.addEventListener("DOMContentLoaded", function () {
//     function applyChatStyles() {
//         const messenger = document.querySelector("df-messenger");
//         if (messenger) {
//             setTimeout(() => {
//                 const chat = messenger.shadowRoot?.querySelector("df-messenger-chat");
//                 const chatWrapper = chat?.shadowRoot?.querySelector(".chat-wrapper");
//                 if (chatWrapper) {
//                     chatWrapper.style.bottom = "10px";
//                     chatWrapper.style.right = "90px";
//                     console.log("CSS Applied: bottom 10px, right 90px"); // Debug log
//                 }
//             }, 300); // Giảm thời gian delay để phản hồi nhanh hơn
//         }
//     }

//     function setupClickListener() {
//         const messenger = document.querySelector("df-messenger");
//         if (messenger) {
//             const widgetIcon = messenger.shadowRoot?.querySelector("button#widgetIcon");
//             if (widgetIcon) {
//                 widgetIcon.addEventListener("click", applyChatStyles);
//                 console.log("Listener added to widgetIcon"); // Debug log
//             } else {
//                 console.warn("widgetIcon not found, retrying...");
//                 setTimeout(setupClickListener, 100); // Nếu chưa có, thử lại sau 500ms
//             }
//         }
//     }

//     // Kiểm tra và thêm sự kiện khi trang tải xong
//     setupClickListener();
// });




