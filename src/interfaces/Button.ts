import { ComponentType, ButtonStyle } from 'discord-api-types/v10';
import { Emoji } from 'discord.js';
export interface Button {
    type?: ComponentType;
    style: 1 | 2 | 3 | 4 | 5;
    label?: string;
    emoji?: {
        name: string;
        id: string;
        animated?: boolean;
    } | string | undefined | Emoji;
    custom_id: string;
    url?: string;
    disabled?: boolean;
}
export { ButtonStyle };
