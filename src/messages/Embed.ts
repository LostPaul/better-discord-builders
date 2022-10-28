import { EmbedBuilder as DjsEmbedBuilder, APIEmbed } from 'discord.js';
export class EmbedBuilder extends DjsEmbedBuilder {
    public constructor(data?: APIEmbed) {
        super(data);
    }
}
