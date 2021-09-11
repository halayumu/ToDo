//--------------------[DOM操作]--------------------//
function insert_2() { //追加
    var textbox = document.getElementById("message_1"); //テキストの値取得
    var li = document.getElementById("step_2"); //liタグ値取得
    var inputValue = textbox.value; //文字変換
    var child = document.createElement('li'); //タグを作成する
    //   console.log(inputValue);
    child.textContent = inputValue;
    li.appendChild(child); //実行
}