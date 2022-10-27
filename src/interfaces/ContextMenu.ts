import { allowedLocales } from "../interactions/SlashCommand";
export interface ContextMenu {
    type: 2 | 3;
    name: string;
    name_localizations?: {
        [key in allowedLocales]: string;
    };
}
