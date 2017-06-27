(function(){
    let oI_span = document.getElementById('i_m_span');
    let oI_p = document.getElementById('i_m_p');
    let oI_i = document.getElementById('i_m_i');
    let oP_span = document.getElementById('plan_span');
    let i = 0;
    let j = 0;
    let x = 4;
    setInterval(function(){
        i++;
        if(i <= 100){
            oI_span.innerHTML = i+'%';
            oP_span.style.width = i+'%';
            j++;
            if(j > 3){
                oI_i.innerHTML = '';
                j = 0;
            }else{
                oI_i.innerHTML += oI_i.innerHTML = '.';
            }
        }
        if(i > 100){
            oI_p.innerHTML = '下载完成';
            x--;
            if(x <= 0){
                window.open("style.html","_self");
            }
        }   
    },500);
})();