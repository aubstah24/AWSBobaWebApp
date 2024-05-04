import { useState} from "react";
import {Button, Input} from "semantic-ui-react";
import { supabase } from "../supabase_client";

export function UploadImage() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const Upload = async () => {

        try {
            const {data, error} = await supabase.storage.from('drinkImagesStorage').upload(`${selectedFile.name}`, selectedFile);

            if (error) {
                console.log('Error uploading image: ', error.message);
            } else {
                console.log('Uploaded Successfully: ', data);
                alert('Image uploaded Successfully')
            }
        } catch (error) {
            console.log('Error uploading image: ', error.message);
            alert('Image Upload Failed.')
        }

    }

    return (
        <div>
            <Input type="file" onChange={handleFileChange}/>
            <Button onClick={Upload}>Upload</Button>
        </div>
    )
}
