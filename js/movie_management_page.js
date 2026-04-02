let movies = JSON.parse(localStorage.getItem("movies")) || [
    {
        id: 1,
        title: "Dune: Part Two",
        titleVi: "Dune: Hành Tinh Cát - Phần 2",
        genres: "Hành động, Viễn tưởng",
        duration: 166,
        releaseDate: "01/05/2026",
        status: 1,
        videoTrailer: "https://www.youtube.com/embed/_YUzQa_1RCE",
        posterUrl: "https://dunenewsnet.com/wp-content/uploads/2024/01/Dune-Part-Two-Movie-Posters-final-feature.jpg",
        poster3x4: "https://i.redd.it/5938pz4qcsic1.jpeg",
        description: "Tiếp nối phần trước, Paul Atreides hợp nhất với Fremen để trả thù gia tộc Harkonnen và đối mặt với số phận của vũ trụ.",
        ticketPrice: 95000,
        coverage: "Hot"
    },
    {
        id: 2,
        title: "Kung Fu Panda 4",
        titleVi: "Kung Fu Panda 4",
        genres: "Hoạt hình, Hài",
        duration: 94,
        releaseDate: "08/07/2026",
        status: 1,
        videoTrailer: "https://www.youtube.com/embed/_inKs4eeHiI",
        posterUrl: "https://bloganchoi.com/wp-content/uploads/2023/11/phim-chieu-rap-thang-3.jpg",
        poster3x4: "https://static.khenphim.com/khenohim_media/2024/03/Kung-Fu-Panda-4-pic1-poster_KP.webp",
        description: "Po tiếp tục hành trình trở thành Chiến binh Rồng, đối mặt với thế lực mới và tìm người kế nhiệm.",
        ticketPrice: 90000,
        coverage: "Hot"
    },
    {
        id: 3,
        title: "Godzilla x Kong: The New Empire",
        titleVi: "Godzilla x Kong: Đế Chế Mới",
        genres: "Hành động, Viễn tưởng",
        duration: 115,
        releaseDate: "29/09/2026",
        status: 1,
        videoTrailer: "https://www.youtube.com/embed/lV1OOlGwExM",
        posterUrl: "https://preview.redd.it/godzilla-x-kong-the-new-empire-poster-spoilers-for-those-v0-hhyu44mulmqc1.jpeg?auto=webp&s=2182ef01a56628c05d81c701f0f073114e60dbd5",
        poster3x4: "https://m.media-amazon.com/images/M/MV5BMTY0N2MzODctY2ExYy00OWYxLTkyNDItMTVhZGIxZjliZjU5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        description: "Godzilla và Kong hợp sức chống lại mối đe dọa mới từ lòng đất.",
        ticketPrice: 98000,
        coverage: "Normal"
    },
    {
        id: 4,
        title: "Mai",
        titleVi: "Mai",
        genres: "Tâm lý, Tình cảm",
        duration: 120,
        releaseDate: "10/04/2026",
        status: 1,
        videoTrailer: "https://www.youtube.com/embed/HXWRTGbhb4U",
        posterUrl: "https://cdn-i.doisongphapluat.com.vn/resize/UyS5Ytevv36xFohX5MxN5vDPqNYzbNrV0/media/trieu-phuong-linh/2024/02/20/sau-10-ngay-cong-chieu-phim-mai-bat-ngo-tung-poster-dac-biet2.jpg",
        poster3x4: "https://cdn-images.vtv.vn/562122370168008704/2023/11/28/photo-1-17011453442011344132442.jpg",
        description: "Câu chuyện về một người phụ nữ mạnh mẽ đối mặt với những biến cố trong cuộc sống.",
        ticketPrice: 80000,
        coverage: "Hot"
    },
    {
        id: 5,
        title: "Exhuma",
        titleVi: "Exhuma: Quật mộ Trùng Ma",
        genres: "Kinh dị, Bí ẩn",
        duration: 134,
        releaseDate: "15/12/2026",
        status: 1,
        videoTrailer: "https://www.youtube.com/embed/j_6_wLF1pDg",
        posterUrl: "https://cdn.tienphong.vn/images/a6bf4f60924201126af6849ca45a3980fa203d1491ffdb7873afceec6f8aeab7d678182f7222dac1d1517461fd98182bef7fac24e09a503edafa1a1a01f310e793eaf3ee60feb5b70ab6d9b0341ade0f/exhuma-2024-horror-review-5773.jpg",
        poster3x4: "https://upload.wikimedia.org/wikipedia/vi/1/13/Exhuma_film_poster.jpg",
        description: "Một nhóm chuyên gia phong thủy khai quật mộ cổ và đối mặt với lời nguyền đáng sợ.",
        ticketPrice: 88000,
        coverage: "Normal"
    }
];
let rightPage = document.getElementsByClassName("right_page")[0];
const renderDataFilm = () => {
    localStorage.setItem("movies" , JSON.stringify(movies));
    let quantityAllFilm = movies.length;
    let countFilmScreened = 0;
    let countFilmIsShowing = 0;
    let countFilmCommingSoon = 0;
    movies.forEach((element) => {
        if(element.status == 0) {
            countFilmScreened++;
        }
        else if (element.status == 1) {
            countFilmIsShowing++;
        }
        else if (element.status == 2) {
            countFilmCommingSoon++;
        }
    });
    rightPage.innerHTML = `
    <div class="head">
        <div class="title">
            <h1>Quản lý danh sách phim</h1>
            <p>Xem, chỉnh sửa và quản lý tất cả các phim có trên hệ thống.</p>
        </div>
        <div class="input_search_and_add">
            <div class="search_film">
                <img src="../assets/icons/icon_search.png" alt="">
                <input type="text" id="search" placeholder="Tìm tên phim...">
            </div>
            <div class="add_film">
                <img src="../assets/icons/icon_add.png" alt="">
                <p>Thêm phim mới</p>
            </div>
        </div>
    </div>
    <div class="sort_film">
        <p id="all_film">Tất cả (${quantityAllFilm})</p>
        <p id="is_showing" class="btn_sort">Đang chiếu (${countFilmIsShowing})</p>
        <p id="coming_soon" class="btn_sort">Sắp chiếu (${countFilmCommingSoon})</p>
        <p id="screened" class="btn_sort">Đã chiếu (${countFilmScreened})</p>
    </div>
        <div class="display_film">
            <table>
                <thead>
                    <tr>
                        <th>ẢNH BÌA</th>
                        <th>TÊN PHIM</th>
                        <th class="head_category">THỂ LOẠI</th>
                        <th>THỜI LƯỢNG</th>
                        <th>NGÀY KHỞI CHIẾU</th>
                        <th>TRẠNG THÁI</th>
                        <th>THAO TÁC</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="7">
                            <div class="pages_number">
                                <p class="footer_display">Hiển thị <span class="pages">1-5</span> trên <span
                                        class="quantity_film">24</span> phim</p>
                                <div class="btn_skip_pages">
                                    <button class="btn_change_page"><img src="../assets/icons/icon_prev.png"
                                            alt=""></button>
                                    <button class="btn_change_page">1</button>
                                    <button class="btn_change_page">2</button>
                                    <button class="btn_change_page">3</button>
                                    <button class="btn_change_page">...</button>
                                    <button class="btn_change_page">5</button>
                                    <button class="btn_change_page"><img src="../assets/icons/icon_next.png"
                                            alt=""></button>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
    `;
    let tbody = document.getElementsByTagName("tbody")[0];
    movies.forEach((element) => {
        let tr = document.createElement("tr");
        let category1 = element.genres.split(", ")[0];
        let category2 = element.genres.split(", ")[1];
        let statusFilm = "";
        if (element.status == 0) {
            statusFilm = "Đã chiếu";
        }
        else if (element.status == 1) {
            statusFilm = "Đang chiếu";
        }
        else if (element.status == 2) {
            statusFilm = "Sắp chiếu";
        }
        tr.innerHTML = `
                        <td><img src="${element.poster3x4}" alt="" class="avatar_film"></td>
                        <td class="name_film">
                            <p>${element.title}</p>
                            <p>${element.titleVi}</p>
                        </td>
                        <td class="category_film">
                            <p>${category1}</p>
                            <p>${category2}</p>
                        </td>
                        <td class="duration_film">
                            <p>${element.duration} phút</p>
                        </td>
                        <td class="premiere_date_film">
                            <p>${element.releaseDate}</p>
                        </td>
                        <td class="status_film">
                            <p class="status_is_showing">${statusFilm}</p>
                        </td>
                        <td class="operation_film">
                            <div class="btn_fix">
                                <p class="update" onclick="updateDataFilm(${element.id})"><img src="../assets/icons/icon_update.png" alt=""></p>
                                <p class="delete" onclick="deleteDataFilm(${element.id})"><img src="../assets/icons/icon_delete.png" alt=""></p>
                            </div>
                        </td>
        `;
        tbody.appendChild(tr);
    });
}
renderDataFilm();
let btnAddFilm = document.getElementsByClassName("add_film")[0];
let taskAddFilm = document.getElementsByClassName("add_new_film")[0];
let overlay = document.getElementsByClassName("overlay")[0];
let taskUpdateFilm = document.getElementsByClassName("update_film")[0];
let btnLogout = document.getElementById("img_logout");
btnLogout.addEventListener("click" , () => {
    window.location.href = "../pages/login.html";
});
btnAddFilm.addEventListener("click", () => {
    taskAddFilm.style.display = "inline";
    overlay.style.display = "inline"
    let closeTabAdd = document.getElementById("close_tab_add");
    closeTabAdd.addEventListener("click", () => {
        taskAddFilm.style.display = "none";
        overlay.style.display = "none";
    });
});
let inputNameFilmAdd = document.getElementById("name_film");
let inputCategoryFilmAdd = document.getElementById("category_film");
let inputDurationFilmAdd = document.getElementById("duration_film");
let inputPremiereFilmAdd = document.getElementById("premiere_film");
let inputStatusFilmAdd = document.getElementById("status_film");
let inputPriceFilmAdd = document.getElementById("price");
let inputPoster3x4FilmAdd = document.getElementById("poster3x4");
let inputPosterURLFilmAdd = document.getElementById("poster_url");
let inputTrailerFilmAdd = document.getElementById("trailer_film");
let inputConverageFilmAdd = document.getElementById("converage_film");
let inputDescriptionFilmAdd = document.getElementById("description_film");
const addFilm = () => {
    if(inputStatusFilmAdd.value == "Đã chiếu") {
        inputStatusFilmAdd.value = 0;
    }
    else if(inputStatusFilmAdd.value == "Đang chiếu") {
        inputStatusFilmAdd.value = 1;
    }
    else if(inputStatusFilmAdd.value == "Sắp chiếu") {
        inputStatusFilmAdd.value = 2;
    }
    let newObject = {
        id: Date.now(),
        title: inputNameFilmAdd.value,
        titleVi: "",
        genres: inputCategoryFilmAdd.value,
        duration: inputDurationFilmAdd.value,
        releaseDate: inputPremiereFilmAdd.value,
        status: inputStatusFilmAdd.value,
        videoTrailer: inputTrailerFilmAdd.value,
        posterUrl: inputPosterURLFilmAdd.value,
        poster3x4: inputPoster3x4FilmAdd.value,
        description: inputDescriptionFilmAdd.value,
        ticketPrice: inputPriceFilmAdd.value,
        coverage: inputConverageFilmAdd.value
    }
    movies.push(newObject);
    renderDataFilm();
    inputNameFilmAdd.value = "";
    inputCategoryFilmAdd.value = "";
    inputDurationFilmAdd.value = "";
    inputPremiereFilmAdd.value = "";
    inputStatusFilmAdd.value = "";
    inputTrailerFilmAdd.value = "";
    inputPosterURLFilmAdd.value = "";
    inputPoster3x4FilmAdd.value = "";
    inputDescriptionFilmAdd.value = "";
    inputPriceFilmAdd.value = "";
    inputConverageFilmAdd.value = "";
}
let btnCommitAddFilm = document.getElementsByClassName("btn_commit")[0];
let btnCancelAddFiml = document.getElementsByClassName("btn_cancel")[0];
btnCommitAddFilm.addEventListener("click" , addFilm);
btnCancelAddFiml.addEventListener("click" , () => {
    inputNameFilmAdd.value = "";
    inputCategoryFilmAdd.value = "";
    inputDurationFilmAdd.value = "";
    inputPremiereFilmAdd.value = "";
    inputStatusFilmAdd.value = "";
    inputTrailerFilmAdd.value = "";
    inputPosterURLFilmAdd.value = "";
    inputPoster3x4FilmAdd.value = "";
    inputDescriptionFilmAdd.value = "";
    inputPriceFilmAdd.value = "";
    inputConverageFilmAdd.value = "";
})
const updateDataFilm = (id) => {
      let newArrayUpdate = movies.find((element) => {
        return element.id == id ;
      });
      if (newArrayUpdate) {

      }
}
const deleteDataFilm = (id) => {}
