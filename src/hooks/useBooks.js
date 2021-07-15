import { useQuery } from "react-query";
import axios from "axios";
let results = []
export const getBooks = async (type, id, append) => {
    const { data } = await axios.get(`https://openlibrary.org/${type}/${id}.json`);
    if (append) {
        const inResults = results.findIndex(i => i.key == data.key)
        results = inResults != -1 ? results : [...results, data]
    }
    return append ? results : data;
};

export default function useBooks(type, id, append) {
    return useQuery("books", () => getBooks(type, id, append));
}
