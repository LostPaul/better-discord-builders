import { TextInputBuilder, TextInputStyle } from "../components/TextInput";
import { Modal } from "../interfaces/Modal";
import { ActionRowBuilder } from "../components/ActionRowTextInput";
import { ModalBuilder as DjsModalBuilder } from 'discord.js';
class ModalBuilder extends DjsModalBuilder {
    public title: string;
    public custom_id: string;
    public components: ActionRowBuilder[] = [];
    constructor(data: Modal) {
        super();
        this.title = data.title;
        this.custom_id = data.custom_id;
        this.components = [new ActionRowBuilder(data.components as TextInputBuilder[])];
    }
}
export { TextInputBuilder, TextInputStyle, ModalBuilder };
