//type

const bool: boolean = true;

const int: number = 43;
const float: number = 4.3;
const num: number = 4e10;

const str: string = "Hello, World!";

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]

//Tuple (массив с эдементами разных типов)
const contact = ['Pavel', 2223331]
const contact1:[string, number] = ['Pavel', 2223331]//можно указать какие конкретно типы

//Any если переменную нужно будет переопределить в другой тип
let variable: any = 3
variable = 'Hello'
variable = []

//
function writeName(name: string): void {
    console.log(name);   
}

//Never функция которая не закончится
function always():never {
    while(true){

    }
}

//Type сами создает тип при этом выбираем один или несколько имеющихся и даем новое название
type Food = string 
const apple: Food = 'big apple'

type ID = string | number
const myId: ID = 123
const yourId: ID = '123'

//_________________________________________________________
//interfaces


