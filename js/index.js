/**
 * Created by Onkar on 7/17/2017.
 */


var prepArray = function () {
    var array = [];
    var numelem = $("#number").val();
    while (array.length < numelem) {
        var elem = Math.ceil(10000000 * Math.random());
        if (array.indexOf(elem) == -1) {
            array.push(elem);
            if (Math.floor(100 * array.length / numelem) > inc) {
                inc = Math.floor(100 * array.length / numelem);
                updateProgressBar1(inc);
            }
        }
    }
    return array;
}
$(window).ready(function () {

})

var inc = 0;

var updateProgressBar1 = function (percent) {
    //console.log(percent);
    //$("#ProgressBar1").css('background','black');
    //$("#ProgressBar1").css("background","-webkit-linear-gradient(left, darkblue, darkblue "+ percent+"%, blue "+ percent+"%, white)");

    $("#ProgressBar1").get(0).innerHTML = "Preparing Array - " + percent + "%";
    if (percent == 100) {
        $("#ProgressBar1").get(0).innerHTML = "Preparing Array - " + percent + "% - Done!";
    }

}

$("#sort").click(function () {
    var unsortedArray;
    unsortedArray = prepArray();

    bubble(unsortedArray);

    select(unsortedArray);

    insert(unsortedArray);

    merge(unsortedArray);

    quick(unsortedArray);

    heap(unsortedArray);
})

var bubble = function (unsortedArray) {
    if ($("#bubblecheck").is(':checked')) {
        var startTime = new Date().getTime();
        bubbleSort(unsortedArray.slice());
        var elapsedTime = new Date().getTime() - startTime;
        $("#bubbleText").get(0).innerHTML = elapsedTime;
    }
    else {
        $("#bubbleText").get(0).innerHTML = "Not Performed";
    }
};

var select = function (unsortedArray) {
    if ($("#selectcheck").is(':checked')) {
        var startTime = new Date().getTime();
        selectionSort(unsortedArray.slice());
        var elapsedTime = new Date().getTime() - startTime;
        $("#selectText").get(0).innerHTML = elapsedTime;
    }
    else {
        $("#selectText").get(0).innerHTML = "Not Performed";
    }
};

var insert = function (unsortedArray) {
    if ($("#insertcheck").is(':checked')) {
        var startTime = new Date().getTime();
        insertionSort(unsortedArray.slice());
        var elapsedTime = new Date().getTime() - startTime;
        $("#insertText").get(0).innerHTML = elapsedTime;
    }
    else {
        $("#insertText").get(0).innerHTML = "Not Performed";
    }
}

var merge = function (unsortedArray) {
    if ($("#mergecheck").is(':checked')) {
        var startTime = new Date().getTime();
        mergeSort(unsortedArray.slice());
        var elapsedTime = new Date().getTime() - startTime;
        $("#mergeText").get(0).innerHTML = elapsedTime;
    }
    else {
        $("#mergeText").get(0).innerHTML = "Not Performed";
    }
}

var quick = function (unsortedArray) {
    if ($("#quickcheck").is(':checked')) {
        var startTime = new Date().getTime();
        quickSort(unsortedArray.slice());
        var elapsedTime = new Date().getTime() - startTime;
        $("#quickText").get(0).innerHTML = elapsedTime;
    }
    else {
        $("#quickText").get(0).innerHTML = "Not Performed";
    }
}

var heap = function (unsortedArray) {
    if ($("#heapcheck").is(':checked')) {
        var startTime = new Date().getTime();
        heapSort(unsortedArray.slice());
        var elapsedTime = new Date().getTime() - startTime;
        $("#heapText").get(0).innerHTML = elapsedTime;
    }
    else {
        $("#heapText").get(0).innerHTML = "Not Performed";
    }
}