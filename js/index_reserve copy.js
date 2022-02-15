
 var callTyp;
 $(function() {
     
     var agent = navigator.userAgent.toLowerCase();
     if (agent != null) {
         if (-1 != agent.indexOf("firefox")) {
             $("#keyword").bind("keypress", function (event) {
                 var keyCode = event.which || event.keyCode;
                 if (keyCode === 13) {
                     event.keyCode = 0;
                     $("#currentPage").val(1);
                     getJusoListByApi();
                 }
             });
         }
     }
     
     $("#btnJusoSearch").click(function() {
         $("#currentPage").val(1);
         getJusoListByApi();
     });
 });
 
 
 function getJusoListByApi() {
     if (!checkSearchedWord($("#keyword").val())) {
         
         return false;
     }
     $.ajax({
             url : "/member/getJusoListByApi"
           , type : "post"
           , data : $("#form").serialize()
           , dataType : "xml"
           , success : function(xmlStr) {
              $("#list").html("");
              var errCode= $(xmlStr).find("errorCode").text();
              var errDesc= $(xmlStr).find("errorMessage").text();
              if(errCode!= "0") {
                  console.log(errCode + "=" + errDesc);
              } else {
                  if(xmlStr != null) {
                      makeList(xmlStr);
                      pageMake(xmlStr);
                      
                      $(".setJuso").click(function(){
                          var zipNo = $(this).parent().parent().find(".zipNo").text();
                          var roadAddrPart1 = $(this).parent().parent().find(".roadAddrPart1").text();
                          var roadAddrPart2 = $(this).parent().parent().find(".roadAddrPart2").text();
                          var jibunAddr = $(this).parent().parent().find(".jibunAddr").text();
                          zipNo = zipNo.replace(/\n/g, "");
                          roadAddrPart1 = roadAddrPart1.replace(/\n/g, "");
                          roadAddrPart2 = roadAddrPart2.replace(/\n/g, "");
                         jibunAddr = jibunAddr.replace(/\n/g, "");
                         if ('layer' == callTyp) {
                             parent.document.getElementById('iframePopLayer113').contentWindow.setJusoFromLayer(zipNo, roadAddrPart1, roadAddrPart2, jibunAddr);
                         } else {
                             parent.setJusoFromLayer(zipNo, roadAddrPart1, roadAddrPart2, jibunAddr);
                         }
                         hidePopupLayer();
                     });
                 }
              }
         }
          , error:function(request, status, error){
          }
     });
 }
 
 function goPage(pageNum) {
     $("#currentPage").val(pageNum);
     getJusoListByApi();
 }
 
 function enterSearch() {
     var evt_code = (window.netscape) ? ev.which : event.keyCode;
     if (evt_code == 13) {
         event.keyCode = 0;
         $("#currentPage").val(1);
         getJusoListByApi();
     }
 }
 
 function checkSearchedWord(obj) {
     if(obj.length > 0) {
         var expText = /[%=><]/;
         if (expText.test(obj.value) == true) {
             alert($.i18n.prop("hom.mem.validate.021"));
             obj.value = obj.value.split(expText).join("");
             
             return false;
         }
         var sqlArray = new Array("OR", "SELECT", "INSERT", "DELETE", "UPDATE", "CREATE", "DROP", "EXEC", "UNION",  "FETCH", "DECLARE", "TRUNCATE");
         var regex;
         var regex_plus;
         
         for (var i = 0; i < sqlArray.length; i++) {
             regex = new RegExp("\\s" + sqlArray[i] + "\\s","gi") ;
             if (regex.test(obj.value)) {
                 alert("\"" + sqlArray[i] + "\"" + $.i18n.prop("hom.mem.validate.020"));
                 obj.value =obj.value.replace(regex, "");
                 
                 return false;
             }
             regex_plus = new RegExp( "\\+" + sqlArray[i] + "\\+","gi") ;
             if (regex_plus.test(obj.value)) {
                 alert("\"" + sqlArray[i]+"\"" + $.i18n.prop("hom.mem.validate.020"));
                 obj.value =obj.value.replace(regex_plus, "");
                 
                 return false;
             }
         }
     }
     
     return true ;
 }
 
 function makeList(xmlStr) {
     var htmlStr = "";
     var total = $(xmlStr).find("common").find("totalCount").text();
     
     $(xmlStr).find("juso").each(function() {
         
         var zipNo = $(this).find('zipNo').text();
         var roadAddr = $(this).find('roadAddr').text();
         var roadAddrPart1 = $(this).find('roadAddrPart1').text();
         var roadAddrPart2 = $(this).find('roadAddrPart2').text();
         var jibunAddr = $(this).find('jibunAddr').text();
         
         htmlStr += "<tr>";
         htmlStr += "<td class='zipNo'><a href='javascript//void();' class='setJuso'>" + zipNo + "</a></td>"; 
         htmlStr += "<td class='roadAddr'><a href='javascript//void();' class='setJuso'>" + roadAddr + "</a></td>";
         htmlStr += "<td class='roadAddrPart1' style='display:none;'>" + roadAddrPart1 + "</td>";
         htmlStr += "<td class='roadAddrPart2' style='display:none;'>" + roadAddrPart2 + "</td>";
         htmlStr += "<td class='jibunAddr'><a href='javascript//void();' class='setJuso'>" + jibunAddr + "</a></td>";
         htmlStr += "</tr>";
         
     });
     if (total == 0) {
         htmlStr += '<tr><td colspan="3">'+ $.i18n.prop("hom.mem.postno.srch.text.008") + '</td></tr>';
     }
     
     $("#list").html(htmlStr);
 }
 
 function pageMake(xmlStr){
     var total = $(xmlStr).find("totalCount").text();
     var pageNum = document.form.currentPage.value;
     var paggingStr = "";
     
     if (total < 1) {
     } else {
         var PAGEBLOCK = 5;
         var pageSize = 10;
         
         var totalPages = Math.floor((total-1)/pageSize) + 1;
         var firstPage = Math.floor((pageNum-1)/PAGEBLOCK) * PAGEBLOCK + 1;
         if (firstPage <= 0) {
             firstPage = 1;		
         }
         var lastPage = firstPage - 1 + PAGEBLOCK;
         if ( lastPage > totalPages ) {
             lastPage = totalPages;
         }
         var nextPage = lastPage + 1;
         var prePage = firstPage - 5;
         
         if (firstPage > PAGEBLOCK) {
             paggingStr += "<li class='btnL2'><a href='javascript:goPage(1);'></a></li>";
             paggingStr +=  "<li class='btnL'><a href='javascript:goPage(" + prePage + ");'></a></li>";
         }		
         for ( i = firstPage; i <= lastPage; i++ ) {
             if (pageNum == i) {
                 paggingStr += "<li><strong>" + i + "</strong></li>";
             } else {
                 paggingStr += "<li><a href='javascript:goPage("+i+");'>" + i + "</a></li>";
             }
         }
         if(lastPage < totalPages){
             paggingStr +=  "<li class='btnR'><a href='javascript:goPage(" + nextPage + ");'></a></li>";
             paggingStr += "<li class='btnR2'><a href='javascript:goPage(" + totalPages + ");'></a></li>";
         }
     }
     $("#pageApi").html(paggingStr);
 }
 
 var popMargin;
 function setPopupForJuso(obj, reset) {
     if(!reset) {
         popMargin = parseInt(parent.$(".popLayer").css("margin-top"));
     }
     if($("body").hasClass("hideClose")) {
         parent.$("#popLayer" + obj + " .close").hide();
     }
     parent.$("#popLayer" + obj).css("top", ($(window.parent).height() / 2 + $(window.parent).scrollTop()) +"px");
     parent.$("#popLayer" + obj +", #iframePopLayer" + obj).add($("#popCont")).height("auto");
     parent.$("#popLayer" + obj +", #iframePopLayer" + obj).height($("#popWrap").height());
     parent.$("#popLayer" + obj).css("margin-top", "-" + $("#popWrap").height()/2 + "px");
     var pWidth;
     if ($("#popWrap").hasClass("calendarWrap")) {
         parent.$("#popLayer" + obj).find(".close").addClass("typeB");
         pWidth = $(window.parent).width() - 100;
         if(pWidth > 1160) pWidth = 1160;
     } else {
         pWidth = $("#popWrap").width();
     }	
     if ($("#popWrap").width() > $(window.parent).width() - 40) {
         pWidth = $(window.parent).width() - 40;
         $("#popWrap").width($(window.parent).width() - 40);
     }
     parent.$("#popLayer" + obj).width(pWidth).css("margin-left", "-" + pWidth/2 + "px");
     var popHeight = $(window.parent).height()-(popMargin*2);
     var titleHeight = $("h1").height()+parseInt($("h1").css("padding-top"))+parseInt($("h1").css("padding-bottom"));
     var contPadding = parseInt($("#popCont").css("padding-top"))+parseInt($("#popCont").css("padding-bottom"));
 
     $("#popCont").css("height", (popHeight-titleHeight-contPadding) + "px").css("overflow-y", "scroll").css("padding-right", "10px");
     
     parent.$("#popLayer" + obj +", #iframePopLayer" + obj).height($("#popWrap").height());
     parent.$("#popLayer" + obj).css("top", $(window.parent).scrollTop() + "px").css("margin-top", popMargin + "px");
     parent.$("#popLayer" + obj).css("opacity", "1");
 }