//给input加上事件 判断是否合法
function addEvents(uNameID,pwdID,re_pwdID,hintTagName,btn){
    
    let hint = new Hint(hintTagName);

    let u = document.getElementById(uNameID);
    let p = document.getElementById(pwdID);
    let r = document.getElementById(re_pwdID);
    
    u.addEventListener('keyup', function(){hint.uNameHint(this.value)});
    p.addEventListener('keyup',function(){hint.pwdHint(this.value);hint.re_pwdHint(this.value,r.value)});
    r.addEventListener('keyup',function(){hint.re_pwdHint(p.value,this.value)});

    whenSubmit(btn);
    function whenSubmit(btn){
        let b = document.getElementById(btn);
        b.addEventListener('click',function(){
            let v = new Validate();
            if(v.usrNameVali(u.value) == true && v.usrPWD(p.value) == true && v.comfirmPWD(p.value,r.value)){
                Ajax.post('/index.php',`name=${u.value}&pwd=${p.value}`).then(response => {
                    location.href = '/index.html';
                }).catch(e => console.log(e));
            }
        })
    }
    } 

addEvents('uName','pwd','re_pwd','p','submit');
