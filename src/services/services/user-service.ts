import httpClient  from "../httpClient";
import {formError} from "../../interfaces/IApp";
import {IUserServerResponse} from "../../interfaces/IUser";

const root = 'users';

const userService = {
    async getAllUsers(limit: number, offset: number, query: string, sorting: string): Promise<{ success: boolean, data?: IUserServerResponse }> {
        try {
            const { data } = await httpClient.request({
                url: `${root}?limit=${limit}&offset=${offset}${!!query ? `&query=${query}` : ''}${!!sorting ? sorting : ''}`,
                method: 'GET',
            });

            return {
                success: true,
                data
            }
        } catch (e) {
            return {
                success: false
            }
        }
    },
};

export default userService;
