let sideBarMenu = document.querySelector('.sideBars'),
  tabs = document.querySelector('.tab'),
  tablinks = document.querySelectorAll('.tablinks'),
  tabcontent = document.querySelectorAll('.tabcontent');

function openPage(evt, pageName) {
  let i,
    tabcontent,
    tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i]
      .className
      .replace(" active", "");
  }
  document
    .getElementById(pageName)
    .style
    .display = "block";
  evt.currentTarget.className += " active";
}

document
  .querySelector('.defaultTab')
  .click();

// function changeCategory(evt, cityName) {     var i, tabcontent, tablinks;
// tabcontent = document.getElementsByClassName("tabcontent1");     for (i = 0;
// i < tabcontent.length; i++) {       tabcontent[i].style.display = "none";
// }     tablinks = document.getElementsByClassName("tablinks1");     for (i =
// 0; i < tablinks.length; i++) {       tablinks[i].className =
// tablinks[i].className.replace(" active", "");     }
// document.getElementById(cityName).style.display = "block";
// evt.currentTarget.className += " active"; }
// document.querySelector('.defaultCategory').click(); function
// newsCategory(evt, cityName) {     var i, tabcontent, tablinks;     tabcontent
// = document.getElementsByClassName("tabcontent2");     for (i = 0; i <
// tabcontent.length; i++) {       tabcontent[i].style.display = "none";     }
//   tablinks = document.getElementsByClassName("tablinks2");     for (i = 0; i
// < tablinks.length; i++) {       tablinks[i].className =
// tablinks[i].className.replace(" active", "");     }
// document.getElementById(cityName).style.display = "block";
// evt.currentTarget.className += " active"; }
// document.querySelector('.defaultNews').click();

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i]
    .addEventListener("click", function () {
      this
        .classList
        .toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
}

sideBarMenu.addEventListener('click', () => {
  tabs
    .classList
    .add('active');
});

dropdown[0].addEventListener('click', () => {
  tabs
    .classList
    .add('active');
  console.log(dropdown)
});

tablinks.forEach((item) => {
  item.addEventListener('click', () => {
    tabs
      .classList
      .remove('active');
  });
});

tabcontent.forEach((item) => {
  item.addEventListener('click', () => {
    tabs
      .classList
      .remove('active');
  });
});

// Manager | open group

let open__group__table = document.querySelectorAll(".open__group__table table tr");
let open__group__table__check = document.querySelectorAll("#open__group__table__check");

let add_teacher_table = document.querySelectorAll(".add_teacher_table table tr");
let add_teacher_table_check = document.querySelectorAll("#add_teacher_table_check");

let add_course_table = document.querySelectorAll(".add_course_table table tr");
let add_course_table_check = document.querySelectorAll("#add_course_table_check");

const all_checked = () => {
  for(let i=0; i<open__group__table__check.length; i++){
    if (open__group__table__check[i].checked==false){
      open__group__table__check[i].checked = true;
    }else{
      open__group__table__check[i].checked = false;
    }
  }
};


// open__group__table.forEach((item) => {
//   item.addEventListener("click", () => {
//     console.log(item);

//     if (open__group__table__check[item.rowIndex - 1].checked) {
//       open__group__table__check[item.rowIndex - 1].checked = false;
//     } else {
//       open__group__table__check[item.rowIndex - 1].checked = true;
//     }
//   });
// });


// add_teacher_table.forEach((item) => {
//   item.addEventListener("click", () => {
//     console.log(item);

//     if (add_teacher_table_check[item.rowIndex - 1].checked) {
//       add_teacher_table_check[item.rowIndex - 1].checked = false;
//     } else {
//       add_teacher_table_check[item.rowIndex - 1].checked = true;
//     }
//   });
// });


// add_course_table.forEach((item) => {
//   item.addEventListener("click", () => {
//     console.log(item);

//     if (add_course_table_check[item.rowIndex - 1].checked) {
//       add_course_table_check[item.rowIndex - 1].checked = false;
//     } else {
//       add_course_table_check[item.rowIndex - 1].checked = true;
//     }
//   });
// });


class CheckingChecked {
  constructor(jadval, jadval_check){
    this.jadval = jadval;
    this.jadval_check = jadval_check;
  }
  checking(){
    this.jadval.forEach((item) => {
      item.addEventListener("click", () => {
        console.log(item);

        if (this.jadval_check[item.rowIndex - 1].checked) {
          this.jadval_check[item.rowIndex - 1].checked = false;
        } else {
          this.jadval_check[item.rowIndex - 1].checked = true;
        }
      });
    })
  }
}


const yangi = new CheckingChecked(open__group__table, open__group__table__check)
const yangi2 = new CheckingChecked(add_teacher_table, add_teacher_table_check)
const yangi3 = new CheckingChecked(add_course_table, add_course_table_check)

yangi.checking()
yangi2.checking()
yangi3.checking()

// Manager | open group finished


// Manager | add teacher
let teacher_modal = document.getElementById("teacher_modal");
let course_modal = document.getElementById("course_modal");

function add_teacher(){
  teacher_modal.classList.toggle("manager_modal_block");
}

function add_course() {
  course_modal.classList.toggle("manager_modal_block");
};

// Manager | add teacher finished

// Manager | FFT

// There I'm checking teacher FFT count and colored it
let fft_counts = document.querySelectorAll("#fft_count");

fft_counts.forEach(fft_count=>{
  if (Number(fft_count.textContent)<=1){
    fft_count.style.backgroundColor = "red";
    fft_count.style.color = "white";
  }else if (Number(fft_count.textContent)<=2){
    fft_count.style.backgroundColor = "orange";
    fft_count.style.color = "white";
  }else if (Number(fft_count.textContent)<=3){
    fft_count.style.backgroundColor = "#F68A1D";
    fft_count.style.color = "white";
  }else if (Number(fft_count.textContent)<=4){
    fft_count.style.backgroundColor = "aqua";
    fft_count.style.color = "white";
  }else{
    fft_count.style.backgroundColor = "#56CA00";
    fft_count.style.color = "white";
  }
})

// Manager | FFT styled