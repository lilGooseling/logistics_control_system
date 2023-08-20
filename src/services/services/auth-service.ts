import httpClient  from "../httpClient";
import {formError} from "../../interfaces/IApp";

const authService = {
    async login(email: string, password: string): Promise<{ token?: string, errors?: formError[], error?: boolean }> {
        try {
            const { data } = await httpClient.request({
                url: 'authentication',
                method: 'POST',
                data: {
                    email,
                    password
                }
            });

            return data;
        } catch (e) {
            return {
                error: true
            }
        }
    },

    async getCurrentUser(): Promise<Partial<{ id:number, username: string, error: boolean }>> {
        try {
            const { data } = await httpClient.request({
                url: 'users/current',
                method: 'GET',
            });
            return data;
        } catch (e) {
            return {
                error: true
            }
        }
    }
};

export default authService;
