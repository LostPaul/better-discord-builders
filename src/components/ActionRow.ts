import { ComponentType } from 'discord-api-types/v10';
import { ButtonBuilder } from './Button';
import { SelectMenuBuilder } from './SelectMenu';
import { TextInputBuilder } from './TextInput';
import { ActionRowBuilder as DjsActionRowBuilder } from 'discord.js';
export class ActionRowBuilder extends DjsActionRowBuilder {
    public type = ComponentType.ActionRow;
    public components: ButtonBuilder[] | SelectMenuBuilder[] | TextInputBuilder[] = [];
    constructor(components: ButtonBuilder[] | SelectMenuBuilder[] | TextInputBuilder[]) {
        super();
        this.components = components;
    }
}
export { ButtonBuilder, SelectMenuBuilder, TextInputBuilder };
