export const createActor = (values: { [key: string]: any }) => {
    const formData = new FormData();

    for (const key in values) {
        if (values.hasOwnProperty(key)) {
            if (Array.isArray(values[key]) || typeof values[key] === "object") {
                formData.append(key, JSON.stringify(values[key]));
            } else {
                formData.append(key, values[key]);
            }
        }
    }

    return formData;
};
