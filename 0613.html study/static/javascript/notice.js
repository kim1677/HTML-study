// notice.js

$ (function(){

    $("#detail").keyup(function(){
        // 5자 이상 입력햐야 버튼 활성화
        if($("#detail").val().length >=5 ){
           $("#save").removeAttr('disabled'); 
            // alert("5자 이상");
        }else{
            $("#save").attr('disabled', 'disabled');

        }
    });

    // #("#save").on('click', function(){})
    $("#save").click(function(){
        let text = $("#detail").val();
        addList( text );    // input 태그에 입력값 ul에 넣기

        // input 태그에 아무것도 입력하지 않았다면
        // if(text ==='')
        //     alert("내용을 입력하세요");
        //     $("#detail").focus();
        //     return;                             //함수 강제 종료를 위해
    }); // $("#save").click END

}); // $(function) END


function addList( text ){
    $("#list").append('<li>'+text+'</li>');         // jquery 는 append로 사용하여 간편하게 1줄로 요약가능
}