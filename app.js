// ----------基本文法学習----------

// let hello = "hello world";
// alert(hello);

// alert(4+3);

// alert('Hello'+'world');

// let str1 = 'Hello';
// let str2 = 'World';
// alert(str1 + str2);

// let orange = 120;
// let apple = 120;

// if (orange < apple){
//   alert('みかんの値段がりんごより安い');
// } else if(orange == apple){
//   alert('みかんとりんごが同じ値段');
// } else{
//   alert('みかんの値段がりんごより高い');
// }

// let max = 100;
// let num = 1;
// let count = 0;

// while(num < max){
//   num = num * 2;
//   count = count + 1;
// }

// alert('2をかけ続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

// let i;
// let num = 0;

// for(i = 1; i<11; i++){
//     num = num + i;
// }

// alert('１から１０まで足した結果は'+ num + 'です');

// ----------変数宣言学習----------

// var nickname = "taro"
// console.log(nickname)
// var nickname = "ichiro"
// console.log(nickname)

// let nickname = "taro"
// console.log(nickname)
// let nickname = "ichiro"
// console.log(nickname)

// const nickname = "taro"
// console.log(nickname)
// const nickname = "ichiro"
// console.log(nickname)

// var nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)

// let nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)

// const nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)

// var str = "webcamp"

// function foo(){
//     console.log(str)
//     var y = "hello"
// }

// foo()
// console.log(y)

// function foo(){
//     let x = "webcamp"
//     {
//         let y = "hello webcamp"
//     }
//     console.log(x)
//     console.log(Y)
// }

// foo()

// for (let i = 0; i < 10; i++){
//     console.log(i)
// }
// console.log(i)

// var str = "webcamp"

// function foo(){
//     console.log(str)
//     var str = "dmm webcamp"
//     console.log(str)
// }

// foo()

// for (let i = 0; i < 10; i++){
//     console.log(i);
// }

// ----------関数の学習----------

// let alertString;

// alertString = addString("Webcamp");

// alert(alertString);

// function addString(strA){
//     let addStr = "Hello" + strA;
//     return addStr;
// }


// let promptStr = prompt('なにか好きな文字を入力してください。');

// alert(promptStr);


// let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

// alert('あなたの選んだ手は' + user_hand + 'です。');



// let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
// while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
//     alert ('グー・チョキ・パーのいずれかを入力して下さい');
//     user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
// }

// let js_hand = getJShand();
// let judge = winLose(user_hand, js_hand);

// if (user_hand != null){
//     alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
// } else {
//     alert("またチャレンジしてね")
// }


// function getJShand(){
//     let js_hand_num = Math.floor(Math.random() * 3);
//     let hand_name;

//     if(js_hand_num == 0){
//         hand_name = "グー";
//     } else if(js_hand_num == 1){
//         hand_name = "チョキ";
//     } else if(js_hand_num == 2){
//         hand_name = "パー";
//     }

//     return hand_name;
// }

// function winLose(user,js){
//     let winLoseStr;

//     if (user == "グー"){
//         if(js == "グー"){
//             winLoseStr = "あいこ";
//         } else if(js == "チョキ"){
//             winLoseStr = "勝ち";
//         } else if(js == "パー"){
//             winLoseStr = "負け";
//         }
//     }else if( user == "チョキ"){
//         if(js == "グー"){
//             winLoseStr = "負け";
//         } else if(js == "チョキ"){
//             winLoseStr = "あいこ";
//         } else if(js == "パー"){
//             winLoseStr = "勝ち";
//         }
//     }else if( user == "パー"){
//         if(js == "グー"){
//             winLoseStr = "勝ち";
//         } else if(js == "チョキ"){
//             winLoseStr = "負け";
//         } else if(js == "パー"){
//             winLoseStr = "あいこ";
//         }
//     }

//     return winLoseStr;
// }

// ----------jQuery----------

/*global $*/
// $(function(){
//   $('.box1').slideUp();
// });


// $(document).ready(function(){
//     $('body').html('<h1>Hello jQuery!!</h1>');
// });

// $(function(){
//   $('.box1').css({
//     'background-color': '#0000FF',
//     'height': '100px'
//   });
// });

// $(function(){
//   $('.box1').slideDown();
// });

// $(function(){
//   $('.box1').slideDown();
// });

// $(function(){
//   $('.box1').show();
//   $('.box1').css({'background-color': '#0000FF'});
// });

$(function(){
  $('.box1').slideDown(function(){
    $('.box1').css({
    'background-color': '#0000FF',
    'height': '100px',
    'width': '200px'
    }).slideUp();
  });
});