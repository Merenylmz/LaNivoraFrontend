const getTextWithGenderId = (input: number | string): string => {
    try {
        if (!input) {
            return "Belirtilmemiş"; 
        }
        const id = typeof input === "number" ? input : parseInt(input.toString());
        
        switch (id) {
            case 0:
                return "Erkek";
            case 1:
                return "Kadın";
            case 2:
                return "Tümü";
            default:
                return "Belirtilmemiş";
        }
    } catch (error) {
        console.error("Gender ID çözümlemesinde hata:", error);
        return "Belirtilmemiş";
    }
};

export default getTextWithGenderId;
