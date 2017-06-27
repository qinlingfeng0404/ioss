(function(){
    /*更新*/
    let oM_p = document.getElementById('main_p');
    /*开关*/
    let oOff = document.getElementById('off');
    let oSw = document.getElementsByClassName('switch')[0];
    let i = true;
    oOff.onclick = function(){
        if(i){
            this.style.left = 52+'%';
            oSw.style.background = '#62b0ff';
            this.style.background = '#1199ff';
            oM_p.onclick = function(){
                this.style.background = '#1987f7';
                this.innerHTML = '检查更新中...';
                setTimeout(function(){
                    oM_p.innerHTML = '数据包已更新';
                    oOff.style.left = 0+'%';
                    oSw.style.background = '#CCC';
                    oOff.style.background = '#666666';
                    i = true;
                },2000);
            }
            i = false;
        }else{
            this.style.left = 0+'%';
            oSw.style.background = '#CCC';
            this.style.background = '#666666';
            i = true;
        }
        
    }
})();