import { SlashCommand, SlashCommandOption } from '../interfaces/SlashCommand';
import { toPermissionBitfield } from '../utils/toPermissionBitfield';
import { ChannelType, APIApplicationCommandOption, APIApplicationCommandOptionChoice } from "discord-api-types/v10";
import { SlashCommandBuilder as DjsSlashCommandBuilder, ToAPIApplicationCommandOptions } from 'discord.js';
export class SlashCommandBuilder extends DjsSlashCommandBuilder {
    private type = 1;
    private application_id?: string;
    private guild_id?: string;
    public name: string;
    declare public name_localizations?: {
        [key in allowedLocales]: string;
    };
    public description: string;
    declare public description_localizations?: {
        [key in allowedLocales]: string;
    };
    public options: SlashCommandOptionBuilder[];
    declare public default_member_permissions: string;
    public dm_permission: boolean;
    constructor(data: SlashCommand) {
        super();
        this.name = data.name;
        if (data.name_localizations) {
            this.name_localizations = data.name_localizations as { [key in allowedLocales]: string; };
        }
        this.description = data.description;
        if (data.description_localizations) {
            this.description_localizations = data.description_localizations as { [key in allowedLocales]: string; };
        }
        this.options = data.options?.map((option) => new SlashCommandOptionBuilder(option)) as SlashCommandOptionBuilder[];
        if (data.default_member_permissions) {
            this.default_member_permissions = toPermissionBitfield(data.default_member_permissions).toString();
        }
        this.dm_permission = data.dm_permission as boolean;
    }
}
export class SlashCommandOptionBuilder implements ToAPIApplicationCommandOptions {
    public type: OptionType;
    public name: string;
    public name_localizations?: {
        [key in allowedLocales]: string;
    };
    public description: string;
    public description_localizations?: {
        [key in allowedLocales]: string;
    };
    public required?: boolean;
    public choices?: {
        name: string;
        value: string | number;
    }[];
    public options?: SlashCommandOptionBuilder[];
    public channel_types?: (0 | 1 | 2 | 3 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15)[];
    public min_value?: number;
    public max_value?: number;
    public min_length?: number;
    public max_length?: number;
    public autocomplete?: boolean;
    public toJSON(): any {
        return {
            type: this.type as unknown as number,
            name: this.name,
            description: this.description,
            required: this.required,

            choices: this.choices as unknown as APIApplicationCommandOptionChoice<any>[],
            options: this.options?.map((option) => option.toJSON()),
            channel_types: this.channel_types,
            min_value: this.min_value,
            max_value: this.max_value,
            min_length: this.min_length,
            max_length: this.max_length,
            autocomplete: this.autocomplete
        };
    }
    constructor(data: SlashCommandOption) {
        this.type = data.type;
        this.name = data.name;
        this.description = data.description;
        this.required = data.required;
        this.choices = data.choices;
        this.options = data.options?.map(option => new SlashCommandOptionBuilder(option));
        this.channel_types = data.channel_types;
        this.min_value = data.min_value;
        this.max_value = data.max_value;
        this.min_length = data.min_length;
        this.max_length = data.max_length;
        this.autocomplete = data.autocomplete;
    }
}
export enum OptionType {
    Subcommand = 1,
    SubcommandGroup = 2,
    String = 3,
    Integer = 4,
    Boolean = 5,
    User = 6,
    Channel = 7,
    Role = 8,
    Mentionable = 9,
    Number = 10,
    Attachment = 11
}
export type allowedLocales = 'da' |
    'de' |
    'en-GB' |
    'en-US' |
    'es-ES' |
    'fr' |
    'hr' |
    'it' |
    'lt' |
    'hu' |
    'nl' |
    'no' |
    'pl' |
    'pt-BR' |
    'ro' |
    'fi' |
    'sv-SE' |
    'vi' |
    'tr' |
    'cs' |
    'el' |
    'bg' |
    'ru' |
    'uk' |
    'hi' |
    'th' |
    'zh-CN' |
    'ja' |
    'zh-TW' |
    'ko';
export { ChannelType };
