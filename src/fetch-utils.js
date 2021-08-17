const URL = 'https://hidden-waters-84504.herokuapp.com/powers';

export const getPowers = async () => {
    const resp = await fetch(`${URL}`);
    const data = await resp.json();
    return data;
};
export const getOnePower = async (id) => {
    const resp = await fetch(`${URL}/${id}`);
    const data = await resp.json();
    return data;
};