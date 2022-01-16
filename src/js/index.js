
// !(function(doc, win) {
//     var docEle = doc.documentElement,//获取html元素
//         event = "onorientationchange" in window ? "orientationchange" : "resize",//判断是屏幕旋转还是resize;
//         fn = function() {
//             var width = docEle.clientWidth;
//             width && (docEle.style.fontSize = 4  * (width / 320) + "px");//设置html的fontSize，随着event的改变而改变。
//         };
    
//     win.addEventListener(event, fn, false);
//     doc.addEventListener("DOMContentLoaded", fn, false);

// }(document, window));

function toggleNavMenu(maxWidth){
    let forDeskTop = document.getElementsByClassName('nav-menu')[0];
    let forMobile = document.getElementsByClassName('nav-menu-for-mobile')[0];
    
    let resize = () => {
        let clientWidth = document.documentElement.clientWidth;
        if(clientWidth < maxWidth){
            forMobile.setAttribute('id','nav-menu-for-block');
            forDeskTop.setAttribute('id','nav-menu-for-none');
        }else{
            forMobile.setAttribute('id','nav-menu-for-none')
            forDeskTop.setAttribute('id','nav-menu-for-block');
        }
    }
    let event = "onorientationchange" in window ? "orientationchange":"resize";
    document.addEventListener('DOMContentLoaded',function(){
        resize();
    },false);
    
    window.addEventListener(event,function(){
        resize();
    },false);
}
toggleNavMenu(600);