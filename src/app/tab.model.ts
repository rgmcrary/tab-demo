
export class Tab {
    public name: string;
    public description: string;
    public index: number;

    constructor(name: string, description: string, index: number) {
        this.name = name;
        this.description = description;
        this.index = index;
    }
}