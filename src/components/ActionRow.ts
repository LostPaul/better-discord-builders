/*eslint-disable*/
import { ComponentType } from 'discord-api-types/v10';
import { ButtonBuilder } from './Button';
import { SelectMenuBuilder } from './SelectMenu';
import { TextInputBuilder } from './TextInput';
import {
    ActionRowBuilder as DjsActionRowBuilder,
    APIMessageActionRowComponent,
    ActionRowData,
    isJSONEncodable,
    ActionRow,
    MessageActionRowComponent,
    APIActionRowComponent,
    APIModalActionRowComponent
} from 'discord.js';
import { Awaitable, JSONEncodable } from '@discordjs/util';
import { createAnyComponent } from './AnyComponent';
export type ActionRowComponents = JSONEncodable<APIActionRowComponent<APIMessageActionRowComponent | APIModalActionRowComponent>>
    | APIActionRowComponent<APIMessageActionRowComponent |
        APIModalActionRowComponent> |
    ActionRowBuilder |
    ActionRow<MessageActionRowComponent> |
    ButtonBuilder[] | SelectMenuBuilder[] | TextInputBuilder[] | ActionRowBuilder[];
export class ActionRowBuilder extends DjsActionRowBuilder<any> {
    public type = ComponentType.ActionRow;
    public components: ButtonBuilder[] | SelectMenuBuilder[] | TextInputBuilder[] | ActionRowBuilder[] | ActionRow<MessageActionRowComponent>[] | MessageActionRowComponent[] = [];
    constructor(components: ButtonBuilder[] | SelectMenuBuilder[] | TextInputBuilder[] | ActionRowBuilder[] | ActionRow<MessageActionRowComponent>[] | MessageActionRowComponent[]) {
        super();
        if (components instanceof ActionRowBuilder || components instanceof ActionRow<MessageActionRowComponent>) {
            // fix no-unnecessary-callback-wrapper
            this.components = components.components.map(createAnyComponent) as ButtonBuilder[];
            this.type = components.type;
            this.data.components = components.components as APIMessageActionRowComponent[];
        } else if (Array.isArray(components)) {
            this.components = components ?? [];
            this.data.components = this.components as APIMessageActionRowComponent[];
        }
    }
    public from(other: ActionRowComponents) {
        if (isJSONEncodable(other)) {
            return new ActionRowBuilder(other.toJSON() as any);
        }
        return new ActionRowBuilder(other as any);
    }
}
export { ButtonBuilder, SelectMenuBuilder, TextInputBuilder };
