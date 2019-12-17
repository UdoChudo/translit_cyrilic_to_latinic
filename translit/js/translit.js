var arrru;
arrru = [
    'Я', 'я', //'Ya','ya',
    'Ю', 'ю', // 'Yu','yu',
    'Ч', 'ч', //'Ch','ch',
    'Ш', 'ш', //'Sh','sh',
    'Щ', 'щ', //'Sh','sh',
    'Ж', 'ж', //'Zh','zh',
    'А', 'а', //'A','a',
    'Б', 'б', //'B','b',
    'В', 'в', //'V','v',
    'Г', 'г', //'G','g',
    'Д', 'д', //'D','d',
    'Е', 'е', //'E','e',
    'Ё', 'ё', //'E','e',
    'З', 'з', //'Z','z',
    'И', 'и', //'I','i',
    'Й', 'й', //'J','j',
    'К', 'к', //'K','k',
    'Л', 'л', //'L','l',
    'М', 'м', //'M','m',
    'Н', 'н', //'N','n',
    'О', 'о', //'O','o',
    'П', 'п', //'P','p',
    'Р', 'р', //'R','r',
    'С', 'с', //'S','s',
    'Т', 'т', //'T','t',
    'У', 'у', //'U','u',
    'Ф', 'ф', //'F','f',
    'Х', 'х', //'H','h',
    'Ц', 'ц', //'C','c',
    'Ы', 'ы', //'Y','y',
    'Ь', 'ь', //'`','`',
    'Ъ', 'ъ', //'\'','\''
    'Э', 'э'];
var arren = ['YA','ya',
    'YU','yu', 'CH','ch', 'SH','sh', 'SH','sh',
    'ZH','zh', 'A','a',   'B','b',   'V','v',
    'G','g',   'D','d',   'E','e',   'E','e',
    'Z','z',   'I','i',   'Y','y',   'K','k',
    'L','l',   'M','m',   'N','n',   'O','o',
    'P','p',   'R','r',   'S','s',   'T','t',
    'U','u',   'F','f',   'KH','kh', 'TS','ts',
    'Y','y',   '‎','‎',     '‎','‎',     'E', 'e'];              /*Ъ*/      /*Ь*/

function cyrill_to_latin(text){
    for(var i=0; i<arrru.length; i++){
        var reg = new RegExp(arrru[i], "g");
        text = text.replace(reg, arren[i]);
    }
    return text;
}

function latin_to_cyrill(id){
    // noinspection JSJQueryEfficiency
    var text = $("#"+id).html();
    for(var i=0; i<arren.length; i++){
        var reg = new RegExp(arren[i], "g");
        text = text.replace(reg, arrru[i]);
    }
    // noinspection JSJQueryEfficiency
    $("#"+id).html(text);
}


function translit(){

    $("[name=result]").val(cyrill_to_latin($("[name=translit]").val()));
}