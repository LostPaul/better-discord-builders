import { ComponentType } from 'discord-api-types/v10';
import { ButtonBuilder } from './Button';
import { SelectMenuBuilder } from './SelectMenu';
import { TextInputBuilder } from './TextInput';
import { ActionRowBuilder as DjsActionRowBuilder, APITextInputComponent } from 'discord.js';
export class ActionRowTextInputBuilder extends DjsActionRowBuilder<TextInputBuilder> {
    public type = ComponentType.ActionRow;
    public components: TextInputBuilder[] = [];
    constructor(components?: TextInputBuilder[]) {
        super();
        if (components) {
            this.components = components;
            this.data.components = this.components as APITextInputComponent[];
        }
    }
}
export { ButtonBuilder, SelectMenuBuilder, TextInputBuilder };
