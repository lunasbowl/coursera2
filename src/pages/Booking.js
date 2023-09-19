import { fetchAPI, submitAPI } from "./api";

export async function getAvailableTimes(date) {
    if (date) {
        const selectedDate = new Date(date);
        const times = await fetchAPI(selectedDate);
        return times;
    }
    return [];
}

export async function submitBooking(formData) {
    return await submitAPI(formData);
}
