import { ComponentType, ButtonStyle } from 'discord-api-types/v10';
export interface Button {
    type?: ComponentType;
    style: 'primary' | 'secondary' | 'success' | 'danger' | 'link' | 1 | 2 | 3 | 4 | 5;
    label?: string;
    emoji?: {
        name: string;
        id: string;
        animated?: boolean;
    } | string | undefined;
    custom_id: string;
    url?: string;
    disabled?: boolean;
}
enum StringButtonStyle {
    'primary' = 1,
    'secondary' = 2,
    'success' = 3,
    'danger' = 4,
    'link' = 5
}
export { ButtonStyle, StringButtonStyle };
