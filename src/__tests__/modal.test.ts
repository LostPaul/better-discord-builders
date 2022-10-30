import { ModalBuilder, TextInputBuilder, TextInputStyle } from '../interactions/Modal';
test("modal-builder", () => {
    const modal = new ModalBuilder({
        title: "test",
        custom_id: "test",
        components: [new TextInputBuilder({
            style: TextInputStyle.Short,
            label: "test",
            custom_id: "test"
        })],
    });
    console.log(modal.toJSON());
    expect(modal).toBeDefined();
})