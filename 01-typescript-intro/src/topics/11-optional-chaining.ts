interface Passenger {
    name: string;
    children?: string[];
}

const p1: Passenger = {
    name: 'Laura',
}
const p2: Passenger = {
    name: 'Wachitungui',
    children: ['Natalia', 'Noelia']
}

const printChildren = (passenger: Passenger): number => {
    const howManyChildren = passenger.children?.length || 0;
    // * Esto significa que siempre voy a recibir la variable de children
    // const howManyChildren = passenger.children!.length;
    console.log(howManyChildren);

    return howManyChildren;
}
printChildren(p1);
console.log('-----------');
printChildren(p2);