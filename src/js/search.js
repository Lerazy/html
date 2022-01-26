//搜索条
function searchBarHint(){//input的提示信息
    let input = document.getElementById('main_search_bar');
    input.addEventListener('click',function(){
        input.value = " ";
    });
    input.addEventListener('blur',function(){
        input.value = "请搜索图片类型...";
    })

}
searchBarHint();

