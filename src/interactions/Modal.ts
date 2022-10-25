import { TextInputBuilder } from "../components/TextInput";
import { Modal } from "../interfaces/Modal";
import { ActionRowBuilder } from "../components/ActionRow";
export class ModalBuilder {
    public title: string;
    public custom_id: string;
    public components: ActionRowBuilder[] = [];
    constructor(data: Modal) {
        this.title = data.title;
        this.custom_id = data.custom_id;
        this.components = [new ActionRowBuilder(data.components ?? [new TextInputBuilder({ custom_id: "test", label: "test", style: 1 })]) ?? [new ActionRowBuilder([new TextInputBuilder({ custom_id: "test", label: "test", style: 1 })])]];
    }
}
export { TextInputBuilder };
