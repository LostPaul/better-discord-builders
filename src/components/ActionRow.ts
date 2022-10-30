import { ComponentType } from 'discord-api-types/v10';
import { ButtonBuilder } from './Button';
import { SelectMenuBuilder } from './SelectMenu';
import { TextInputBuilder } from './TextInput';
import { ActionRowBuilder as DjsActionRowBuilder, APIMessageActionRowComponent, ActionRowData } from 'discord.js';
export class ActionRowBuilder extends DjsActionRowBuilder<any> {
    public type = ComponentType.ActionRow;
    public components: ButtonBuilder[] | SelectMenuBuilder[] | TextInputBuilder[] = [];
    constructor(components?: ButtonBuilder[] | SelectMenuBuilder[] | TextInputBuilder[]) {
        super(components as unknown as ActionRowData<any>);
        if (components) {
            this.components = components;
            this.data.components = this.components as APIMessageActionRowComponent[];
        }
    }
}
export { ButtonBuilder, SelectMenuBuilder, TextInputBuilder };
