'use strict';

const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const formcheck = document.querySelector('.formcheck');
const linfo = document.querySelector('.linfo');

// bắt sự kiện khi click vào nút submit
document.querySelector('.check').addEventListener('click', function(){
    // dữ liệu từ input mà người dùng đã nhập vào
    const guess = document.querySelector('.guess').value;
    
    // kiểm tra nếu như dữ liệu hợp lệ thì bạn sẽ hiện container chứa thông tin, đồng thời cũng ẩn form đi
    if(guess.match(regex)){
        formcheck.classList.add('hidden');
        linfo.classList.remove('hidden');
    }
});

// khi Hover vào từng phần sẽ hiển thị ra nút "View More"
function handleOnMouseOver(element){
    const viewmore = element.querySelector('.view-more');
    viewmore.style.display = 'inline-block';
};

function handleOnMouseOut(element){
    const viewmore = element.querySelector('.view-more');
    viewmore.style.display = 'none';
};

// Khi nhấn vào nút View More thì sẽ xem được nội dung toàn bộ thông tin
function handleViewMoreOnClick(element){
    const experience = element.closest('.job-info-item');
    const sectionContent = experience.querySelectorAll('.experiencemore');  

    sectionContent.forEach(element => {
        element.style.display = 'block';
    })
};

// nếu nhấn vào View Less thì sẽ ẩn thông tin
function handleLessMoreClick(element){
    const experience = element.closest('.job-info-item');
    const sectionContent = experience.querySelectorAll('.experiencemore');  

    sectionContent.forEach(element => {
        element.style.display = 'none';
    })

    console.log(experience);
};