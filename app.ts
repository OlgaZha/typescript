function filterAndAverage(...numbers: number[]): number {
    let filtered = numbers.filter(item => item <= 0)
    if(filtered.length > 0) {
        return (filtered.reduce((count: number, item: number) => count + item, 0)) / filtered.length
    } else {
        console.log('There is no numbers less or equal to zero')
        return 0;
    }
 }

 console.log(filterAndAverage(-2, -3, -4, 5, 6, 4, 3))

 // 2

type User = {
    id: number;
    name: string;
}

let users: User[] = [
    {id: 101, name: 'Alice'},
    {id: 102, name: 'Alice'},
    {id: 103, name: 'Not Alice ;)'},
]
