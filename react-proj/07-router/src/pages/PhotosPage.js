import { useEffect, useState } from "react";
import axios from 'axios';

export default function PhotosPage() {

    const [photo, setPhoto] = useState(null);
    
    // photo 데이터 가져오기 async 사용
    const getPhotos = async() => {

        try{
            const res = await axios("https://jsonplaceholder.typicode.com/photos");
            setPhoto(res.data);
        } catch(error){
            console.error("Error 발생했어~~", error);
        }

    }
    
    useEffect(() => {
        // getPhotos함수 호출
        getPhotos();
    }, [])

    return (
        <>
            <h2>사진 갤러리 페이지</h2>
            {photo ? <> {photo.map((value) => (
                <ul key={value.id}>
                    <li>사진 번호: {value.id}</li>
                    <li>제목:{value.title}</li>
                    <img src={value.url} style={{width: 100, height:100}}></img>
                    {/* <li>사진url:{value.url}</li> */}
                    <li>썸네일url:{value.thumbnailUrl}</li>
                </ul>
            ))}
            
            
            </> : <h2>Loading중이야~~~</h2>}
        </>
    )
}
