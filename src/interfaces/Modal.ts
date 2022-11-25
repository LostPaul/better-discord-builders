import { TextInputBuilder } from '../components/TextInput';
import { TextInput } from './TextInput';
export interface Modal {
    title: string;
    custom_id: string;
    components?: TextInput[];
}
