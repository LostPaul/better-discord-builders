import { ButtonBuilder, ButtonStyle } from '../components/Button';
import { ActionRowBuilder } from '../components/ActionRow';
import { ButtonInteraction} from 'discord.js'
test('ButtonBuilder', () => {
    const button = new ActionRowBuilder([
        new ButtonBuilder({
            style: ButtonStyle.Link,
            label: "Support Server",
            url: "https://discord.gg/EbBsuxVNYT"
        }),
        new ButtonBuilder({
            style: ButtonStyle.Link,
            label: "Invite Link",
            url: "https://discord.com/api/oauth2/authorize?client_id=887939311373267005&permissions=1610632320&scope=bot%20applications.commands"
        }),
        new ButtonBuilder({
            style: ButtonStyle.Link,
            label: "Website",
            url: "https://about.emojiguardian.xyz"
        })
    ])
    const components = [new ActionRowBuilder([new ButtonBuilder({
        label: "test",
        custom_id: JSON.stringify(["test", "test"]),
        style: ButtonStyle.Primary
      })])]
      console.log(components)
    expect(button).toBeDefined();
});