;(function(w){
      w.transFormCss= function(obj , name , value){
            !obj.aaa&&(obj.aaa = {});
            var result =  '';
            if ( arguments.length > 2 ) {//写
                  obj.aaa[name] = value ;
                  for ( var n in obj.aaa ) {
                        switch (n){
                              case 'translate':
                              case 'translateX':
                              case 'translateY':
                                    result += n + '(' + obj.aaa[n] + 'px) ' ;
                                    break;
                              case 'scale':
                              case 'scaleX':
                              case 'scaleY':
                                    result += n + '('+ obj.aaa[n] +') ';
                                    break;
                              case 'rotate':
                              case 'skew':
                              case 'skewX':
                              case 'skewY':
                                    result += n + '('+ obj.aaa[n] +'deg) ';
                                    break;
                        }
                  }
                  obj.style && (obj.style.transform = result) ||  obj.css('transform',result)
            } else{
                  //代表是读取
                  result =  (name === 'scale' || name === 'scaleX' || name === 'scaleY') ? obj.aaa[name] || 1 : obj.aaa[name] || 0 ;
                  return result ;
            }
      }
})(window);