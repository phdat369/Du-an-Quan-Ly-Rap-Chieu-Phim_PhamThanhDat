let tickets = JSON.parse(localStorage.getItem("tickets")) || [
    {
        id: 1001,
        ticketCode: "VE-1001",
        customerName: "Nguyễn Văn A",
        movieId: 1,
        movieTitle: "Dune: Part Two",
        showDate: "2026-03-15",
        showTime: "18:00",
        seats: ["F12", "F13"],
        seatCount: 2,
        pricePerSeat: 90000,
        totalAmount: 180000,
        paymentMethod: 0,
        paymentStatus: true,
        createdAt: "2026-03-10T14:30:00Z",
        note: "Khách yêu cầu ghế gần lối đi",
        statusDisplay: "Đã Thanh Toán"
    },
    {
        id: 1002,
        ticketCode: "VE-1002",
        customerName: "Trần Thị B",
        movieId: 4,
        movieTitle: "Titanic",
        showDate: "2026-03-16",
        showTime: "13:30",
        seats: ["G5"],
        seatCount: 1,
        pricePerSeat: 90000,
        totalAmount: 90000,
        paymentMethod: 1,
        paymentStatus: false,
        createdAt: "2026-03-11T09:15:00Z",
        note: "",
        statusDisplay: "Chờ xử lý"
    },
    {
        id: 1003,
        ticketCode: "VE-1003",
        customerName: "Admin Chính",
        movieId: 2,
        movieTitle: "Kung Fu Panda 4",
        showDate: "2026-03-17",
        showTime: "19:00",
        seats: ["H10", "H11", "H12"],
        seatCount: 3,
        pricePerSeat: 90000,
        totalAmount: 270000,
        paymentMethod: 2,
        paymentStatus: true,
        createdAt: "2026-03-12T16:45:00Z",
        note: "Combo bắp nước tặng kèm",
        statusDisplay: "Đã Thanh Toán"
    },
    {
        id: 1004,
        ticketCode: "VE-1004",
        customerName: "Phạm Thành Đạt",
        movieId: 5,
        movieTitle: "1917",
        showDate: "2026-03-14",
        showTime: "21:45",
        seats: ["E8"],
        seatCount: 1,
        pricePerSeat: 90000,
        totalAmount: 90000,
        paymentMethod: 0,
        paymentStatus: false,
        createdAt: "2026-03-13T11:20:00Z",
        note: "Khách hủy do bận đột xuất",
        statusDisplay: "Đã hủy"
    },
];
let movies = JSON.parse(localStorage.getItem("movies"));
let webManagementFilm = document.getElementsByClassName("management_film")[0];
webManagementFilm.addEventListener("click", () => {
    window.location.href = "../pages/movie_management_page.html"
});
let quantityTicketToday = document.getElementById("quantity_ticket_today");
let quantityRevenueToday = document.getElementById("quantity_revenue_today");
let quantityTicketWait = document.getElementById("quantity_ticket_wait");
let page = 1;
let startPage;
let endPage;
let currentPage;
let ticketPerPage = 5;
let totalPage;
let tbody = document.getElementsByTagName("tbody")[0];
let usePage;
const showToastCorrect = (message1, message2) => {
    let toastBox = document.getElementById("toast");
    let div = document.createElement("div");
    div.className = "toast";
    div.innerHTML = `<img src="../assets/icons/icon_correct.png" alt="">
                     <div>
                     <p class="message_1">${message1}</p>
                     <p class="message_2">${message2}</p>
                     </div>`;
    toastBox.appendChild(div);
    setTimeout(() => {
        div.remove();
    }, 2000);
}
const showToastError = (message1, message2) => {
    let toastBox = document.getElementById("toast");
    let div = document.createElement("div");
    div.className = "toast";
    div.innerHTML = `<img src="../assets/icons/icon_error.png" alt="">
                     <div>
                     <p class="message_1">${message1}</p>
                     <p class="message_2">${message2}</p>
                     </div>`;
    toastBox.appendChild(div);
    setTimeout(() => {
        div.remove();
    }, 2000);
}
const paginationTicket = (a) => {
    currentPage = page;
    startPage = (currentPage - 1) * ticketPerPage;
    endPage = currentPage * ticketPerPage;
    let ticketInPage = a.slice(startPage, endPage);
    usePage = tickets;
    localStorage.setItem("tickets", JSON.stringify(tickets));
    tbody.innerHTML = "";
    totalPage = Math.ceil(a.length / 5);
    let sumPrice = tickets.reduce((acc,crr) => {
        return acc+=crr.totalAmount;
    },0);
    let count = 0;
    tickets.forEach((element) => {
        if (element.statusDisplay == "Chờ xử lý") {
            count++;
        }
    });
    quantityTicketToday.innerText = tickets.length;
    quantityRevenueToday.innerText = `${sumPrice.toLocaleString("vi-vn")} đ` ;
    quantityTicketWait.innerText = count;
    ticketInPage.forEach((element) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
        <td class="code_ticket">
            <p>${element.ticketCode}</p>
        </td>
        <td class="client">
            <div class="name_user_book_film">${element.customerName}</div>
        </td>
        <td class="name_film_book">
            <p>${element.movieTitle}</p>
        </td>
        <td>
            <div class="clock_book_film">${element.showDate}</div>
            <div class="date_book_film">${element.showTime}</div>
        </td>
        <td class="seat_book">
            <div>
                <p>${element.seats}</p>
            </div>
        </td>
        <td class="total_price_books">
            <p>${element.pricePerSeat.toLocaleString("vi-vn")} đ</p>
        </td>
        <td class="status_book">
            <div class = "inStatus">
                <p>${element.statusDisplay}</p>
            </div>
        </td>
        <td>
            <div class="btn_fix">
                <p class="update" onclick="updateTicket(${element.id})"><img src="../assets/icons/icon_update.png" alt=""></p>
                <p class="delete" onclick="deleteTicket(${element.id})"><img src="../assets/icons/icon_delete.png" alt=""></p>
            </div>
        </td>
        `
        tbody.appendChild(tr);
        let divStatus = tr.querySelector(".status_book div");
        if (element.statusDisplay == "Đã Thanh Toán") {
            divStatus.classList.add("paid");
        }
        else if (element.statusDisplay == "Chờ xử lý") {
            divStatus.classList.add("awaiting_processing");
        }
        else if (element.statusDisplay == "Đã hủy") {
            divStatus.classList.add("canceled");
        }
    });
}
paginationTicket(tickets);
let btnPrev = document.getElementById("btn_prev_page");
let btnNext = document.getElementById("btn_next_page");
let btnChangePage = document.getElementsByClassName("inPageChoose")[0];
let startInPage = document.getElementsByClassName("start_page")[0];
let endInPage = document.getElementsByClassName("end_page")[0];
let totalTicketAll = document.getElementsByClassName("totalTicketAll")[0];
totalTicketAll.innerText = tickets.length;
let searchTicketForNameOrCode = document.getElementById("search_ticket");
const searchTicket = () => {
    if (searchTicketForNameOrCode.value.startsWith("VE")) {
        let newArraySearch;
        if (searchTicketForNameOrCode.value != "") {
            newArraySearch = tickets.filter((element) => {
                return element.ticketCode.toLowerCase().trim().includes(searchTicketForNameOrCode.value.toLowerCase().trim());
            });
        }
        else {
            newArraySearch = JSON.parse(localStorage.getItem("tickets")) || [
                {
                    id: 1001,
                    ticketCode: "VE-1001",
                    customerName: "Nguyễn Văn A",
                    movieId: 1,
                    movieTitle: "Dune: Part Two",
                    showDate: "2026-03-15",
                    showTime: "18:00",
                    seats: ["F12", "F13"],
                    seatCount: 2,
                    pricePerSeat: 90000,
                    totalAmount: 180000,
                    paymentMethod: 0,
                    paymentStatus: true,
                    createdAt: "2026-03-10T14:30:00Z",
                    note: "Khách yêu cầu ghế gần lối đi",
                    statusDisplay: "Đã Thanh Toán"
                },
                {
                    id: 1002,
                    ticketCode: "VE-1002",
                    customerName: "Trần Thị B",
                    movieId: 4,
                    movieTitle: "Titanic",
                    showDate: "2026-03-16",
                    showTime: "13:30",
                    seats: ["G5"],
                    seatCount: 1,
                    pricePerSeat: 90000,
                    totalAmount: 90000,
                    paymentMethod: 1,
                    paymentStatus: false,
                    createdAt: "2026-03-11T09:15:00Z",
                    note: "",
                    statusDisplay: "Chờ xử lý"
                },
                {
                    id: 1003,
                    ticketCode: "VE-1003",
                    customerName: "Admin Chính",
                    movieId: 2,
                    movieTitle: "Kung Fu Panda 4",
                    showDate: "2026-03-17",
                    showTime: "19:00",
                    seats: ["H10", "H11", "H12"],
                    seatCount: 3,
                    pricePerSeat: 90000,
                    totalAmount: 270000,
                    paymentMethod: 2,
                    paymentStatus: true,
                    createdAt: "2026-03-12T16:45:00Z",
                    note: "Combo bắp nước tặng kèm",
                    statusDisplay: "Đã Thanh Toán"
                },
                {
                    id: 1004,
                    ticketCode: "VE-1004",
                    customerName: "Phạm Thành Đạt",
                    movieId: 5,
                    movieTitle: "1917",
                    showDate: "2026-03-14",
                    showTime: "21:45",
                    seats: ["E8"],
                    seatCount: 1,
                    pricePerSeat: 90000,
                    totalAmount: 90000,
                    paymentMethod: 0,
                    paymentStatus: false,
                    createdAt: "2026-03-13T11:20:00Z",
                    note: "Khách hủy do bận đột xuất",
                    statusDisplay: "Đã hủy"
                },
            ];
            paginationTicket(newArraySearch);
            usePage = newArraySearch;
        }
    }
    else {
        let newArraySearch1;
        if (searchTicketForNameOrCode.value != "") {
            newArraySearch1 = tickets.filter((element) => {
                return element.customerName.toLowerCase().trim().includes(searchTicketForNameOrCode.value.toLowerCase().trim());
            });
        }
        else {
            newArraySearch1 = JSON.parse(localStorage.getItem("tickets")) || [
                {
                    id: 1001,
                    ticketCode: "VE-1001",
                    customerName: "Nguyễn Văn A",
                    movieId: 1,
                    movieTitle: "Dune: Part Two",
                    showDate: "2026-03-15",
                    showTime: "18:00",
                    seats: ["F12", "F13"],
                    seatCount: 2,
                    pricePerSeat: 90000,
                    totalAmount: 180000,
                    paymentMethod: 0,
                    paymentStatus: true,
                    createdAt: "2026-03-10T14:30:00Z",
                    note: "Khách yêu cầu ghế gần lối đi",
                    statusDisplay: "Đã Thanh Toán"
                },
                {
                    id: 1002,
                    ticketCode: "VE-1002",
                    customerName: "Trần Thị B",
                    movieId: 4,
                    movieTitle: "Titanic",
                    showDate: "2026-03-16",
                    showTime: "13:30",
                    seats: ["G5"],
                    seatCount: 1,
                    pricePerSeat: 90000,
                    totalAmount: 90000,
                    paymentMethod: 1,
                    paymentStatus: false,
                    createdAt: "2026-03-11T09:15:00Z",
                    note: "",
                    statusDisplay: "Chờ xử lý"
                },
                {
                    id: 1003,
                    ticketCode: "VE-1003",
                    customerName: "Admin Chính",
                    movieId: 2,
                    movieTitle: "Kung Fu Panda 4",
                    showDate: "2026-03-17",
                    showTime: "19:00",
                    seats: ["H10", "H11", "H12"],
                    seatCount: 3,
                    pricePerSeat: 90000,
                    totalAmount: 270000,
                    paymentMethod: 2,
                    paymentStatus: true,
                    createdAt: "2026-03-12T16:45:00Z",
                    note: "Combo bắp nước tặng kèm",
                    statusDisplay: "Đã Thanh Toán"
                },
                {
                    id: 1004,
                    ticketCode: "VE-1004",
                    customerName: "Phạm Thành Đạt",
                    movieId: 5,
                    movieTitle: "1917",
                    showDate: "2026-03-14",
                    showTime: "21:45",
                    seats: ["E8"],
                    seatCount: 1,
                    pricePerSeat: 90000,
                    totalAmount: 90000,
                    paymentMethod: 0,
                    paymentStatus: false,
                    createdAt: "2026-03-13T11:20:00Z",
                    note: "Khách hủy do bận đột xuất",
                    statusDisplay: "Đã hủy"
                },
            ];
        }
        paginationTicket(newArraySearch1);
        usePage = newArraySearch1;
    }
}
searchTicketForNameOrCode.addEventListener("keyup", searchTicket);
let btnBookTicket = document.getElementsByClassName("book_ticket")[0];
let overlay = document.getElementsByClassName("overlay")[0];
let taskBookTicket = document.getElementsByClassName("add_book_ticket")[0];
let btnCloseTabTicket = document.getElementsByClassName("close_tab_book_ticket")[0];
let btnCancel = document.getElementsByClassName("btn_cancel")[0];
btnCancel.addEventListener("click", () => {
    overlay.style.display = "none";
    taskBookTicket.style.display = "none";
    showToastError("Đã hủy", "Đã hủy thao tác");
});
btnBookTicket.addEventListener("click", () => {
    overlay.style.display = "inline";
    taskBookTicket.style.display = "inline";
});
btnCloseTabTicket.addEventListener("click", () => {
    overlay.style.display = "none";
    taskBookTicket.style.display = "none";
    showToastError("Đã hủy", "Đã hủy thao tác");
});
let chooseClient = document.getElementById("choose_client");
let listUser = JSON.parse(localStorage.getItem("data"));
listUser.forEach((element) => {
    let option = document.createElement("option");
    option.value = element.fullName;
    option.innerText = element.fullName;
    chooseClient.appendChild(option)
});
let chooseFilm = document.getElementById("choose_film");
let listFilmIsShowing = movies.filter((element) => {
    return element.status == 1;
});
listFilmIsShowing.forEach((element) => {
    let option = document.createElement("option");
    option.value = element.title;
    option.innerText = element.title;
    chooseFilm.appendChild(option);
});
let chooseSeat = document.getElementById("choose_seat");
let choosePaymentmethod = document.getElementById("choose_paymentmethod");
let chooseStatus = document.getElementById("choose_status");
let chooseScreeningrate = document.getElementById("choose_screeningrate");
let btnCommitBookTicket = document.getElementsByClassName("btn_commit")[0];
let priceBill = document.getElementsByClassName("price_bill")[0];
let quantityTicketBuy = document.getElementsByClassName("quantity_ticket_buy")[0];
let priceFilm = document.getElementsByClassName("price_film")[0];
const bookNewTicket = () => {
    let filmSelect = movies.find((element) => {
        return element.title == chooseFilm.value;
    });
    let max = localStorage.getItem("max") || 1005;
    let now = new Date();
    let seatSelect = chooseSeat.value.split(",").map(x => x.trim());
    let newObject = {
        id: Date.now(),
        ticketCode: `VE-${max}`,
        customerName: chooseClient.value,
        movieId: filmSelect.id,
        movieTitle: `${filmSelect.title}`,
        showDate: filmSelect.releaseDate,
        showTime: chooseScreeningrate.value,
        seats: seatSelect,
        pricePerSeat: filmSelect.ticketPrice,
        totalAmount: filmSelect.ticketPrice * seatSelect.length,
        paymentMethod: "",
        paymentStatus: true,
        createdAt: `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}T${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}Z`,
        note: "",
        statusDisplay: chooseStatus.value
    }
    if (choosePaymentmethod.value == "Tiền mặt") {
        newObject.paymentMethod = 0;
    }
    else if (choosePaymentmethod.value == "Chuyển khoản") {
        newObject.paymentMethod = 1;
    }
    else if (choosePaymentmethod.value == "Thẻ ngân hàng") {
        newObject.paymentMethod = 2;
    }
    else if (choosePaymentmethod.value == "Ví điện tử") {
        newObject.paymentMethod = 3;
    }
    else if (choosePaymentmethod.value == "Khác") {
        newObject.paymentMethod = 4;
    }
    tickets.push(newObject);
    localStorage.setItem("max", max + 1);
    paginationTicket(tickets);
    chooseClient.value = "";
    chooseFilm.value = "";
    chooseScreeningrate.value = "";
    chooseSeat.value = "";
    overlay.style.display = "none";
    taskBookTicket.style.display = "none";
    showToastCorrect("Thành công", "Đặt vé thành công");
}
btnCommitBookTicket.addEventListener("click", bookNewTicket);
chooseSeat.addEventListener("input", () => {
    let filmSelect = movies.find(elêmnt => elêmnt.title == chooseFilm.value);
    if (!filmSelect) return;
    let seats = chooseSeat.value.split(",").map(x => x.trim())
    let total = filmSelect.ticketPrice * seats.length;
    priceBill.innerText = `${total.toLocaleString("vi-vn")} đ`;
    quantityTicketBuy.innerText = seats.length;
    priceFilm.innerText = filmSelect.ticketPrice;
});
chooseFilm.addEventListener("change", () => {
    let filmSelect = movies.find(element => element.title == chooseFilm.value);
    if (!filmSelect) return;
    let seats = chooseSeat.value.split(",").map(x => x.trim())
    let total = filmSelect.ticketPrice * seats.length;
    priceBill.innerText = `${total.toLocaleString("vi-vn")} đ`;
    quantityTicketBuy.innerText = seats.length;
    priceFilm.innerText = filmSelect.ticketPrice;
});
let taskUpdateBookTicket = document.getElementsByClassName("update_book_ticket")[0];
let codeTicketUpdate = document.getElementsByClassName("code_ticket_update")[0];
let chooseClientUpdate = document.getElementById("choose_client_update");
let chooseFilmUpdate = document.getElementById("choose_film_update");
let chooseScreeningrateUpdate = document.getElementById("choose_screeningrate_update");
let chooseSeatUpdate = document.getElementById("choose_seat_update");
let chooseStatusUpdate = document.getElementById("choose_status_update");
let note = document.getElementById("note");
let btnCommitUpdate = document.getElementsByClassName("btn_commit_update")[0];
let btnCancelUpdate = document.getElementsByClassName("btn_cancel_update")[0];
let btnCloseTabUpdate = document.getElementsByClassName("close_tab_update")[0];
btnCloseTabUpdate.addEventListener("click", () => {
    overlay.style.display = "none";
    taskUpdateBookTicket.style.display = "none";
    showToastError("Đã hủy", "Đã hủy thao tác");
});
btnCancelUpdate.addEventListener("click", () => {
    overlay.style.display = "none";
    taskUpdateBookTicket.style.display = "none";
    showToastError("Đã hủy", "Đã hủy thao tác");
});
listUser.forEach((element) => {
    let option = document.createElement("option");
    option.value = element.fullName;
    option.innerText = element.fullName;
    chooseClientUpdate.appendChild(option)
});
listFilmIsShowing.forEach((element) => {
    let option = document.createElement("option");
    option.value = element.title;
    option.innerText = element.title;
    chooseFilmUpdate.appendChild(option);
});
const updateTicket = (id) => {
    taskUpdateBookTicket.style.display = "inline";
    overlay.style.display = "inline";
    let arrayUpdate = tickets.find((element) => {
        return element.id == id;
    });
    chooseScreeningrateUpdate.innerHTML = `
    <option value="${arrayUpdate.showDate} - ${arrayUpdate.showTime}">${arrayUpdate.showDate} - ${arrayUpdate.showTime}</option>
    <option value="${arrayUpdate.showDate} - 8:00">${arrayUpdate.showDate} - 8:00</option>
    <option value="${arrayUpdate.showDate} - 10:00">${arrayUpdate.showDate} - 10:00</option>
    <option value="${arrayUpdate.showDate} - 12:00">${arrayUpdate.showDate} - 12:00</option>
    <option value="${arrayUpdate.showDate} - 18:00">${arrayUpdate.showDate} - 18:00</option>
    <option value="${arrayUpdate.showDate} - 20:00">${arrayUpdate.showDate} - 20:00</option>
    `
    codeTicketUpdate.innerText = arrayUpdate.ticketCode;
    chooseClientUpdate.value = arrayUpdate.customerName;
    chooseFilmUpdate.value = arrayUpdate.movieTitle;
    chooseScreeningrateUpdate.value = `${arrayUpdate.showDate} - ${arrayUpdate.showTime}`
    chooseStatusUpdate.value = arrayUpdate.statusDisplay;
    chooseSeatUpdate.value = arrayUpdate.seats.join(",");
    let date = chooseScreeningrateUpdate.value.split(" - ")[0];
    let time = chooseScreeningrateUpdate.value.split(" - ")[1];
    let seatUpdate = chooseSeatUpdate.value.split(",").map(x => x.trim());
    btnCommitUpdate.addEventListener("click", () => {
        tickets.forEach((element) => {
            if (element.id == id) {
                element.customerName = chooseClientUpdate.value;
                element.movieTitle = chooseFilmUpdate.value;
                element.showDate = date;
                element.showTime = time;
                element.seats = seatUpdate;
                element.statusDisplay = chooseStatusUpdate.value;
                element.note = note;
            }
        });
        paginationTicket(tickets);
        overlay.style.display = "none";
        taskUpdateBookTicket.style.display = "none";
        showToastCorrect("Thành công", "Cập nhật thành công");
    });

}

let taskDelete = document.getElementsByClassName("delete_ticket")[0];
let btnCancelDeleteTicket = document.getElementsByClassName("btn_cancel_delete")[0];
let btnCommitDeleteTicket = document.getElementsByClassName("btn_commit_delete")[0];
const deleteTicket = (id) => {
    taskDelete.style.display = "inline";
    overlay.style.display = "inline";
    btnCommitDeleteTicket.addEventListener("click", () => {
        tickets.forEach((element) => {
            if (element.id == id) {
                element.statusDisplay = "Đã hủy";
            };
        });
        paginationTicket(tickets);
        taskDelete.style.display = "none";
        overlay.style.display = "none";
        showToastError("Đã xóa", "Đã xóa thành công");
    });
}

btnCancelDeleteTicket.addEventListener("click", () => {
    taskDelete.style.display = "none";
    overlay.style.display = "none";
    showToastError("Đã hủy", "Đã hủy thao tác");
});


btnPrev.addEventListener("click", () => {
    if (page > 1 && page <= totalPage) {
        page--;
        paginationTicket(usePage);
        btnChangePage.innerHTML = `${page}`;
        startInPage.innerText = startPage + 1;
        endInPage.innerText = endPage;
    };
});
btnNext.addEventListener("click", () => {
    if (page >= 1 && page < totalPage) {
        page++;
        paginationTicket(usePage);
        btnChangePage.innerHTML = `${page}`;
        startInPage.innerText = startPage + 1;
        endInPage.innerText = endPage;
    }
});
