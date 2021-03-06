// нужны только на этапе разработки
// ? - не обязательно добавлять
// readonly - только чтение
//  название интерфейсов начинается с IName
// implements для применения интерфейса к классу
// наобъектная сущность

interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const rect: Rect = {
    id: '1234',
    size: {
        width: 100,
        height: 100,
    },
};

console.log('rect', rect);

const rect3 = {} as Rect;
const rect4 = <Rect>{};

// наследование интерфейсов

interface RectiWithArea extends Rect {
    getArea: () => number
}

const rect5: RectiWithArea = {
    id: '123',
    size: {
        width: 100,
        height: 100,
    },
    getArea(): number {
        return this.size.width * this.size.height;
    }
}

//

interface IClock {
    time: Date,
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date();
    setTime(date: Date): void {
        this.time = date;
    }
}

// создать интерфейс у объекта у которого много свойств

interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid red',
    marginTop: '2px',
    borderRadius: '5px',
}

// если мы незнаем будем ли расширяться object

interface User {
    name: string,
    age: number,
    [propName: string]: any; // расширение
}

const Dmitry: User = {
    name: 'Dmitry',
    age: 30,
    nickName: 'Wertey'
}

console.log('Dmitry', Dmitry);

class Test implements User {
    name: 'Admin'
    age: 100
    nickName: 'Admin'
    salary: 100000
}
