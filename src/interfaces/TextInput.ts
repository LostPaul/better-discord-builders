import { ComponentType, TextInputStyle } from 'discord-api-types/v10';
export interface TextInput {
    type?: ComponentType;
    custom_id: string;
    style: 1 | 2;
    label: string;
    min_length?: number;
    max_length?: number;
    placeholder?: string;
    value?: string;
    required?: boolean;
}
export { TextInputStyle };
