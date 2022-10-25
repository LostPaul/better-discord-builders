export enum SelectMenuStyle {
    text = 3,
    user = 5,
    role = 6,
    mentionable = 7,
    channels = 8,
}
export enum StringSelectMenuStyle {
    'text' = 3,
    'user' = 5,
    'role' = 6,
    'mentionable' = 7,
    'channels' = 8,
}
export interface SelectMenu {
    // make it that you have to use the enum
    type: 3 | 5 | 6 | 7 | 8 | 'text' | 'user' | 'role' | 'mentionable' | 'channels';
    custom_id: string;
    options: SelectMenuOptions[];
    placeholder?: string;
    min_values?: number;
    max_values?: number;
    disabled?: boolean;
}
export interface SelectMenuOptions {
    label: string;
    value: string;
    description?: string;
    emoji?: {
        name: string;
        id: string;
        animated?: boolean;
    };
    default?: boolean;
}