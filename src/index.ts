// tsc (to run configured files)
// tsc index.ts (to run)
// tsc --watch index.ts (to watch changes)
// tsc --init (config file)

// Basic types
let num: number = 5;
let str: string = "Eww";
let bool: boolean = true;
let x: any = "A"

let ids: string[] = ["1", "2", "3"];
let nums: number[] = [1, 2, 3];
let array: any[] = [1, "A", false];

// Tuple
let person: [number, string, boolean] = [1, "Luis", true];

// Tuple array
let employees: [number, string][];

employees = [
    [1, "Luis"],
    [2, "Trav"],
    [3, "Rick"]
]

// Unions (string or number)
let id2: string | number;
id2 = "22";
id2 = 22;

// Enums
enum Direction {
    Up,         // 0
    Down,       // 1
    Left,       // 2
    Right       // 3
}

Direction.Left;

enum DirectionSTR {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right"
}

Direction.Down;

// Objects
type User = {
    id: string,
    name: string
}

const user: User = {
    id: "1",
    name: "Luis"
}

// Type assertion
let cid: any = 1;
let customerId = cid as number;
let customerId2 = <number> cid;

// Functions
function addNums(x: number, y: number): number {
    return x + y;
}

console.log(addNums(1, 2));

function log(message: string | number): void {
    console.log(message);
}

log("a")

// Interface
interface UserInterface {
    readonly id: number,
    name: string,
    age?: number
}

const user1: UserInterface = {
    id: 1,
    name: 'Luis'
}

interface MathFunc {
    (x: number, y:number): number
}

const add: MathFunc = (x: number, y:number): number => x + y;

interface PersonInterface {
    readonly id: number,
    name: string,
    
    register(): string
}

// Classes
class Person implements PersonInterface{
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    register() {
        return this.name + " has been registered";
    }
}

const luis = new Person(1, "Luis");

// Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let numArray = getArray<number>([1,2,3]);
let strArray = getArray<string>(["A,B,C"]);

numArray.push(4);
strArray.push("D");