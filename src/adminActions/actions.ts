import axios from "axios"


const deleteItem = async(url: string) =>{
    try {
        const res = await axios.delete(url);
        const data = res.data;
    
        return data;
        
    } catch (error) {
        console.log(error);
        return error
    }
}


const editItem = async(url: string, slugOrId: Object, newData: Object, token: String) =>{
    try{
        const res = await axios.post(url+slugOrId+token, newData);
        const data = res.data;
        
        return data
    } catch (error) {
        console.log(error);
        return error
    }
}


const addItem = async(url: string, newData: Object, token: String) =>{
    try{
        const res = await axios.post(url+token, newData);
        const data = res.data;
    } catch (error) {
        console.log(error);
        return error
    }
};

const getItemsOrItem = async(url: string) =>{
    try {
        const res = await axios.get(url);
        const data = res.data;

        return data;
    } catch (error) {
        console.log(error);
        return error
    }
}

const slugify = (text: string): string => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[\s\W-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

export {deleteItem, editItem, addItem, getItemsOrItem, slugify};