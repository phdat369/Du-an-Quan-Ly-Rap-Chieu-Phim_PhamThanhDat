let movies = JSON.parse(localStorage.getItem("movies")) || [
    {
        id: 1,
        title: "Dune: Part Two",
        titleVi: "Dune: Hành Tinh Cát - Phần 2",
        genres: "Hành động, Viễn tưởng",
        duration: 166,
        releaseDate: "01/03/2024",
        status: 1,
        videoTrailer: "https://www.youtube.com/embed/_YUzQa_1RCE",
        posterUrl: "https://dunenewsnet.com/wp-content/uploads/2024/01/Dune-Part-Two-Movie-Posters-final-feature.jpg",
        poster3x4: "https://i.redd.it/5938pz4qcsic1.jpeg",
        description: "Tiếp nối phần trước, Paul Atreides hợp nhất với Fremen để trả thù gia tộc Harkonnen và đối mặt với số phận của vũ trụ.",
        ticketPrice: 95000
    },
    {
        id: 2,
        title: "Kung Fu Panda 4",
        titleVi: "Kung Fu Panda 4",
        genres: "Hoạt hình, Hài",
        duration: 94,
        releaseDate: "08/03/2024",
        status: 1,
        videoTrailer: "https://www.youtube.com/embed/_inKs4eeHiI",
        posterUrl: "https://bloganchoi.com/wp-content/uploads/2023/11/phim-chieu-rap-thang-3.jpg",
        poster3x4: "https://static.khenphim.com/khenohim_media/2024/03/Kung-Fu-Panda-4-pic1-poster_KP.webp",
        description: "Po tiếp tục hành trình trở thành Chiến binh Rồng, đối mặt với thế lực mới và tìm người kế nhiệm.",
        ticketPrice: 90000
    },
    {
        id: 3,
        title: "Godzilla x Kong: The New Empire",
        titleVi: "Godzilla x Kong: Đế Chế Mới",
        genres: "Hành động, Viễn tưởng",
        duration: 115,
        releaseDate: "29/03/2024",
        status: 1,
        videoTrailer: "https://www.youtube.com/embed/lV1OOlGwExM",
        posterUrl: "https://preview.redd.it/godzilla-x-kong-the-new-empire-poster-spoilers-for-those-v0-hhyu44mulmqc1.jpeg?auto=webp&s=2182ef01a56628c05d81c701f0f073114e60dbd5",
        poster3x4: "https://m.media-amazon.com/images/M/MV5BMTY0N2MzODctY2ExYy00OWYxLTkyNDItMTVhZGIxZjliZjU5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        description: "Godzilla và Kong hợp sức chống lại mối đe dọa mới từ lòng đất.",
        ticketPrice: 98000
    },
    {
        id: 4,
        title: "Mai",
        titleVi: "Mai",
        genres: "Tâm lý, Tình cảm",
        duration: 120,
        releaseDate: "10/02/2024",
        status: 1,
        videoTrailer: "https://www.youtube.com/embed/HXWRTGbhb4U",
        posterUrl: "https://cdn-i.doisongphapluat.com.vn/resize/UyS5Ytevv36xFohX5MxN5vDPqNYzbNrV0/media/trieu-phuong-linh/2024/02/20/sau-10-ngay-cong-chieu-phim-mai-bat-ngo-tung-poster-dac-biet2.jpg",
        poster3x4: "https://cdn-images.vtv.vn/562122370168008704/2023/11/28/photo-1-17011453442011344132442.jpg",
        description: "Câu chuyện về một người phụ nữ mạnh mẽ đối mặt với những biến cố trong cuộc sống.",
        ticketPrice: 80000
    },
    {
        id: 5,
        title: "Exhuma",
        titleVi: "Exhuma: Quật mộ Trùng Ma",
        genres: "Kinh dị, Bí ẩn",
        duration: 134,
        releaseDate: "15/03/2024",
        status: 1,
        videoTrailer: "https://www.youtube.com/embed/j_6_wLF1pDg",
        posterUrl: "https://cdn.tienphong.vn/images/a6bf4f60924201126af6849ca45a3980fa203d1491ffdb7873afceec6f8aeab7d678182f7222dac1d1517461fd98182bef7fac24e09a503edafa1a1a01f310e793eaf3ee60feb5b70ab6d9b0341ade0f/exhuma-2024-horror-review-5773.jpg",
        poster3x4: "https://upload.wikimedia.org/wikipedia/vi/1/13/Exhuma_film_poster.jpg",
        description: "Một nhóm chuyên gia phong thủy khai quật mộ cổ và đối mặt với lời nguyền đáng sợ.",
        ticketPrice: 88000
    }
];
let statusFilm = document.getElementById("status_film");
let nameFilmHot = document.getElementById("name_film_hot");
let pictureFilmHot = document.getElementById("picture_film_hot");
let descriptionFimlHot = document.getElementById("description_film_hot");
let btnLogin = document.getElementById("btn_login");
let firstPage = document.getElementsByClassName("first_page")[0];
btnLogin.addEventListener("click", () => {
    window.location.href = "../pages/login.html";
});
const renderFilmHot = () => {
    firstPage.innerHTML = "";
    localStorage.setItem("movies", JSON.stringify(movies));
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].status == 1) {
            firstPage.innerHTML = `
            <img src="${movies[i].posterUrl}" alt="" class="picture" id="picture_film_hot">
            <div id="note" class="note">
                <div id="status">
                    <img src="../assets/icons/icon_record.png" alt="">
                    <p id="status_film">Đang chiếu</p>
                </div>
                <h1 id="name_film_hot">${movies[i].title}</h1>
                <h3 id="description_film_hot">${movies[i].description}</h3>
                <div id="information_film">
                    <div id="book_film">
                        <button class="book_film">
                            <img src="../assets/icons/icon_ticket.png" alt="">
                            <p id="book_tickets">Đặt Vé Ngay</p>
                        </button>
                    </div>
                    <div id="trailer_film">
                        <button class="trailer" onclick = "videoTrailer(${movies[i].id})">
                            <img src="../assets/icons/icon_continue.png" alt="">
                            <p>Xem Trailer</p>
                        </button>
                    </div>
                </div>
            </div>
            `
            break;
        }
    }
}
renderFilmHot();
let bodyPage1 = document.getElementsByClassName("body_page1")[0];
const renderFilmShowing = () => {
    bodyPage1.innerHTML = `
        <div class="active_film">
            <p>Phim Đang Chiếu</p>
            <div class="see_all">
                <p>Xem tất cả</p>
                <img src="../assets/icons/icon_arow_red.png" alt="">
            </div>
        </div>
        <button class="btn" id="prev">❮</button>
        <div id="main_movie"></div>
        <button class="btn" id="next">❯</button>
    `;
    let mainMovie = document.getElementById("main_movie");
    localStorage.setItem("movies", JSON.stringify(movies));
    movies.forEach((element) => {
        if (element.status == 1) {
            let divFilm = document.createElement("div");
            divFilm.className = "film";
            divFilm.innerHTML = `
                <img src="${element.poster3x4}" alt="">
                <p class="name">${element.title}</p>
                <div class="category">
                    <i class="fa-regular fa-clock"></i>
                    <p>${element.duration} phút • ${element.genres}</p>
                </div>
                <button class="btn_buy_ticket" onclick = "btnBuyTicket()">Mua vé</button>
            `;
            mainMovie.appendChild(divFilm);
        }
    });
}
renderFilmShowing();
let mainMovie = document.getElementById("main_movie");
let btnNext = document.getElementById("next");
let btnPrev = document.getElementById("prev");
btnNext.addEventListener("click", () => {
    mainMovie.scrollLeft += 300;
});

btnPrev.addEventListener("click", () => {
    mainMovie.scrollLeft -= 300;
});
let bookTickets = document.getElementById("book_tickets");
bookTickets.addEventListener("click", () => {
    window.location.href = "../pages/login.html";
});
const btnBuyTicket = () => {
    window.location.href = "../pages/login.html";
};
let note = document.getElementById("note");
const videoTrailer = (id) => {
    movies.forEach((element) => {
        if (element.id == id) {
            let divVideo = document.createElement("div");
            divVideo.className = "video_trailer_film";
            divVideo.innerHTML = `
            <div class="video_content">
            <span class="close">X</span>
            <iframe src="${element.videoTrailer}" frameborder="0" allowfullscreen allow="autoplay" allowfullscreen></iframe>
            </div>
            `
            note.appendChild(divVideo);
            let close = divVideo.querySelector(".close");
            close.addEventListener("click", () => {
                divVideo.remove();
            });
        }
    });
}