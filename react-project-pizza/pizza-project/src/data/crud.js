function request(method){
    return async (url,data = {},option = {}) => {
        const response = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(data),
            ...option
        });
        return response.json();
    }
};

export const get = request('get');
export const post = request('post');
export const put = request('put');
export const remove = request('delete');