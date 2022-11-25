export enum ComponentType {
    ActionRow = 1,
    Button = 2,
    SelectMenuString = 3,
    TextInput = 4,
    SelectMenuUser = 5,
    SelectMenuRole = 6,
    SelectMenuMentionable = 7,
    SelectMenuChannel = 8,
}
export enum CommandTypes {
    SlashCommand = 1,
    UserContextMenu = 2,
    MessageContextMenu = 3,
}
export enum CommandOptionTypes {
    Subcommand = 1,
    SubcommandGroup = 2,
    String = 3,
    Integer = 4,
    Boolean = 5,
    User = 6,
    Channel = 7,
    Role = 8,
    Mentionable = 9,
    Number = 10,
    Attachment = 11,
}
export enum InteractionTypes {
    Ping = 1,
    ApplicationCommand = 2,
    MessageComponent = 3,
    ApplicationCommandAutocomplete = 4,
    ModalSubmit = 5
}
