export const uploadImage = async (contentType, blob) => {
    const response = await fetch('/api/uploader', {
        method: 'PUT',
        headers: {
            'Content-Type': contentType
        },
        body: blob,
    });

    let result = await response.json();

    return result;
}

export const uploadFile = async (contentType, data) => {
    const response = await fetch('/api/fileuploader', {
        method: 'POST',
        headers: {
            'Content-Type': contentType
        },
        body: JSON.stringify({data}),
    });

    let result = await response.json();

    return result;
}

export const uploadFiles = async (contentType, data) => {
    const response = await fetch('/api/filesuploader', {
        method: 'POST',
        headers: {
            'Content-Type': contentType
        },
        body: JSON.stringify({data}),
    });

    let result = await response.json();

    return result;
}

export const saveOpenGraph = async (dataOpenGraph) => {
    const response = await fetch('/api/opengraph', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ dataOpenGraph }),
    });

    let result = await response.json();

    //console.log(result);

    return result;
}

export const saveIconPost = async (id, url, field) => {
    const response = await fetch('/api/updateicon', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, url, field }),
    });

    let result = await response.json();

    //console.log(result);

    return result;
}


export const updateTextField = async (id, field, value) => {
    const response = await fetch('/api/update_text_field', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, field, value }),
    });

    let result = await response.json();

    //console.log(result);

    return result;
}

export const removeFile = async (url) => {
    const response = await fetch('/api/remove_file', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url }),
    });

    let result = await response.json();

    //console.log(result);

    return result;
}

export const updateIncludeFiles = async (id, value) => {
    const response = await fetch('/api/update_include_files', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, value }),
    });

    let result = await response.json();

    // //console.log(result);

    return result;
}