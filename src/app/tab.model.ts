
export class Tab {
    public name: string;
    public description: string;
    public index: number;
    public active: boolean;

    constructor(name: string, description: string, index: number, active: boolean) {
        this.name = name;
        this.description = description;
        this.index = index;
        this.active = active;
    }
}