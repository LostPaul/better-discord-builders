import { SelectMenuStyle, SelectMenuOptions, StringSelectMenuStyle, SelectMenu } from "../interfaces/SelectMenu";
export class SelectMenuBuilder {
    public type: 3 | 5 | 6 | 7 | 8 | 'text' | 'user' | 'role' | 'mentionable' | 'channels' | StringSelectMenuStyle | SelectMenuStyle;
    public custom_id: string;
    public options: SelectMenuOptions[];
    constructor(data: SelectMenu) {
        this.type = (typeof data.type === 'string' ? StringSelectMenuStyle[data.type.toLowerCase() as unknown as StringSelectMenuStyle] : data.type) as unknown as 3 | 5 | 6 | 7 | 8 | 'text' | 'user' | 'role' | 'mentionable' | 'channels';
        this.custom_id = data.custom_id;
        this.options = data.options;
    }
}
export { SelectMenuStyle, SelectMenuOptions, StringSelectMenuStyle };
