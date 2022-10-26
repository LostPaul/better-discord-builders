import { SlashCommand, SlashCommandOption } from '../interfaces/SlashCommand';
import { toPermissionBitfield } from '../utils/toPermissionBitfield';
import { ChannelType } from "discord-api-types/v10";
export class SlashCommandBuilder {
    private type = 1;
    private application_id?: string;
    private guild_id?: string;
    public name: string;
    public name_localizations?: {
        [key in allowedLocales]: string;
    };
    public description: string;
    public description_localizations?: {
        [key in allowedLocales]: string;
    };
    public options?: SlashCommandOptionBuilder[];
    public default_member_permissions?: string;
    public dm_permission?: boolean;
    constructor(data: SlashCommand) {
        this.name = data.name;
        if (data.name_localizations) {
            this.name_localizations = data.name_localizations as { [key in allowedLocales]: string; };
        }
        this.description = data.description;
        if (data.description_localizations) {
            this.description_localizations = data.description_localizations as { [key in allowedLocales]: string; };
        }
        this.options = data.options;
        if (data.default_member_permissions) {
            this.default_member_permissions = toPermissionBitfield(data.default_member_permissions).toString();
        }
        this.dm_permission = data.dm_permission;
    }
}
export class SlashCommandOptionBuilder {
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
    public channel_types?: ChannelType[];
    public min_value?: number;
    public max_value?: number;
    public min_length?: number;
    public max_length?: number;
    public autocomplete?: boolean;
    constructor(data: SlashCommandOption) {
        this.type = data.type;
        this.name = data.name;
        this.description = data.description;
        this.required = data.required;
        this.choices = data.choices;
        this.options = data.options;
        this.channel_types = data.channel_types;
        this.min_value = data.min_value;
        this.max_value = data.max_value;
        this.min_length = data.min_length;
        this.max_length = data.max_length;
        this.autocomplete = data.autocomplete;
    }
}
export enum OptionType {
    SubCommand = 1,
    SubCommandGroup = 2,
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
