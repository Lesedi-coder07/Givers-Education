const copywrite_tag = document.querySelector('.footer_copy')

function getYCurrentYear () {
    let y = new Date().getFullYear();
    return y
}

copywrite_tag.innerHTML = `&copy; ${getYCurrentYear()} GE COLLEGE. All Rights Reserved.`