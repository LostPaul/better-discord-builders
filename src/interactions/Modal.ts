import { TextInputBuilder, TextInputStyle } from "../components/TextInput";
import { Modal } from "../interfaces/Modal";
import { ActionRowTextInputBuilder } from "../components/ActionRowTextInput";
import { ModalBuilder as DjsModalBuilder, APIActionRowComponent, APITextInputComponent } from 'discord.js';
class ModalBuilder extends DjsModalBuilder {
    public title: string;
    public custom_id: string;
    public components: ActionRowTextInputBuilder[] = [];
    constructor(data: Modal | ModalBuilder) {
        super();
        this.title = data.title;
        this.custom_id = data.custom_id;
        this.components = [new ActionRowTextInputBuilder(data.components as TextInputBuilder[])];
        this.data.title = this.title;
        this.data.custom_id = this.custom_id;
        this.data.components = this.components as APIActionRowComponent<APITextInputComponent>[];
    }
}
export { TextInputBuilder, TextInputStyle, ModalBuilder };
