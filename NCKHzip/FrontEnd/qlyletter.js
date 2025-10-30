let userIdnow = localStorage.getItem("userIdnow");
console.log(userIdnow);
console.log(localStorage.getItem("checkxemthemchua1"));
console.log(localStorage.getItem("statusletter"));
console.log(localStorage.getItem("IDLTcurrent"));

create_new_Letter = document.querySelector(".btn_create");
create_new_Letter.onclick = (event)=>{
    event.preventDefault(); // sử dụng vì thẻ a nó ghi đè lên sự kiện onclick 
    console.log(localStorage.getItem("checkxemthemchua1"));
    console.log(localStorage.getItem("IDLTcurrent"));
    if(localStorage.getItem("checkxemthemchua1") == "false" && localStorage.getItem("statusletter") == "add"){
        console.log("Vào Đây",localStorage.getItem("IDLTcurrent"));
        if(localStorage.getItem("IDLTcurrent") !== "undefined"){
            deleteCV(localStorage.getItem("IDLTcurrent"));
        }
    }
    localStorage.setItem("statusletter","add");
    // localStorage.setItem("checkxemthemchua",false);
    setTimeout(()=>{
        window.location.href = `http://127.0.0.1:5500/letterCV.html?0`;
    },500)
}
let container_Mailuser = document.querySelector(".contain_your_Mail");
async function deleteCV(mail_id){
    const urlremove = `http://localhost:5028/api/NguoiDung/Delete_LetterUser?mail_id=${mail_id}`;
    fetch(urlremove,{
        method: "DELETE"
    })
}
fetch(`http://localhost:5028/api/NguoiDung/AllLetter_by_ID_user?userId=${userIdnow}`)
.then(resp=>{
    return resp.json();
})
.then(data=>{
    console.log(data);
    data.forEach(mail=>{
        container_Mailuser.innerHTML += `<div idcv="${mail.mail_id}" class="profile-card l-2">
                <div class="box-in4CV">
                    <h3 class="profile-name">${mail.head}</h3>
                </div>
                <div class="menu-card">
                    <i class="fa-solid fa-ellipsis"></i>
                </div>

                <div class="dropdown hidden">
                    <div class="menu-item repair">
                        <i class="fa-solid fa-pen"></i>
                        Sửa
                    </div>
                    <div class="menu-item consult">
                        <i class="fa-regular fa-eye"></i>
                        Xem
                    </div>
                    <div class="menu-item remove">
                        <i class="fa-regular fa-trash-can"></i>
                        Xóa
                    </div>
                    <div class="menu-item cancel">
                        <i class="fa-solid fa-ban"></i>
                        Hủy
                    </div>
                </div>
            </div>`
    })
    let profile_cards = document.querySelectorAll(".profile-card")
    let dropdown = document.querySelectorAll(".dropdown");
    let menu_cards = document.querySelectorAll(".menu-card");
    return Promise.resolve([dropdown,menu_cards,profile_cards]);
})
.then(qal=>{
    let list_profile_card = document.querySelectorAll(".profile-card");
    qal[2].forEach(elem=>{
        let cancel_menu = elem.querySelector(".menu-item.cancel");
        let remove_card = elem.querySelector(".menu-item.remove");
        let update_card = elem.querySelector(".menu-item.repair");
        cancel_menu.onclick = ()=>{
            elem.querySelector(".dropdown").classList.add("hidden");
        }
        remove_card.onclick = () =>{
            console.log(elem.getAttribute("idcv"));
            deleteCV(elem.getAttribute("idcv"));
            elem.remove();
        }
        update_card.onclick = ()=>{
            let APIgetdetailCV = `http://localhost:5028/api/NguoiDung/GetDetailLetter_byUser_n_Mailid?userid=${userIdnow}&idcv=${elem.getAttribute("idcv")}`;
            console.log(elem.getAttribute("idcv"));
            fetch(APIgetdetailCV, {
                method: 'GET'
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json(); // Chuyển đổi phản hồi sang JSON
                })
                .then(data => {
                    console.log('Dữ liệu nhận được Khi Chọn Card CV:', data); // In dữ liệu ra console
                    localStorage.setItem("statusletter","update");
                    window.location.href = `http://127.0.0.1:5500/letterCV.html?${data.mail_id}`;
                })
                .catch(error=> {
                    console.log("Người Dùng Này Chưa Tạo CV nào");
                });
        }
    })
    console.log(qal[0])
    qal[0].forEach(el=>{
        el.onclick = (event)=>{
            event.stopPropagation();
        }
    })
    console.log(qal[1])
    qal[1].forEach(btn=>{
        btn.onclick = (event)=>{
            event.stopPropagation();
            qal[1].forEach(btn=>{
                btn.nextElementSibling.classList.add("hidden");
            })
            btn.nextElementSibling.classList.remove("hidden");
        }
    })
    list_profile_card.forEach(ele=>{
        ele.onclick = ()=>{
            if(localStorage.getItem("checkxemthemchua1") == "false" && localStorage.getItem("statusletter") == "add"){
                if(localStorage.getItem("IDLTcurrent") !== "undefined"){
                    deleteCV(localStorage.getItem("IDLTcurrent"));
                }
            }
            let ApiDetailLetter = `http://localhost:5028/api/NguoiDung/GetDetailLetter_byUser_n_Mailid?userid=${userIdnow}&idcv=${ele.getAttribute("idcv")}`;
            fetch(ApiDetailLetter,{
                method: 'GET'
            })
            .then(res=>{
                if (!res.ok) {
                    throw new Error('Network res was not ok');
                }
                return res.json(); // Chuyển đổi phản hồi sang JSON
            })
            .then(dat=>{
                localStorage.setItem("statusletter","update");
                window.location.href = `http://127.0.0.1:5500/letterCV.html?${dat.mail_id}`;
            })
        }
    })
})


