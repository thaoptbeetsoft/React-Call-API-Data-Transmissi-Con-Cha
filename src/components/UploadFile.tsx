import { useState } from "react";
import storage from './FileBase'
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
function UploadFile() {
    const [imgUrl, setImgUrl] = useState("");
    const [progresspercent, setProgresspercent] = useState(0);
    const handleSubmit = (e: any) => {
        e.preventDefault();//không cho tạo trang mới
        const file = e.target[0]?.files[0];//lấy file từ input
    
        if (!file) return;//check xem file có tồn tại không
    
        const storageRef = ref(storage, `phone/${file.name}`);//tạo thư mục tên phone rồi lưu tất cả vào đó
        const uploadTask = uploadBytesResumable(storageRef, file);
    
        uploadTask.on("state_changed",
          (snapshot) => {
            const progress =
              Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);//tính % upload được
            setProgresspercent(progress);
          },
          (error) => {
            alert(error);//có lỗi thì thông báo ra lỗi
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {//lấy url từ filebase sau khi upload xong
              setImgUrl(url);
            });
          }
        );
      }
    return (
        <div className="App">
        <form onSubmit={handleSubmit} className='form'>
          <input type='file' />
          <button type='submit'>Upload</button>
        </form>
        {
          !imgUrl &&
          <div className='outerbar'>
            <div className='innerbar' style={{ width: `${progresspercent}%` }}>{progresspercent}%</div>
          </div>
        }
        {
          imgUrl &&
          <img src={imgUrl} alt='uploaded file' height={200} />
        }
      </div>
    );
}

export default UploadFile;

