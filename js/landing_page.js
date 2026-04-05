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
        status: 2,
        videoTrailer: "https://www.youtube.com/embed/j_6_wLF1pDg",
        posterUrl: "https://cdn.tienphong.vn/images/a6bf4f60924201126af6849ca45a3980fa203d1491ffdb7873afceec6f8aeab7d678182f7222dac1d1517461fd98182bef7fac24e09a503edafa1a1a01f310e793eaf3ee60feb5b70ab6d9b0341ade0f/exhuma-2024-horror-review-5773.jpg",
        poster3x4: "https://upload.wikimedia.org/wikipedia/vi/1/13/Exhuma_film_poster.jpg",
        description: "Một nhóm chuyên gia phong thủy khai quật mộ cổ và đối mặt với lời nguyền đáng sợ.",
        ticketPrice: 88000,
        coverage: "Normal"
    },
    {
        id: 6,
        title: "Avengers: Endgame",
        titleVi: "Avengers: Kết thúc trò chơi",
        genres: "Hành động, Viễn tưởng",
        duration: 181,
        releaseDate: "26/04/2027",
        status: 2,
        videoTrailer: "https://www.youtube.com/embed/TcMBFSGVi1c",
        posterUrl: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/7b350a2f-0b3e-4033-8125-34c4d67e3bbe/compose?aspectRatio=1.78&format=webp&width=1200",
        poster3x4: "https://images-na.ssl-images-amazon.com/images/I/81zN3O6SiCL.jpg",
        description: "Biệt đội Avengers chiến đấu trận cuối cùng để đảo ngược thảm họa do Thanos gây ra.",
        ticketPrice: 90000,
        coverage: "Hot"
    },
    {
        id: 7,
        title: "Spider-Man: Into the Spider-Verse",
        titleVi: "Avengers: Vào Vũ trụ Người Nhện",
        genres: "Hoạt hình, Hài",
        duration: 117,
        releaseDate: "14/12/2018",
        status: 1,
        videoTrailer: "https://www.youtube.com/embed/g4Hbz2jLxvQ",
        posterUrl: "https://m.media-amazon.com/images/S/pv-target-images/93b5ba1d87d2d26083b0a4c879d64f083bb46c17d3e3bebb789ae330737edf4d.jpg",
        poster3x4: "https://m.media-amazon.com/images/M/MV5BNThiZjA3MjItZGY5Ni00ZmJhLWEwN2EtOTBlYTA4Y2E0M2ZmXkEyXkFqcGc@._V1_.jpg",
        description: "Một thiếu niên trở thành Spider-Man và khám phá đa vũ trụ.",
        ticketPrice: 680000,
        coverage: "Not Popular"
    },
    {
        id: 8,
        title: "Titanic",
        titleVi: "Titanic",
        genres: "Tâm lý, Tình cảm",
        duration: 195,
        releaseDate: "19/12/1997",
        status: 1,
        videoTrailer: "https://www.youtube.com/embed/kVrqfYjkTdQ",
        posterUrl: "https://cdnmedia.baotintuc.vn/Upload/XmrgEWAN1PzjhSWqVO54A/files/2018/10/2510/titanic1.jpg",
        poster3x4: "https://upload.wikimedia.org/wikipedia/vi/a/ab/Titanic_3D_poster_Vietnam.jpg",
        description: "Câu chuyện tình yêu bi kịch trên con tàu Titanic định mệnh.",
        ticketPrice: 30000,
        coverage: "Normal"
    },
    {
        id: 9,
        title: "The Conjuring",
        titleVi: "The Conjuring",
        genres: "Kinh dị, Bí ẩn",
        duration: 112,
        releaseDate: "19/07/2028",
        status: 1,
        videoTrailer: "https://www.youtube.com/embed/ejMMn0t58Lc",
        posterUrl: "https://www.theconjuringmovie.com/images/share.jpg",
        poster3x4: "https://m.media-amazon.com/images/I/81g-KXatZcL._AC_UF894,1000_QL80_.jpg",
        description: "Cặp vợ chồng trừ tà điều tra một ngôi nhà bị ám.",
        ticketPrice: 36000,
        coverage: "Hot"
    },
    {
        id: 10,
        title: "1917",
        titleVi: "1917",
        genres: "Lịch sử, Tài liệu",
        duration: 119,
        releaseDate: "25/12/2019",
        status: 1,
        videoTrailer: "https://www.youtube.com/embed/YqNYrYUiMfg",
        posterUrl: "https://cdn-images.vtv.vn/2020/2/6/910e40a2-e90b-402b-adf5-f200ef52d4df-158097498462218144568.jpeg",
        poster3x4: "https://m.media-amazon.com/images/M/MV5BYzkxZjg2NDQtMGVjMy00NWZkLTk0ZDEtZWE3NDYwYjAyMTg1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        description: "Hai binh lính thực hiện nhiệm vụ sinh tử trong Thế chiến I.",
        ticketPrice: 18000,
        coverage: "Not Popular"
    },
    {
        id: 11,
        title: "Rocky",
        titleVi: "Rocky",
        genres: "Thể thao, Võ thuật",
        duration: 120,
        releaseDate: "21/11/1976",
        status: 1,
        videoTrailer: "https://www.youtube.com/embed/3VUblDwa648",
        posterUrl: "https://www.hollywoodreporter.com/wp-content/uploads/2015/11/rocky_pub01_-_h_2015.jpg",
        poster3x4: "https://m.media-amazon.com/images/I/51BQVK34JWL._AC_UF1000,1000_QL80_.jpg",
        description: "Một võ sĩ vô danh có cơ hội thay đổi cuộc đời.",
        ticketPrice: 10000,
        coverage: "Normal"
    },
    {
        id: 12,
        title: "Deadpool",
        titleVi: "Deadpool",
        genres: "18+, Người lớn",
        duration: 108,
        releaseDate: "12/02/2027",
        status: 1,
        videoTrailer: "https://www.youtube.com/embed/Xithigfg7dA",
        posterUrl: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/8aafac1e-c525-485a-8c6a-c50d10c518ae/compose?aspectRatio=1.78&format=webp&width=1200",
        poster3x4: "https://m.media-amazon.com/images/M/MV5BNzY3ZWU5NGQtOTViNC00ZWVmLTliNjAtNzViNzlkZWQ4YzQ4XkEyXkFqcGc@._V1_.jpg",
        description: "Siêu anh hùng “lầy lội” với phong cách hài hước và bạo lực.",
        ticketPrice: 29000,
        coverage: "Hot"
    },
    {
        id: 13,
        title: "Parasite",
        titleVi: "Parasite",
        genres: "Tâm lý, Tình cảm",
        duration: 132,
        releaseDate: "30/05/2019",
        status: 1,
        videoTrailer: "https://www.youtube.com/embed/isOGD_7hNIY",
        posterUrl: "https://media.baohungyen.vn/upload/image/201905/medium/22223_parastiehanquoc_20190526172748.png",
        poster3x4: "https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_QL75_UX190_CR0,0,190,281_.jpg",
        description: "Gia đình nghèo dần xâm nhập vào gia đình giàu có.",
        ticketPrice: 71000,
        coverage: "Not Popular"
    },
    {
        id: 14,
        title: "The Dark Knight",
        titleVi: "The Dark Knight",
        genres: "Hành động, Viễn tưởng",
        duration: 152,
        releaseDate: "18/07/2008",
        status: 1,
        videoTrailer: "https://www.youtube.com/embed/EXeTwQWrcwY",
        posterUrl: "https://dailycollegian.com/wp-content/uploads/2022/04/dark-knight-1.jpeg",
        poster3x4: "https://preview.redd.it/whatre-ur-thoughts-on-the-dark-knight-is-it-still-the-v0-z19ndjd7m2ac1.jpeg?width=640&crop=smart&auto=webp&s=3c664143924ecfb217ab708407259da6000f9108",
        description: "Batman đối đầu Joker – kẻ gây hỗn loạn Gotham.",
        ticketPrice: 69000,
        coverage: "Normal"
    },
    {
        id: 15,
        title: "Frozen",
        titleVi: "Frozen",
        genres: "Hoạt hình, Hài",
        duration: 102,
        releaseDate: "27/11/2026",
        status: 1,
        videoTrailer: "https://www.youtube.com/embed/TbQm5doF_Uc",
        posterUrl: "https://lumiere-a.akamaihd.net/v1/images/hb_frozenanniversaryrefresh_fallback_2326_v2_197763c9_b7fcb848.jpeg?region=0%2C0%2C2048%2C878",
        poster3x4: "https://lumiere-a.akamaihd.net/v1/images/p_frozen_18373_3131259c.jpeg?region=0%2C0%2C540%2C810",
        description: "Công chúa Elsa với sức mạnh băng giá học cách kiểm soát bản thân.",
        ticketPrice: 111000,
        coverage: "Hot"
    },
    {
        id: 16,
        title: "Hereditary",
        titleVi: "Hereditary",
        genres: "Kinh dị, Bí ẩn",
        duration: 127,
        releaseDate: "08/06/2027",
        status: 1,
        videoTrailer: "https://www.youtube.com/embed/V6wWKNij_1M",
        posterUrl: "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/d8971a4f-7353-488a-9740-3f0d89057081/c0628665-9492-4552-a583-f0ead9f9318b?host=wbd-images.prod-vod.h264.io&partner=beamcom",
        poster3x4: "https://upload.wikimedia.org/wikipedia/en/d/d9/Hereditary.png",
        description: "Một gia đình bị ám bởi thế lực siêu nhiên đáng sợ.",
        ticketPrice: 59000,
        coverage: "Hot"
    },
    {
        id: 17,
        title: "The Social Network",
        titleVi: "The Social Network",
        genres: "Lịch sử, Tài liệu",
        duration: 120,
        releaseDate: "01/10/2010",
        status: 1,
        videoTrailer: "https://www.youtube.com/embed/lB95KLmpLR4",
        posterUrl: "https://statcdn.fandango.com/MPX/image/NBCU_Fandango/371/427/thumb_073EF397-5029-4363-BB50-9CC78D874D3D.jpg",
        poster3x4: "https://minhthi.net/wp-content/uploads/2013/11/the-social-network_movie-poster-01.jpg",
        description: "Câu chuyện về việc tạo ra Facebook và những tranh chấp pháp lý.",
        ticketPrice: 20000,
        coverage: "Normal"
    },
    {
        id: 18,
        title: "Gladiator",
        titleVi: "Gladiator",
        genres: "Lịch sử, Tài liệu",
        duration: 155,
        releaseDate: "05/05/2000",
        status: 1,
        videoTrailer: "https://www.youtube.com/embed/P5ieIbInFpg",
        posterUrl: "https://www.studioremarkable.com/wp-content/uploads/2000/05/Gladiator-Still.jpg",
        poster3x4: "https://m.media-amazon.com/images/I/912Ht9rUWWS._AC_UF894,1000_QL80_.jpg",
        description: "Một vị tướng La Mã trở thành đấu sĩ để trả thù.",
        ticketPrice: 67000,
        coverage: "Not Popular"
    },
    {
        id: 19,
        title: "Rush",
        titleVi: "Rush",
        genres: "Thể thao, Võ thuật",
        duration: 123,
        releaseDate: "27/09/2026",
        status: 1,
        videoTrailer: "https://www.youtube.com/embed/4XA73ni9eVs",
        posterUrl: "https://play-lh.googleusercontent.com/proxy/fF0MAZpk-CWwNRT14IvALONks9U3oIjxGCD0fNWFs9oJR23kJi9K7WQ8_9VIanV28GyyFzNVKqdgXfgVf2MAO_iTYIa8dqTbcIrs63n_RxLhQHLr_tWiTHY=s1920-w1920-h1080",
        poster3x4: "https://upload.wikimedia.org/wikipedia/vi/6/60/Rush_movie_poster.jpg",
        description: "Cuộc cạnh tranh khốc liệt giữa 2 tay đua F1.",
        ticketPrice: 99000,
        coverage: "Hot"
    },
    {
        id: 20,
        title: "The Hangover",
        titleVi: "The Hangover",
        genres: "Hoạt hình, Hài",
        duration: 100,
        releaseDate: "05/06/2009",
        status: 1,
        videoTrailer: "https://www.youtube.com/embed/tlize92ffnY",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMjIwMjIxMDY3Nl5BMl5BanBnXkFtZTgwNzMwNjMwMjE@._V1_.jpg",
        poster3x4: "https://media.illinois.edu/wp-content/uploads/2025/01/Hangover-400.jpg",
        description: "Một nhóm bạn tỉnh dậy sau tiệc độc thân mà không nhớ chuyện gì.",
        ticketPrice: 199000,
        coverage: "Not Popular"
    },
    {
        id: 21,
        title: "A Quiet Place",
        titleVi: "A Quiet Place",
        genres: "Kinh dị, Bí ẩn",
        duration: 90,
        releaseDate: "06/04/2018",
        status: 1,
        videoTrailer: "https://www.youtube.com/embed/WR7cc5t7tv8",
        posterUrl: "https://tuanlalarme.com/wp-content/uploads/2024/07/quiet-place-1635256853250.jpg",
        poster3x4: "https://upload.wikimedia.org/wikipedia/en/a/a0/A_Quiet_Place_film_poster.png",
        description: "Gia đình sống trong thế giới bị săn đuổi bởi quái vật nhạy âm thanh.",
        ticketPrice: 159000,
        coverage: "Normal"
    },
    {
        id: 22,
        title: "Emergency Act 19",
        titleVi: "Emergency Act 19",
        genres: "Hoạt hình, Hài",
        duration: 107,
        releaseDate: "19/07/2002",
        status: 1,
        videoTrailer: "https://www.youtube.com/embed/YxcHnPQhXDo",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMTMyNzQxMjc3OF5BMl5BanBnXkFtZTcwNjQ4MTI2NQ@@._V1_QL75_UX500_CR0,25,500,281_.jpg",
        poster3x4: "https://upload.wikimedia.org/wikipedia/en/8/82/Emergency_Act_19_film_poster.jpg",
        description: "Một đạo luật cấm ca sĩ khiến xã hội hỗn loạn.",
        ticketPrice: 47000,
        coverage: "Normal"
    },
    {
        id: 23,
        title: "96 Minutes",
        titleVi: "96 Minutes",
        genres: "Hành động, Viễn tưởng",
        duration: 118,
        releaseDate: "05/09/2027",
        status: 1,
        videoTrailer: "https://www.youtube.com/embed/sPasJKsvz5A",
        posterUrl: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/3/image/1800x/71252117777b696995f01934522c402d/9/6/96m_ovposter_1920x1080.jpg",
        poster3x4: "https://m.media-amazon.com/images/M/MV5BOGVmODUyODEtNjgwYi00ZDQ5LTk0ODAtMGY3MzczNDM2NTQzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        description: "Cuộc khủng hoảng trên tàu cao tốc với thời gian sinh tử.",
        ticketPrice: 67000,
        coverage: "Hot"
    },
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
    localStorage.setItem("movies", JSON.stringify(movies));
    firstPage.innerHTML = `<button class="btn" id="prev1">❮</button>
    <button class="btn" id="next1">❯</button>`;
    movies.forEach((element) => {
        if(element.coverage == "Hot") {
            let divFilmHot = document.createElement("div");
            divFilmHot.className = "film_hot_poster";
            let now = new Date();
            let datePremiere = new Date(+element.releaseDate.split("/")[2],+element.releaseDate.split("/")[1]-1,+element.releaseDate.split("/")[0]);
            let dateNow = new Date(now.getFullYear(),now.getMonth()-1,now.getDate());
            divFilmHot.innerHTML = `
            <img src="${element.posterUrl}" alt="" class="picture" >
            <div class="note">
                <div class="status">
                    <img src="../assets/icons/icon_record.png" alt="">
                    <p>Phim Nổi Bật</p>
                </div>
                <div class="countdown">
                    <p>Bắt đầu sau: ${Math.ceil((datePremiere - dateNow) / (1000 * 60 * 60 * 24))} ngày</p>
                </div>
                <h1>${element.title}</h1>
                <h3>${element.description}</h3>
                <div class="information_film">
                    <div>
                        <button class="book_film">
                            <img src="../assets/icons/icon_ticket.png" alt="">
                            <p class="book_tickets" onclick = "window.location.href = '../pages/login.html'">Đặt Vé Ngay</p>
                        </button>
                    </div>
                    <div>
                        <button class="trailer" onclick = "videoTrailer(${element.id})">
                            <img src="../assets/icons/icon_continue.png" alt="">
                            <p>Xem Trailer</p>
                        </button>
                    </div>
                </div>
            </div>
            `;
            firstPage.prepend(divFilmHot);
        }
    });
}
renderFilmHot();
let btnNext1 = document.getElementById("next1");
let btnPrev1 = document.getElementById("prev1");
btnNext1.addEventListener("click", () => {
    firstPage.scrollLeft += firstPage.clientWidth;
});

btnPrev1.addEventListener("click", () => {
    firstPage.scrollLeft -= firstPage.clientWidth;
});
let bodyPage1 = document.getElementsByClassName("body_page1")[0];
const renderFilmShowing = () => {
    bodyPage1.innerHTML = `
        <div class="active_film">
            <p>Phim Đang Chiếu</p>
            <div class="see_all">
                <div class="show_all">
                        <p>Xem tất cả</p>
                        <img src="../assets/icons/icon_arow_red.png" alt="">
                    </div>
                    <div class="remove_show_all">
                        <p>Thu lại</p>
                        <img src="../assets/icons/icon_arrow_flipped.png" alt="">
                    </div>
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
const btnBuyTicket = () => {
    window.location.href = "../pages/login.html";
};
const videoTrailer = (id) => {
    movies.forEach((element) => {
        if (element.id == id) {
            let divVideo = document.createElement("div");
            divVideo.className = "video_trailer_film";
            divVideo.innerHTML = `
            <div class="video_content">
            <span class="close">X</span>
            <iframe src="${element.videoTrailer}" frameborder="0"   allowfullscreen></iframe>
            </div>
            `
            firstPage.appendChild(divVideo);
            let close = divVideo.querySelector(".close");
            close.addEventListener("click", () => {
                divVideo.remove();
            });
        }
    });
}
let showAll = document.getElementsByClassName("show_all")[0];
let removeShowAll = document.getElementsByClassName("remove_show_all")[0];
showAll.addEventListener("click" , () => {
    mainMovie.style.flexWrap = "wrap";
    showAll.style.display = "none";
    removeShowAll.style.display = "inline";
    btnNext.style.display = "none";
    btnPrev.style.display = "none";
});
removeShowAll.addEventListener("click" , () => {
    mainMovie.style.flexWrap = "nowrap";
    showAll.style.display = "inline";
    removeShowAll.style.display = "none";
    btnNext.style.display = "inline";
    btnPrev.style.display = "inline";
});