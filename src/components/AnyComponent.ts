import { ComponentType } from '../interfaces/Types';
import { ButtonBuilder } from './Button';
import { SelectMenuBuilder } from './SelectMenu';
import { TextInputBuilder } from './TextInput';
import { ActionRowBuilder } from './ActionRow';
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
import { Button } from '../interfaces/Button';
export function createAnyComponent(component: { data: { type: ComponentType; } }) {
    switch (component.data.type) {
        case ComponentType.Button:
            return new ButtonBuilder(component as unknown as Button);
        case ComponentType.SelectMenuChannel || ComponentType.SelectMenuRole || ComponentType.SelectMenuUser || ComponentType.SelectMenuMentionable:
            return new SelectMenuBuilder(component as unknown as SelectMenuBuilder);
        case ComponentType.TextInput:
            return new TextInputBuilder(component as unknown as TextInputBuilder);
        default:
            return component;
    }
}
