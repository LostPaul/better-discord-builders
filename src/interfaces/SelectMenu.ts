import { SelectMenuOptionBuilder, Emoji, SelectMenuComponentOptionData } from 'discord.js';
import { SelectMenuOptionBuilder as InternalSelectMenuOptionBuilder } from '../components/SelectMenuOption';
export enum SelectMenuStyle {
    Text = 3,
    User = 5,
    Role = 6,
    Mentionable = 7,
    Channels = 8,
}
export interface SelectMenu {
    // make it that you have to use the enum
    type: 3 | 5 | 6 | 7 | 8;
    custom_id: string;
    options: SelectMenuOption[];
    placeholder?: string;
    min_values?: number;
    max_values?: number;
    disabled?: boolean;
}
export interface InternalSelectMenuOption extends SelectMenuOptionBuilder {
    label: string;
    value: string;
    description?: string;
    emoji?: {
        name: string;
        id: string;
        animated?: boolean;
    } | string | undefined | Emoji;
    default?: boolean;
}
export interface SelectMenuOption {
    label: string;
    value: string;
    description?: string;
    emoji?: {
        name: string;
        id: string;
        animated?: boolean;
    } | string | undefined | Emoji;
    default?: boolean;
}
