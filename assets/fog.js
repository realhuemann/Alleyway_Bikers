function iscol(object1, object2) { //this detects the collsion between 2 objects
    var player = document.getElementById(object1);
    var box = document.getElementById(object2);
    
    var player_pos = player.getBoundingClientRect();
    var box_pos = box.getBoundingClientRect();

    if (player_pos.right > box_pos.left && 
        player_pos.left < box_pos.right && 
        player_pos.bottom > box_pos.top && 
        player_pos.top < box_pos.bottom) {
        return true;
    } else {
        return false;
    }
}

function iscol_multi(playerId, trashArray) {
    var player = document.getElementById(playerId);
    for (var i = 0; i < trashArray.length; i++) {
        var trash = document.getElementById(trashArray[i]);
        if (iscol(playerId, trash.id)) {
            return true;
        }
    }
    return false;
}

function loop(fn, amount, fn_mod){
    var am = amount
    for(am; am < 0;) {
        fn(fn_mod)
        am = am - 1
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}