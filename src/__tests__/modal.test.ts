import { ModalBuilder, TextInputBuilder, TextInputStyle } from '../interactions/Modal';
test("modal-builder", () => {
    const modal = new ModalBuilder({
        title: "My Modal",
        custom_id: "myModal",
        components: [
            {
                style: TextInputStyle.Short,
                label: "What's your favorite color?",
                custom_id: "favoriteColorInput"
            },
            {
                style: TextInputStyle.Paragraph,
                label: "What's some of your favorite hobbies?",
                custom_id: "hobbiesInput"
            }
        ],
    });
    expect(modal).toBeDefined();
})