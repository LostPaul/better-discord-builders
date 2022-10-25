import { ComponentType, TextInputStyle } from 'discord-api-types/v10';
import { TextInput, StringTextInputStyle } from '../interfaces/TextInput';
export class TextInputBuilder {
    public type = ComponentType.TextInput;
    public custom_id: string;
    public style: 1 | 2 | 'paragraph' | 'short';
    public label: string;
    public min_length?: number;
    public max_length?: number;
    public placeholder?: string;
    public value?: string;
    public required?: boolean;
    constructor(data: TextInput) {
        this.custom_id = data.custom_id;
        this.style = (typeof data.style === 'string' ? StringTextInputStyle[data.style.toLowerCase() as unknown as StringTextInputStyle] : data.style) as unknown as 1 | 2 | 'paragraph' | 'short';
        this.label = data.label;
        this.min_length = data.min_length;
        this.max_length = data.max_length;
        this.placeholder = data.placeholder;
        this.value = data.value;
        this.required = data.required;
    }
}
