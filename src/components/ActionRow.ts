import { ComponentType } from 'discord-api-types/v10';
import { StringButtonStyle } from '../interfaces/Button';
import { ButtonBuilder } from './Button';
import { SelectMenuBuilder } from './SelectMenu';
import { TextInputBuilder } from './TextInput';
export class ActionRowBuilder {
    public type = ComponentType.ActionRow;
    public components: ButtonBuilder[] | SelectMenuBuilder[] | TextInputBuilder[] = [];
    constructor(components: ButtonBuilder[] | SelectMenuBuilder[] | TextInputBuilder[]) {
        this.components = components;
    }
}
export { ButtonBuilder, SelectMenuBuilder, StringButtonStyle };
