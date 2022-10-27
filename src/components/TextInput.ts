import { ComponentType, TextInputStyle } from 'discord-api-types/v10';
import { TextInput } from '../interfaces/TextInput';
import { TextInputBuilder as DjsTextInputBuilder } from 'discord.js';
export class TextInputBuilder extends DjsTextInputBuilder {
    public type = ComponentType.TextInput;
    public custom_id: string;
    public style: 1 | 2;
    public label: string;
    public min_length?: number;
    public max_length?: number;
    public placeholder?: string;
    public value?: string;
    public required?: boolean;
    constructor(data: TextInput) {
        super();
        this.custom_id = data.custom_id;
        this.style = data.style;
        this.label = data.label;
        this.min_length = data.min_length;
        this.max_length = data.max_length;
        this.placeholder = data.placeholder;
        this.value = data.value;
        this.required = data.required;
    }
}
export { TextInputStyle };
