import { allowedLocales, SlashCommandOptionBuilder } from '../interactions/SlashCommand';
import { PermissionFlagsBits, ChannelType } from "discord-api-types/v10";
export interface SlashCommand {
    name: string;
    name_localizations?: {
        [key in allowedLocales]?: string;
    };
    description: string;
    description_localizations?: {
        [key in allowedLocales]?: string;
    };
    options?: SlashCommandOptionBuilder[];
    default_member_permissions?: (keyof typeof PermissionFlagsBits)[];
    dm_permission?: boolean;
    guild_id?: string;
}
export interface SlashCommandOption {
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
    name: string;
    name_localizations?: {
        [key in allowedLocales]?: string;
    };
    description: string;
    description_localizations?: {
        [key in allowedLocales]?: string;
    };
    required?: boolean;
    choices?: {
        name: string;
        name_localizations?: {
            [key in allowedLocales]?: string;
        };
        value: string | number;
    }[];
    options?: SlashCommandOptionBuilder[];
    channel_types?: (0 | 1 | 2 | 3 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15)[];
    min_value?: number;
    max_value?: number;
    min_length?: number;
    max_length?: number;
    autocomplete?: boolean;
}
