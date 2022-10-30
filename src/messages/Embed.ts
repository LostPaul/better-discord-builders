import { EmbedBuilder as DjsEmbedBuilder, APIEmbed } from 'discord.js';
import { Embed } from '../interfaces/Embed';
export class EmbedBuilder extends DjsEmbedBuilder {
    public title?: string;
    public description?: string;
    public url?: string;
    public color?: number;
    public timestamp?: string;
    public footer?: {
        text: string;
        icon_url?: string;
    };
    public image?: string | {
        url: string;
        proxy_url?: string;
        height?: number;
        width?: number;
    };
    public thumbnail?: {
        url: string;
    };
    public author?: {
        name: string;
        url?: string;
        icon_url?: string;
        proxy_icon_url?: string;
    };
    public fields?: {
        name: string;
        value: string;
        inline?: boolean;
    }[];
    public constructor(data?: Embed) {
        super(data as APIEmbed);
        if (data) {
            if (data.title) {
                this.title = data.title;
            }
            if (data.description) {
                this.description = data.description;
            }
            if (data.url) {
                this.url = data.url;
            }
            if (data.timestamp) {
                this.timestamp = data.timestamp;
            }
            if (data.footer) {
                this.footer = {
                    text: data.footer.text,
                    icon_url: data.footer.icon_url
                };
            }
            if (data.thumbnail) {
                this.thumbnail = {
                    url: data.thumbnail.url
                };
            }
            if (data.author) {
                this.author = {
                    name: data.author.name,
                    url: data.author.url,
                    icon_url: data.author.icon_url,
                    proxy_icon_url: data.author.proxy_icon_url
                };
            }
            if (data.fields) {
                this.fields = data.fields;
            }
            if (typeof data?.color === 'string') {
                this.color = parseInt(data.color.replace('#', ''), 16);
                this.data.color = this.color;
            }
            if (typeof data?.image === "string") {
                this.setImage(data.image);
            }
        }
    }
}
