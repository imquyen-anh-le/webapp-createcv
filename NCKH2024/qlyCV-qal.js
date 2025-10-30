userIdnow = localStorage.getItem("userIdnow");
console.log(userIdnow);
let idcv = 1;
let container_itemCV = document.querySelector(".contain_your_CV");
let btn_create = document.querySelector(".btn_create>a");

console.log(localStorage.getItem("status"));
// let card = `<div class="profile-card col">
//                 <div class="menu-card">...</div>
//                 <img src="" alt="Profile Picture" class="profile-image">
//                 <h2 class="profile-name">Nguyen Van A</h2>
//                 <p class="profile-title">Fullstack Developer</p>
//             </div>`
let APIgetCV = `http://localhost:5028/api/NguoiDung/AllCV_by_ID_user?userid=${userIdnow}`;
async function deleteCV(idcv){
    let in4id_ofCVremove;
    fetch(`http://localhost:5028/api/NguoiDung/GetIn4idbyIDCV?idcv=${idcv}`)
    .then(res=>{
        return res.json();
    })
    .then(dat=>{
        in4id_ofCVremove = dat.in4id;
        console.log(in4id_ofCVremove);
        const endpoint = `http://localhost:5028/api/NguoiDung/Delete_DetailsCVbyID?idcv=${idcv}&in4id=${in4id_ofCVremove}`;
            fetch(endpoint,{
                method: "DELETE",
            })
        }) 
    .catch(error=>{
        console.log("Xóa Không Thành Công");
    })
}
fetch(APIgetCV)
.then(responsive=>{
    return responsive.json();
})
.then(data=>{
    console.log("Các Khóa Học Của User này : ",data);
    data.forEach(dat=>{
        let name_user = dat.fullname;
        if(dat.fullname.split("").length > 25){
            name_user = dat.fullname.substring(0,24) + " ...";
        }
        container_itemCV.innerHTML += `<div idcv="${dat.idcv}" class="profile-card l-2">
                <img alt="Chưa Có Ảnh" class="profile-image">
                <div class="box-in4CV">
                    <h3 class="profile-name">${name_user}</h3>
                    <p class="profile-title">${dat.position}</p>
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
            let handleCard = container_itemCV.querySelector(`div[idcv="${dat.idcv}"]`);
            // Kiểm tra xem dat.img có tồn tại không
            if (dat.img) {
                if(dat.img.includes(".jpg") || dat.img.includes(".png")){
                    handleCard.querySelector("img").src = `http://localhost:5028/UploadedImages/${dat.img}`;
                }
                else{
                    handleCard.querySelector("img").src = "./img/8a9d6e85a93b8b3a8002896da71882a3.jpg";
                }
            } else {
                // Nếu không có ảnh, có thể set ảnh mặc định
                handleCard.querySelector("img").src = "./img/8a9d6e85a93b8b3a8002896da71882a3.jpg";
            }
    })
    let profile_cards = document.querySelectorAll(".profile-card")
    let dropdown = document.querySelectorAll(".dropdown");
    let menu_cards = document.querySelectorAll(".menu-card");
    let list_cardCV = document.querySelectorAll(".profile-card");
    if(localStorage.getItem("status") == "add" && localStorage.getItem("checkxemthemchua") == "false"){
        console.log("Vào đây");
        list_cardCV.forEach(ele=>{
            if(ele.getAttribute("idcv") == localStorage.getItem("IDCVcurrent")){
                ele.style.display = "none";
            }
        })
    }
    return Promise.resolve([dropdown,menu_cards,profile_cards]);
})
.then(da=>{
    let list_profile_card = document.querySelectorAll(".profile-card");
    da[2].forEach(elem=>{
        let cancel_menu = elem.querySelector(".menu-item.cancel");
        let remove_card = elem.querySelector(".menu-item.remove");
        let update_card = elem.querySelector(".menu-item.repair");
        let consult_card = elem.querySelector(".menu-item.consult"); 
        cancel_menu.onclick = ()=>{
            elem.querySelector(".dropdown").classList.add("hidden");
        }
        remove_card.onclick = () =>{
            console.log(elem.getAttribute("idcv"));
            deleteCV(elem.getAttribute("idcv"));
            elem.remove();
        }
        // kiểm tra nếu check mà true thì có nghĩa nó lưu r thôi
        update_card.onclick = ()=>{
            if(localStorage.getItem("checkxemthemchua") == "false" && localStorage.getItem("status") == "add"){
                localStorage.setItem("checkxemthemchua",false);
                deleteCV(localStorage.getItem("IDCVcurrent"));
            }
            let APIgetdetailCV = `http://localhost:5028/api/NguoiDung/user/getDetailsCVbyID?userid=${userIdnow}&idcv=${elem.getAttribute("idcv")}`;
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
                    localStorage.setItem("status","update");
                    window.location.href = `http://127.0.0.1:5500/createcv.html?${data.cv.idcv}`;
                })
                .catch(error=> {
                    console.log("Người Dùng Này Chưa Tạo CV nào");
                });
        }
        // 
        consult_card.onclick = ()=>{
            let card = consult_card.closest(".profile-card").getAttribute("idcv");
            if(localStorage.getItem("checkxemthemchua") == "false" && localStorage.getItem("status") == "add"){
                localStorage.setItem("checkxemthemchua",false);
                deleteCV(localStorage.getItem("IDCVcurrent"));
            }
            let APIgetdetailCV = `http://localhost:5028/api/NguoiDung/user/getDetailsCVbyID?userid=${userIdnow}&idcv=${card}`;
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
                    localStorage.setItem("status","update");
                    // window.location.href = `http://127.0.0.1:5500/createcv.html?${data.cv.idcv}`;
                })
                .catch(error=> {
                    console.log("Người Dùng Này Chưa Tạo CV nào");
                });
        }
    })
    console.log(da[0])
    da[0].forEach(el=>{
        el.onclick = (event)=>{
            event.stopPropagation();
        }
    })
    console.log(da[1])
    da[1].forEach(btn=>{
        btn.onclick = (event)=>{
            event.stopPropagation();
            da[1].forEach(btn=>{
                btn.nextElementSibling.classList.add("hidden");
            })
            btn.nextElementSibling.classList.remove("hidden");
        }
    })

    list_profile_card.forEach(card=>{
        // Gửi yêu cầu GET
        card.onclick = ()=>{           
            if(localStorage.getItem("checkxemthemchua") == "false" && localStorage.getItem("status") == "add"){
                localStorage.setItem("checkxemthemchua",false);
                deleteCV(localStorage.getItem("IDCVcurrent"));
            }
            let APIgetdetailCV = `http://localhost:5028/api/NguoiDung/user/getDetailsCVbyID?userid=${userIdnow}&idcv=${card.getAttribute("idcv")}`;
            console.log(card.getAttribute("idcv"));
            fetch(APIgetdetailCV, {
                method: 'GET'
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Lỗi');
                    }
                    return response.json(); // Chuyển đổi phản hồi sang JSON
                })
                .then(data => {
                    console.log('Dữ liệu nhận được Khi Chọn Card CV:', data); // In dữ liệu ra console
                    localStorage.setItem("status","update");
                    window.location.href = `http://127.0.0.1:5500/createcv.html?${data.cv.idcv}`;
                })
                .catch(error=> {
                    console.log("Người Dùng Này Chưa Tạo CV nào");
                });
        }
    })
})
function base64ToBlob1(base64, contentType = '') {
    const byteCharacters = atob(base64.split(',')[1]); // Loại bỏ "data:image/png;base64," ở đầu
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
        const slice = byteCharacters.slice(offset, offset + 512);
        const byteNumbers = Array.from(slice).map((char) => char.charCodeAt(0));
        byteArrays.push(new Uint8Array(byteNumbers));
    }
    return new Blob(byteArrays, { type: contentType });             
}
console.log("------- Lúc chưa click");
console.log(localStorage.getItem("checkxemthemchua"));
console.log(localStorage.getItem("IDCVcurrent"));


btn_create.onclick = (event)=>{
    event.preventDefault(); // sử dụng vì thẻ a nó ghi đè lên sự kiện onclick 
    console.log(localStorage.getItem("checkxemthemchua"));
    console.log(localStorage.getItem("IDCVcurrent"));
    console.log(localStorage.getItem("status"));
    if(localStorage.getItem("checkxemthemchua") == "false" && localStorage.getItem("status") == "add"){
        console.log("Vào Đây",localStorage.getItem("IDCVcurrent"));
        localStorage.setItem("checkxemthemchua",false);
        if(localStorage.getItem("IDCVcurrent") !== "undefined"){
            deleteCV(localStorage.getItem("IDCVcurrent"));
        }
    }
    localStorage.setItem("status","add");
    // localStorage.setItem("checkxemthemchua",false);
    setTimeout(()=>{
        window.location.href = `http://127.0.0.1:5500/createcv.html?0`;
    },500)
    //nguyên do ở đây , khi nhấn thì cho nó xóa luôn trong giao diện mỗi card cv đều có id tương ứng 
}
//Bước này dùng để lấy ra all nội dung khi người dùng click vào mẫu đã chọn 
 


