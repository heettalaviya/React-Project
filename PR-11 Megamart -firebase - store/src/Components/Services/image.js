import axios from "axios";

const uploadImage = async(fileData) => {

    let imageData = new FormData();

    imageData.append('file', fileData);
    imageData.append('upload_preset', 'megamart');
    imageData.append('cloude_name', 'dhdq0uyjk');

    let res = await axios.post(`https://api.cloudinary.com/v1_1/dhdq0uyjk/image/upload`, imageData)
    return res.data.secure_url;

}


export default uploadImage;