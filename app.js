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



let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

let js_hand = getJShand();

let judge = winLose(user_hand, js_hand);

alert('あなたの選んだ手は' + user_hand + 'です。＼nJavaScriptの選んだ手は' + js_hand + 'です。＼n結果は' + judge + 'です。');

function getJShand(){
    let js_hand_num = Math.floor(Math.random() * 3);
    let hand_name;

    if(js_hand_num == 0){
        js_hand = "グー";
    } else if(js_hand_num == 1){
        js_hand = "チョキ";
    } else if(js_hand_num == 2){
        js_hand = "パー";
    }

    return js_hand;
}

function winLose
