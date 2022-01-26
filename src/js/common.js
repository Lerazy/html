

class Ajax{

   constructor(method="GET",url,data){
       this.method = method;
       this.url = url;
       this.data = data;
   }

   static get(url,data){
       return new this("GET",url,data).xhr();
   }

   static post(url,data){
       return new this("POST",url,data).xhr();
   }

   xhr() {
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      xhr.open(this.method, this.url,true);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
   xhr.onreadystatechange = function() {
       if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
           resolve(this.response);
       }
   }
   xhr.onload = () => {
     if(this.status != 200){
       reject({status:xhr.status,error:xhr.statusText});
     }
   }
   xhr.onerror = (e) => {
     reject(e)
   }
   xhr.send(this.data);
    })
  }
}

class Validate{
  
  usrNameVali(uName){
    let rules = {
      range:{
        min:4,
        max:15
      },
      alpha:true
    }
    
    return  approve.value(uName,rules).approved;
  }

  usrPWD(pwd){
    let rules = {
      range:{
        min:6,
        max:20
      },
      alphaNumeric:true
    }
    return approve.value(pwd,rules).approved;
  }

  comfirmPWD(pwd,re_pwd){
    return  pwd == re_pwd ?true:false; 
  }
}

class Hint{

  constructor(hintTagName){
    this.tags = document.getElementsByTagName(hintTagName);
    this.v = new Validate();
  }

  uNameHint(uName){
    if(this.v.usrNameVali(uName) != true){
       this.tags[0].innerHTML = "必须为字母大 小写最小4个 最大15个";
       this.tags[0].style.color = "white";
      }else{
        this.tags[0].innerHTML = "";
      }
    }
    
   pwdHint(pwd){
     if(this.v.usrPWD(pwd) != true){
      this.tags[1].innerHTML = "输入必须为数字 字母 最小6个 最大20个";
      this.tags[1].style.color = 'white';
    }else{
      this.tags[1].innerHTML = "";
    }
  }
  
   re_pwdHint(pwd,re_pwd){
     let flag = this.v.comfirmPWD(pwd,re_pwd);
     if( flag != true){
        this.tags[2].innerHTML = "两次输入不相符";
        this.tags[2].style.color = "white";
      }else{
        this.tags[2].innerHTML = "";
      }
    }
  }
  
  
  
