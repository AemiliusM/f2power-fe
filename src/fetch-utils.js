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

export const updatePower = async (id, obj) => {
    const resp = await fetch(`${URL}/${id}`,{
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)

    }
    )
    const data = await resp.json();
    return data;
}
export const getTypes = async () => {
    const resp = await fetch(`https://hidden-waters-84504.herokuapp.com/types`);
    const data = await resp.json();
    return data;
};

export function findByType(typeArr, type){
    for (const item of typeArr){
        if (item.type === type) {
            return item.id;
        }
    }
};

export const createPower = async (powerObject) => {
    const resp = await fetch(`${URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(powerObject),
    });
    const data = await resp.json();
    return data;
}