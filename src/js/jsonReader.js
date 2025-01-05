export async function fetchJson(filePath)
{
    try{
        const response = await fetch(filePath);
        if(!response.ok) throw new Error(`Erro ao carregar os dados do post: ${response.status}`);
        return await response.json();
    }catch(error){
        console.error('Erro ao carregar arquivo JSON:', error);
        return null;
    }
}