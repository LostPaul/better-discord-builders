import { SelectMenuOptionBuilder as DjsSelectMenuOptionBuilder, Emoji } from 'discord.js';
import { SelectMenuOption } from '../interfaces/SelectMenu';
import { getEmojis } from '../utils/getEmojis';
export class SelectMenuOptionBuilder extends DjsSelectMenuOptionBuilder {
    public label: string;
    public value: string;
    public description?: string;
    public emoji?: {
        name: string | null | undefined;
        id: string | null | undefined;
        animated?: boolean;
    } | string | undefined | Emoji;
    public default?: boolean;
    constructor(data: SelectMenuOption | SelectMenuOptionBuilder) {
        super();
        this.label = data.label;
        this.value = data.value;
        if (data.description) {
            this.description = data.description;
        }
        if (typeof data.emoji === 'string') {
            const emoji = getEmojis(data.emoji)[0];
            if (emoji) {
                this.emoji = {
                    name: emoji.name,
                    id: emoji.id,
                    animated: emoji.animated
                };
            }
        } else {
            this.emoji = {
                name: data.emoji?.name,
                id: data.emoji?.id
            };
            if (data.emoji?.animated) {
                this.emoji.animated = data.emoji.animated;
            }
        }
        this.default = data.default ?? false;
    }
}
