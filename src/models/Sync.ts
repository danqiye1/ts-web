import axios, { AxiosPromise } from 'axios';

export class Sync<T> {

    constructor(private readonly rootURL: string) {}

    /**
     * Fetch a user based on the id
     * @param userid 
     * @returns 
     */
    async fetch(userid: number) : AxiosPromise {
        return axios.get(`${this.rootURL}/${userid}`)
    }

    /**
     * Save User to DB
     */
    save(data: T): AxiosPromise {
        const id = data;
        if (id) {
            return axios.put(`${this.rootURL}/${id}`, data);
        } else {
            return axios.post(`${this.rootURL}`, data);
        }
    }
}