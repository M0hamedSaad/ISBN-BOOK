import { useQuery } from "react-query";
import axios from "axios";
export const getBooks = async (key) => {
    console.log(`https://openlibrary.org${key}.json`);
    const { data } = await axios.get(`https://openlibrary.org${key}.json`);
    return data;
};

export default function useBookDescription(key) {
    return useQuery("details", () => getBooks(key));
}
