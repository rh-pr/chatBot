export const postRequest = async(url, body) => {
    console.log('data', url);

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });


    const data = await response.json();

    if (!response.ok) {
        return null;
    }

    return data;
}

export const getRequest = async (url) => {
    
    const response = await fetch(url);
    
    if (!response) {
        return null
    }

    const data = await response.json();
    return data;
}

export const deleteRequest = async (url) => {
    const response = await fetch(url,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })

    if (!response) {
        return -1;
    } 

    const data = await response.json();
    return data;
}

export const updateRequest = async(url, body) => {
    const response = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });
    
    if (!response) {
        return null;
    }

    const data = await response.json();
    return data;
}