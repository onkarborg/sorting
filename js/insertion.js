/**
 * Created by Onkar on 7/17/2017.
 */

/* ----------- Insertion Sort ---------------*/
function insertionSort(array) {
    for(var i = 0; i < array.length; i++) {
        var temp = array[i];
        var j = i - 1;
        while (j >= 0 && array[j] > temp) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = temp;
    }
    return array;
}
