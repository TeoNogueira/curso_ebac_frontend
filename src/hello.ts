class Robot {
    name: string;

constructor(name: string) {
    this.name = name;
}

hello(): string {
    return `Olá ${this.name}`
}
}


