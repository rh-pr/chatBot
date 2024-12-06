export const postRequest = async(url, body) => {
    console.log('data', url);

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });

    console.log('response', response)

    const data = await response.json();

    if (!response.ok) {
        return null;
    }

    return data;
}