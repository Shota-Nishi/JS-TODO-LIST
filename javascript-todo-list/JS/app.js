const taskValue = document.getElementsByClassName('task_value')[0];
// タスクを登録するためのボタン
const taskSubmit = document.getElementsByClassName('task_submit')[0];
// タスクを表示させるための空のリスト
const taskList = document.getElementsByClassName('task_list')[0];
// 完了したタスクを表示させるための空のリスト
const doneList = document.getElementsByClassName('done_list')[0];



// 追加ボタンの機能作成
const addTasks = (task) => {

    // 入力したタスクを追加・表示
    if(task === "") {
        alert("タスクを入れてください");
        return;
    }

    //lisyItemにliを作成
    const listItem = document.createElement('li');
    // taskListの子要素にlistItemを追加
    const showItem = taskList.appendChild(listItem);
    // showItemの中身をtaskに変更
    showItem.innerHTML = task;


    //タスクに完了ボタンを付与
    const doneButton = document.createElement('button');
    doneButton.innerHTML = '完了';
    listItem.appendChild(doneButton);

    // タスクに削除ボタンを付与
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '削除'
    listItem.appendChild(deleteButton);


    // 完了ボタンをクリックし、イベントを発動（タスクが完了に移る）
    doneButton.addEventListener('click',() => {
        doneTask(doneButton);
    });

    // 削除ボタンをクリックし、イベントを発動（タスクが削除）
    deleteButton.addEventListener('click', evt => {
        evt.preventDefault(); //preventDefault = デフォルトのイベント動作をキャンセル
        deleteTasks(deleteButton);
    });
};


// 完了ボタンに機能をつける
const doneTask = (doneButton) => {
    const doneTask = doneButton.closest('li')
    doneTask.setAttribute('class', 'done-item'); //条件分岐のための準備
    doneList.appendChild(doneTask);
    doneButton.remove();
};


// 削除ボタンに機能を付ける
const deleteTasks = (deleteButton) => {
    const chosenTask = deleteButton.closest('li'); //closest = 最も近い祖先要素(または自分自身)を返す
    // taskList.removeChild(chosenTask);
    chosenTask.closest('ul').removeChild(chosenTask);
};    


taskSubmit.addEventListener('click', evt => {
    evt.preventDefault();
    const task = taskValue.value;
    addTasks(task);
    taskValue.value = '';
});
