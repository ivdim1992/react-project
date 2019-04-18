function request(method){
    const getAuthHeader = () => {
        const token = window.localStorage.getItem('auth_token');
        return (token && token.length) 
        ? {'Authorization': `Bearer ${token}`}
        : null
    }
    return async (url,data = {},option = {}) => {
        const authHeader = getAuthHeader();
        const response = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                ...authHeader
            },
            body: Object.keys(data).length
            ? JSON.stringify(data)
            : undefined,
            ...option
        });
        return response.json();
    }
};

export const get = request('GET');
export const post = request('POST');
export const put = request('PUT');
export const remove = request('DELETE');