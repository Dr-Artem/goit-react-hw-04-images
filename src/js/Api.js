export const Api = async (name, page) => {
    const searchParams = new URLSearchParams({
        q: name,
        page: page,
        key: '32589447-ffbdd7a8f0a573b29764024b7',
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,
    });
    const response = await fetch(`https://pixabay.com/api/?${searchParams}`);
    if (!response.ok) {
        throw new Error(response.status);
    }
    return await response.json();
};
