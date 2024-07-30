var itemCount = 0;

function addToList(){
    itemCount++;
    var listem = document.createElement('li');
    listem.innerText = 'Item' + itemCount;
    document.getElementsById('itemList').appendChild(listem);
}