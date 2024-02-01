const pageTurnBtn = document.querySelectorAll('.nextprev-btn')
// console.log(pageTurnBtn);

pageTurnBtn.forEach((el,index)=>{
    // console.log(el);
    el.onclick = () =>{
        const pageTurnId = el.getAttribute('data-page')
        // console.log(pageTurnId);
        const pageTurn = document.getElementById(pageTurnId)
         if(pageTurn.classList.contains('turn')){
            pageTurn.classList.remove('turn')
            setTimeout(()=>{
                pageTurn.style.zIndex = 20 - index
            },500)
         }else{
            pageTurn.classList.add('turn')
            setTimeout(()=>{
                pageTurn.style.zIndex = 20 + index
            },500)
         }
    }
})

// CONTACT BUTTON WHEN CLICK
const pages = document.querySelectorAll('.book-page.page-right')
// console.log(pages);
const contactMeBtn = document.querySelector('.btn.contact-me')
// console.log(contactMeBtn);
contactMeBtn.onclick = () =>{
    pages.forEach((page,index)=>{
    setTimeout(() =>{
        page.classList.add('turn')

        setTimeout(() =>{
            page.style.zIndex =  20 + index;
        },500)
    },(index + 1) * 200 + 100)
    })
}

// create reverse index function 
let totalpages = pages.length;
let pageNumber = 0;

function reverseIndex() {
    pageNumber--
    if (pageNumber < 0) {
        pageNumber = totalpages- 1
    }
}

// back profile button click

const backProfileBtn = document.querySelector('.back-profile');
backProfileBtn.onclick = () =>{
    pages.forEach((_,index)=>{
        setTimeout(()=>{
            reverseIndex()
            pages[pageNumber].classList.remove('turn');

            setTimeout(()=>{
                reverseIndex()
                pages[pageNumber].style.zIndex = 10 + index
            },500)
        }, (index + 1) * 200 + 100)

    })
}

// opening animation
const coverRight = document.querySelector('.cover.cover-right');
const coverLeft = document.querySelector('.cover.cover-left');
// console.log(coverRight);
// opening animation ( cover right animation)
setTimeout(()=>{
    coverRight.classList.add('turn');
},2100)
setTimeout(()=>{
    coverRight.style.zIndex = -1;
},2800)
// opening animation ( cover right animation)
setTimeout(()=>{
    coverLeft.style.zIndex = -1;
},3200)
// opening animation ( all page right animation)
pages.forEach((_,index)=>{
    setTimeout(()=>{
        reverseIndex()
        pages[pageNumber].classList.remove('turn');

        setTimeout(()=>{
            reverseIndex()
            pages[pageNumber].style.zIndex = 10 + index
        },500)
    }, (index + 1) * 200 + 2100)

})