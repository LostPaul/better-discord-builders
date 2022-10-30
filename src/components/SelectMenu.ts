import { SelectMenuStyle, SelectMenuOption, SelectMenu } from "../interfaces/SelectMenu";
import { SelectMenuBuilder as DjsSelectMenuBuilder, APISelectMenuOption } from 'discord.js';
import { SelectMenuOptionBuilder } from './SelectMenuOption';
export class SelectMenuBuilder extends DjsSelectMenuBuilder {
    public type: SelectMenuStyle;
    public custom_id: string;
    public options: SelectMenuOptionBuilder[];
    declare public placeholder: string;
    constructor(data: SelectMenu | SelectMenuBuilder) {
        super();
        this.type = data.type;
        this.custom_id = data.custom_id;
        this.options = data.options.map((option) => new SelectMenuOptionBuilder(option));
        this.data.type = data.type as unknown as number;
        this.data.custom_id = this.custom_id;
        this.data.options = this.options as APISelectMenuOption[];
    }
}
export { SelectMenuStyle, SelectMenuOption };
