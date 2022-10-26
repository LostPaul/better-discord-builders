import { TextInputBuilder, TextInputStyle } from "../components/TextInput";
import { Modal } from "../interfaces/Modal";
import { ActionRowBuilder } from "../components/ActionRow";
export class ModalBuilder {
    public title: string;
    public custom_id: string;
    public components: ActionRowBuilder[] = [];
    constructor(data: Modal) {
        this.title = data.title;
        this.custom_id = data.custom_id;
        this.components = [new ActionRowBuilder(data.components as TextInputBuilder[])];
    }
}
export { TextInputBuilder, TextInputStyle };
