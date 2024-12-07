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
    console.log('url from response', url);
    
    const response = await fetch(url);
    
    if (!response) {
        return null
    }

    const data = await response.json();
    return data;
}