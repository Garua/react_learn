
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const chars = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const element:(string|number)[] = [...numbers,...chars]

export function getRandStr(num:number):string{
    let result = "";
    for (let i = 0; i < num; i++) {
        result += element[Math.floor(Math.random() * element.length)]
    }
    return result;

}









