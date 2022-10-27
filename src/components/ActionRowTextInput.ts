import { ComponentType } from 'discord-api-types/v10';
import { ButtonBuilder } from './Button';
import { SelectMenuBuilder } from './SelectMenu';
import { TextInputBuilder } from './TextInput';
import { ActionRowBuilder as DjsActionRowBuilder } from 'discord.js';
export class ActionRowBuilder extends DjsActionRowBuilder<TextInputBuilder> {
    public type = ComponentType.ActionRow;
    public components: TextInputBuilder[] = [];
    constructor(components: TextInputBuilder[]) {
        super();
        this.components = components;
    }
}
export { ButtonBuilder, SelectMenuBuilder, TextInputBuilder };
