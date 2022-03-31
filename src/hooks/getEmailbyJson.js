import { users } from "../data/data.json";

const getEmailbyJson = (email) => {
    return users.filter((user) =>
        user.email.toLocaleLowerCase().includes(email.toLocaleLowerCase())
    );
};
export default getEmailbyJson;
