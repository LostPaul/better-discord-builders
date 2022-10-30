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
    constructor(data: TextInput | TextInputBuilder) {
        super();
        this.custom_id = data.custom_id;
        this.style = data.style;
        this.label = data.label;
        this.min_length = data.min_length ?? 0;
        if (data.max_length) {
            console.log(data.max_length);
            this.max_length = data.max_length;
        } else {
            delete this.max_length;
        }
        this.placeholder = data.placeholder ?? "";

        this.value = data.value ?? "";
        this.required = data.required ?? false;
        this.data.custom_id = this.custom_id;
        this.data.style = this.style;
        this.data.label = this.label;
        this.data.min_length = this.min_length;
        this.data.max_length = this.max_length;
        this.data.placeholder = this.placeholder;
        this.data.value = this.value;
        this.data.required = this.required;
    }
}
export { TextInputStyle };
