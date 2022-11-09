/*
convertToEntities()
This is to convert Chinese characters to Unicode numbers
*/

function convertToEntities() {
    var tstr = document.form.unicode.value;
    var bstr = '';
    for(i=0; i<tstr.length; i++)
    {
      if(tstr.charCodeAt(i)>127)
      {
        bstr += '&#' + tstr.charCodeAt(i) + ';';
      }
      else
      {
        bstr += tstr.charAt(i);
      }
    }
    document.form.entity.value = bstr;
  }