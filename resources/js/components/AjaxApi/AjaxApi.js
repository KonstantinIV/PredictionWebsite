

import $ from 'jquery';

export default function AjaxApi(url,requestType,params,callback){
    $.ajax({
      
      url: "/api" + url, 
      method: requestType,
      data : params,
     // headers: {'Accept':'application/json'},
      success : function(result){
        callback(result,true); 

        //callback(JSON.parse(result),true); 
      },
      
      error: function (jqXHR, textStatus, errorThrown) {
       
        callback(JSON.parse(jqXHR.responseText), false);
    },
     
    });
  }