import axios from 'axios';
import type * as Bored from "./types/bored"

export const getActivity = async (): Promise<Bored.BoredResponse> => {
    try {
        const response = await axios.get('https://www.boredapi.com/api/activity');
        return response.data;
    } catch (error) {
        throw new Error(String(error));
    }
}
