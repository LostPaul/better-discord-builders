interface baseEmoji {
    name: string;
    id: string;
    animated: boolean;
    image: string;
    url: string;
}
class Emoji implements baseEmoji {
    public name: string;
    public id: string;
    public animated: boolean;
    public image: string;
    public url: string;
    constructor(name: string, id: string, animated: boolean, image: string) {
        this.name = name;
        this.id = id;
        this.animated = animated;
        this.image = image;
        this.url = this.image;
    }
    public toString() {
        return `<${this.animated ? 'a' : ''}:${this.name}:${this.id}>`;
    }
}
export function getEmojis(content: any) {
    let args = content.replace(/></g, '> <').split(/ +/g);
    args = args.filter((arg: any) => arg.match(/<?(a)?:?(\w{2,32}):(\d{14,20})>?/));
    const emojis: Emoji[] = [];

    for (const arg of args) {
        const matchedEmoji = arg.match(/<?(a)?:?(\w{2,32}):(\d{14,20})>?/);
        const [, isAnimated, name, id] = matchedEmoji;
        const animated = isAnimated === 'a' ? true : false;
        if (!emojis.some((e: any) => e.id === id)) {
            const emoji = new Emoji(
                name,
                id,
                animated,
                `${animated ?
                    `https://cdn.discordapp.com/emojis/${id}.gif?v=1`
                    :
                    `https://cdn.discordapp.com/emojis/${id}.png?v=1`
                }`
            );
            emojis.push(emoji);
        }
    }
    return emojis;
}
