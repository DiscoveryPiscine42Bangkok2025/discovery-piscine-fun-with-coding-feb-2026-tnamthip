$(document).ready(function() {
    const $ftList = $('#ft_list');

    //Cookie
    const cookies = document.cookie.split('; ');
    const todoCookie = cookies.find(row => row.startsWith('todos='));
    
    if (todoCookie) {
        const json = todoCookie.split('=')[1];
        const todos = JSON.parse(decodeURIComponent(json));
        //Loop
        $.each(todos.reverse(), function(index, text) {
            addTodo(text, false);
        });
    }

    //OnClickNew
    $('#new_btn').on('click', function() {
        const task = prompt("เพิ่มรายการใหม่ของคุณ:");
        addTodo(task);
    });

    //Add
    function addTodo(text, isNew = true) {
        if (!text || $.trim(text) === "") return;

        //jQuery
        const $div = $('<div></div>')
            .addClass('todo-item')
            .text(text)
            .on('click', function() {
                if (confirm("คุณต้องการลบรายการนี้ใช่หรือไม่?")) {
                    $(this).remove();
                    saveTodos();
                }
            });

        $ftList.prepend($div);

        if (isNew) saveTodos();
    }

    function saveTodos() {
        const todos = [];

        $('.todo-item').each(function() {
            todos.push($(this).text());
        });

        const jsonStr = JSON.stringify(todos);
        document.cookie = "todos=" + encodeURIComponent(jsonStr) + "; path=/; max-age=31536000";
    }
});

//const ftList = document.getElementById('ft_list');
//const newBtn = document.getElementById('new_btn');

//window.onload = function() {
//    const cookies = document.cookie.split('; ');
//    const todoCookie = cookies.find(row => row.startsWith('todos='));
//    if (todoCookie) {
//        const json = todoCookie.split('=')[1];
//        const todos = JSON.parse(decodeURIComponent(json));
//        todos.reverse().forEach(text => addTodo(text, false));
//    }
//};

//function saveTodos() {
//    const todos = [];
//    const items = ftList.getElementsByClassName('todo-item');
//    for (let item of items) {
//        todos.push(item.innerText);
//    }
//    document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + "; path=/; max-age=31536000";
//}

//function addTodo(text, isNew = true) {
//    if (!text || text.trim() === "") return;

//    const div = document.createElement('div');
//    div.className = 'todo-item';
//    div.innerText = text;

//    div.onclick = function() {
//        if (confirm("คุณต้องการลบรายการนี้ใช่หรือไม่?")) {
//            this.remove();
//            saveTodos();
//        }
//    };

//    ftList.prepend(div);

//    if (isNew) saveTodos();
//}

//newBtn.onclick = function() {
//    const task = prompt("เพิ่มรายการใหม่ของคุณ:");
//    addTodo(task);
//};