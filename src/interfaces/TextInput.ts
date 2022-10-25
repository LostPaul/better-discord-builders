import { ComponentType, TextInputStyle } from 'discord-api-types/v10';
export interface TextInput {
    type?: ComponentType;
    custom_id: string;
    style: 'short' | 'paragraph' | 1 | 2;
    label: string;
    min_length?: number;
    max_length?: number;
    placeholder?: string;
    value?: string;
    required?: boolean;
}
enum StringTextInputStyle {
    'short' = 1,
    'paragraph' = 2
}
export { TextInputStyle, StringTextInputStyle };
