import { Button } from '../interfaces/Button';
import { ComponentType, ButtonStyle } from 'discord-api-types/v10';
import { getEmojis } from '../utils/getEmojis';
import { ButtonBuilder as DjsButtonBuilder, APIMessageComponentEmoji } from 'discord.js';
export class ButtonBuilder extends DjsButtonBuilder {
    public type: ComponentType.Button;
    public style: ButtonStyle;
    public label?: string;
    public emoji?: {
        name: string | null | undefined;
        id: string | null | undefined;
        animated?: boolean | undefined | null;
    } | string;
    public custom_id?: string;
    public url?: string;
    public disabled?: boolean;
    constructor(data: Button | ButtonBuilder) {
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
            if (data.emoji) {
                this.emoji = {
                    name: data.emoji?.name,
                    id: data.emoji?.id
                };
                if (data.emoji?.animated) {
                    this.emoji.animated = data.emoji.animated;
                }
            }
        }
        this.style = data.style;
        if (data.custom_id) {
            this.custom_id = data.custom_id;
            (this.data as ButtonBuilder).custom_id = this.custom_id;
        }
        if (data.url) {
            this.url = data.url;
            (this.data as ButtonBuilder).url = this.url;
        }
        if (data.emoji !== undefined) {
            this.data.emoji = this.emoji as APIMessageComponentEmoji;
        } else {
            delete this.data.emoji;
        }
        this.disabled = data.disabled ?? false;
        this.data.type = this.type;
        this.data.style = this.style;
        this.data.label = this.label;
        this.data.disabled = this.disabled;
    }
}
export { ButtonStyle };
