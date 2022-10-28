import { Button } from '../interfaces/Button';
import { ComponentType, ButtonStyle } from 'discord-api-types/v10';
import { getEmojis } from '../utils/getEmojis';
import { ButtonBuilder as DjsButtonBuilder } from 'discord.js';
export class ButtonBuilder extends DjsButtonBuilder {
    public type: ComponentType.Button;
    public style: ButtonStyle;
    public label?: string;
    public emoji?: {
        name: string | null | undefined;
        id: string | null | undefined;
        animated?: boolean | undefined | null;
    } | string;
    public custom_id: string;
    public url?: string;
    public disabled?: boolean;
    constructor(data: Button) {
        super();
        this.type = ComponentType.Button;
        this.label = data.label;
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
        this.style = data.style;
        this.custom_id = data.custom_id;
        this.url = data.url;
        this.disabled = data.disabled;
    }
}
export { ButtonStyle };
