import { allowedLocales } from "./SlashCommand";
import { ContextMenu } from "../interfaces/ContextMenu";
import { ContextMenuCommandBuilder as DjsContextMenuBuilder } from 'discord.js';
export class ContextMenuCommandBuilder extends DjsContextMenuBuilder {
    public type: 2 | 3;
    public name: string;
    declare public name_localizations?: {
        [key in allowedLocales]: string;
    };
    constructor(data: ContextMenu) {
        super();
        this.type = data.type;
        this.name = data.name;
        if (data.name_localizations) {
            this.name_localizations = data.name_localizations as { [key in allowedLocales]: string; };
        }
    }
}
