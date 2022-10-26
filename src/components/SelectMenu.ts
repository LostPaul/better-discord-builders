import { SelectMenuStyle, SelectMenuOptions, SelectMenu } from "../interfaces/SelectMenu";
export class SelectMenuBuilder {
    public type: SelectMenuStyle;
    public custom_id: string;
    public options: SelectMenuOptions[];
    constructor(data: SelectMenu) {
        this.type = data.type;
        this.custom_id = data.custom_id;
        this.options = data.options;
    }
}
export { SelectMenuStyle, SelectMenuOptions };
