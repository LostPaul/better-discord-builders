import { TextInputBuilder } from '../components/TextInput';
export interface Modal {
    title: string;
    custom_id: string;
    components?: TextInputBuilder[];
}
