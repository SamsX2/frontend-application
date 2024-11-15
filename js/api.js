const API_URL = "http://localhost:3000/api/pastel";

export const getpastel = async () => {
    const response = await fetch(API_URL);
    return response.json();
};

//obtener producto por ID
export const getpastelByID = async(id) => {
    const response = await fetch (`${API_URL}/${id}`);
    return response.json();
};

//crear un producto
export const addPastel = async (pastel) => {
    const response = await fetch (API_URL, {
        method: "POST", 
        headers: { "content-type": "application/json" },
        body: JSON.stringify(pastel)
    });
    return response.json();
};

//actualizar un producto
export const updatePastel = async (id, pastel) => {
    return fetch (`{API_URL}/${id}`,{
        method: "DELETE", 
    });
};