


function myFunction() {
    var a = Number($('.aa').val());
    var b = Number($('.bb').val());
    var c = Number($('.cc').val());
    var d = (Math.pow(b, 2))-(4*a*c).toFixed(2);

    // Если полное уравнение
    if (a!==0 && b!==0 && c!==0 ){
        if(d<0)
        {

            $('.demo-container').html('<span class="demo-container-b"> В вашем уравнении: '+a+'<object type="image/svg+xml" data="img/14.svg" width="24" height="32"><img src="img/14.png"></object>+' +
                ''+b+'<object type="image/svg+xml" data="img/8.svg" width="20" height="32"><img src="img/8.png"></object>+'+c+'=0'+
                '</span><br>'+'<span class="demo-container-c">Дискриминант: <object type="image/svg+xml" data="img/1.svg" width="110" height="44"><img src="img/1.png"></object> '+' = '+d+'</span><br>'+
                ' Так как дискрининант меньше нуля - уравнение действительных корней не имеет. ');
            $(document).ready(doFlot());
        }
        if(d===0)
        {
            $('.demo-container').html('<span class="demo-container-b"> В вашем уравнении: '+a+'<object type="image/svg+xml" data="img/14.svg" width="24" height="32"><img src="img/14.png"></object>+' +
                ''+b+'<object type="image/svg+xml" data="img/8.svg" width="20" height="32"><img src="img/8.png"></object>+'+c+'=0'+
                '</span><br>'+'<span class="demo-container-c">Дискриминант: <object type="image/svg+xml" data="img/1.svg" width="110" height="44"><img src="img/1.png"></object> '+' = '+d+'</span><br>'+
                '<span class="demo-container-d">Единственный корень <object type="image/svg+xml" data="img/2op.svg" width="110" height="60"><img src="img/2.png"></object> = '+(-b/2*a).toFixed(2)+'</span>');
            $(document).ready(doFlot());
        }
        if(d>0)
        {
            $('.demo-container').html('<span class="demo-container-b"> В вашем уравнении: '+a+'<object type="image/svg+xml" data="img/14.svg" width="24" height="32"><img src="img/14.png"></object>+' +
                ''+b+'<object type="image/svg+xml" data="img/8.svg" width="20" height="32"><img src="img/8.png"></object>+'+c+'=0'+
                '</span><br>'+'<span class="demo-container-c">Дискриминант: <object type="image/svg+xml" data="img/1.svg" width="110" height="44"><img src="img/1.png"></object> '+' = '+d+' больше нуля, значит уравнение имее два вещественных корня </span><br>'+
                '<span >Корни: <img src="img/3.svg"> = '+((-b-Math.sqrt(d))/2*a).toFixed(2)+';  <img src="img/4.svg"> = '+
                ((-b+Math.sqrt(d))/2*a).toFixed(2)+';'+'</span>');
            $(document).ready(doFlot());
        }
    }
    // Если С=0
    else if (a!==0 && b!==0 && c===0)
    {
        $('.demo-container').html('<span class="demo-container-b"> В вашем уравнении: '+a+'<object type="image/svg+xml" data="img/14.svg" width="24" height="32"><img src="img/14.png"></object>+' +
            ''+b+'<object type="image/svg+xml" data="img/8.svg" width="20" height="32"><img src="img/8.png"></object>+'+c+'=0'+
            '<br>'+'Свободный член  С=0 т.е. это не полное квадратное уравнение.<br><span > Один корень всегда равен нулю '+
            ', а второй корень  <img src="img/9.svg"> '+(-b/a).toFixed(2)+'</span>');
        $(document).ready(doFlot());
    }
    // Если B=0
    else if (a!==0 && b===0 && c!==0)
    {
        if (-c/a<0){
            $('.demo-container').html('<span class="demo-container-b"> В вашем уравнении: '+a+'<object type="image/svg+xml" data="img/14.svg" width="24" height="32"><img src="img/14.png"></object>+' +
                ''+b+'<object type="image/svg+xml" data="img/8.svg" width="20" height="32"><img src="img/8.png"></object>+'+c+'=0'+
                '<br>'+'Когда <img src="img/101.svg">, корней нет.');
            $(document).ready(doFlot());
        } else {
            $('.demo-container').html('<span class="demo-container-b"> В вашем уравнении: '+a+'<object type="image/svg+xml" data="img/14.svg" width="24" height="32"><img src="img/14.png"></object>+' +
                ''+b+'<object type="image/svg+xml" data="img/8.svg" width="20" height="32"><img src="img/8.png"></object>+'+c+'=0'+
                '<br>'+'<span ">Два корня: <img src="img/11.svg"> = '+(Math.sqrt(-c/a).toFixed(2))+' ; <img src="img/12.svg"> = '+
                (-Math.sqrt(-c/a).toFixed(2))+' ;</span>');
            $(document).ready(doFlot());
        }
    }
    // Если A=0
    else if (a===0 && b!==0 && c!==0)
    {
        $('.demo-container').html('<span class="demo-container-b"> Ваше уравнение: '+a+'<object type="image/svg+xml" data="img/14.svg" width="24" height="32"><img src="img/14.png"></object>+' +
            ''+b+'<object type="image/svg+xml" data="img/8.svg" width="20" height="32"><img src="img/8.png"></object>+'+c+'=0'+'<br>'+
            '<span >Не является квадратным и его единственное значение вычисляется по формуле: <img src="img/13.svg"> '+
            (-c/b).toFixed(2)+' ;</span>');
        $(document).ready(doFlot());
    } else if ((a!==0 && b===0 && c===0)||(a===0 && b!==0 && c===0)){
        $('.demo-container').html('В данном случае Х=0');
        $(document).ready(doFlot());
    } else {
        $('.demo-container').html('Выражение не имеет смысла');
        $(document).ready(doFlot());
    }
    }





