"use strict";

function checkPalindrome(arr) {
    // copy the array
    let copy = arr.slice();
    // reverse the copy
    copy.reverse();
    // check that copy & arr are equals
    return eq(arr, copy);
}

function eq(a, b) {
    if (a === b) {
        return true;
    }

    if (a.length === b.length) {
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                return false
            }
        }
        return true;
    } else {
        return false;
    }
}