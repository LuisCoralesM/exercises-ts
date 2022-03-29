"use strict";
let num = 5;
let str = "Eww";
let bool = true;
let x = "A";
let ids = ["1", "2", "3"];
let nums = [1, 2, 3];
let array = [1, "A", false];
let person = [1, "Luis", true];
let employees;
employees = [
    [1, "Luis"],
    [2, "Trav"],
    [3, "Rick"]
];
let id2;
id2 = "22";
id2 = 22;
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
Direction.Left;
var DirectionSTR;
(function (DirectionSTR) {
    DirectionSTR["Up"] = "Up";
    DirectionSTR["Down"] = "Down";
    DirectionSTR["Left"] = "Left";
    DirectionSTR["Right"] = "Right";
})(DirectionSTR || (DirectionSTR = {}));
Direction.Down;
const user = {
    id: "1",
    name: "Luis"
};
let cid = 1;
let customerId = cid;
let customerId2 = cid;
function addNums(x, y) {
    return x + y;
}
console.log(addNums(1, 2));
