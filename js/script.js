function toggle(maisinfo) {
    var el = document.getElementById(maisinfo);
    if ( el.style.display != 'none' ) {
    el.style.display = 'none';
    }
    else {
    el.style.display = '';
    }
}