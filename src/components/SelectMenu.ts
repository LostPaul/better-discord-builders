import { SelectMenuStyle, SelectMenuOptions, SelectMenu } from "../interfaces/SelectMenu";
import { SelectMenuBuilder as DjsSelectMenuBuilder } from 'discord.js';
export class SelectMenuBuilder extends DjsSelectMenuBuilder {
    public type: SelectMenuStyle;
    public custom_id: string;
    public options: SelectMenuOptions[];
    constructor(data: SelectMenu) {
        super();
        this.type = data.type;
        this.custom_id = data.custom_id;
        this.options = data.options;
    }
}
export { SelectMenuStyle, SelectMenuOptions };
