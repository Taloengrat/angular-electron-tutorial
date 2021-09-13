export class DataLink {
    public index!: number;
    public category!: number;
    public textIdentity!: number;
    public heading!: number;
    public body!: number;

    constructor(
        index: number,
        category: number,
        textIdentity: number,
        heading: number,
        body: number,
    ) {
        this.index = index;
        this.category = category;
        this.textIdentity = textIdentity;
        this.heading = heading;
        this.body = body;
    }


}