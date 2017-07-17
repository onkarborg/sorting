/**
 * Created by Onkar on 7/17/2017.
 */

/* ----------- Bubble Sort ---------------*/
function bubbleSort(array){
    var arr= array.slice();
    var len = arr.length;
    for (var i = len-1; i>=0; i--){
        for(var j = 1; j<=i; j++){
            if(arr[j-1]>arr[j]){
                var temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
