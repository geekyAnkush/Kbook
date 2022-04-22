// Sidebar
const menuItems = document.querySelectorAll('.menu-item')
//Messages
const msgNotification = document.querySelector('#messages-notifications')
const msgBox = document.querySelector('.messages')
const msgs = document.querySelectorAll('.message')
const msgSearch = document.querySelector('#message-search')
//THEME
const theme = document.querySelector('#theme')
const themeModal = document.querySelector('.customize-theme')
const close = document.querySelector('#close')

const fontSize = document.querySelectorAll('.choose-size span')

var root = document.querySelector(':root')


const colorPalette = document.querySelectorAll('.choose-color span')
const bg1 = document.querySelector('.bg-1')
const bg2 = document.querySelector('.bg-2')
const bg3 = document.querySelector('.bg-3')
const body = document.querySelector('body')
//remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active')
    })
}

msgNotification.addEventListener('click', () => {
    msgBox.style.boxShadow = `0 0 1rem var(--color-primary)`
    msgNotification.querySelector('.notifications-count').style.display = 'none'
    setTimeout(() => {
        msgBox.style.boxShadow = "none"
    }, 2500)
})

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem()
        item.classList.add('active')
        if (item.id != 'notifications') {
            document.querySelector('.notifications-popup').style.display = 'none'
        } else {
            document.querySelector('.notifications-popup').style.display = 'block'
            document.querySelector('#notifications .notifications-count').style.display = 'none'
        }
    })
})
// Searching Chats
const searchMsg = () => {
    const val = msgSearch.value.toLowerCase();
    msgs.forEach(chat => {
        let name = chat.querySelectorAll('h5')
        name.forEach(el => {
            const y = el.textContent.toLowerCase().search(val)
            chat.style.display = y != -1 ? 'flex' : 'none';
        })
    })
}
msgSearch.addEventListener('keyup', searchMsg);

//Theme Customization

//opening and closing of the modal
theme.addEventListener('click', () => {
    themeModal.style.display = 'grid'
})
close.addEventListener('click', () => {
    themeModal.style.display = 'none'
})

// font size changing
const removeSelector = (x) => {
    x.forEach(el => {
        el.classList.remove('active')
    })
}
fontSize.forEach(item => {

    let font_size, tl, tr;

    item.addEventListener('click', () => {
        removeSelector(fontSize)
        item.classList.toggle('active')
        if (item.classList.contains('font-size-1')) {
            font_size = '10px'
            tl = '5.4rem';
            tr = '5.4rem';
        } else if (item.classList.contains('font-size-2')) {
            font_size = '13px'
            tl = '5.4rem';
            tr = '-7rem';
        } else if (item.classList.contains('font-size-3')) {
            font_size = '16px'
            tl = '-2rem';
            tr = '-17rem';
        } else if (item.classList.contains('font-size-4')) {
            font_size = '19px'
            tl = '-5rem';
            tr = '-25rem';
        } else if (item.classList.contains('font-size-5')) {
            font_size = '22px'
            tl = '-12rem';
            tr = '-35rem';
        }
        document.querySelector('html').style.fontSize = font_size
        root.style.setProperty('--sticky-top-left', tl)
        root.style.setProperty('--sticky-top-right', tr)

    })
})

// change primary color

colorPalette.forEach(color => {
    let primaryHue;
    color.addEventListener('click', () => {
        removeSelector(colorPalette)
        color.classList.toggle('active')
        if (color.classList.contains('color-1')) {
            primaryHue = 252
        } else if (color.classList.contains('color-2')) {
            primaryHue = 52
        } else if (color.classList.contains('color-3')) {
            primaryHue = 352
        } else if (color.classList.contains('color-4')) {
            primaryHue = 152
        } else if (color.classList.contains('color-5')) {
            primaryHue = 202
        }
        root.style.setProperty('--primary-Hue', primaryHue)
    })
})

const changeBG = ()=>{
    root.style.setProperty('--dark-color-lightness',darkColorLightness)
    root.style.setProperty('--light-color-lightness',lightColorLightness)
    root.style.setProperty('--white-color-lightness',whiteColorLightness)
}

// Changing Background Colors
let lightColorLightness;
let darkColorLightness;
let whiteColorLightness;

bg1.addEventListener('click',()=>{
    darkColorLightness="17%"
    lightColorLightness="95%"
    whiteColorLightness="100%"

    bg1.classList.add('active')
    bg2.classList.remove('active')
    bg3.classList.remove('active')
    body.classList.remove('back')
    changeBG()
})
bg2.addEventListener('click',()=>{
    darkColorLightness="95%"
    lightColorLightness="15%"
    whiteColorLightness="20%"

    bg2.classList.add('active')
    bg1.classList.remove('active')
    bg3.classList.remove('active')
    body.classList.remove('back')
    changeBG()
})
bg3.addEventListener('click',()=>{
    darkColorLightness="95%"
    lightColorLightness="10%"
    whiteColorLightness="0%"

    bg3.classList.add('active')
    body.classList.add('back')
    bg1.classList.remove('active')
    bg2.classList.remove('active')
    changeBG()
})
