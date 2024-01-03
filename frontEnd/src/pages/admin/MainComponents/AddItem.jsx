import { useState, useEffect } from 'react';
import { axiosFetchCName, axiosSendImage } from '../../../components/api/axios';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#134083] p-[1.5rem] rounded shadow-md w-[30rem] h-[45rem] overflow-y-auto relative">
        {children}
        <button onClick={onClose} className="m-[0.5rem] absolute top-2 right-2 text-gray-600 w-[3rem] h-[3rem]">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#F9D62B"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.00386 9.41816C7.61333 9.02763 7.61334 8.39447 8.00386 8.00395C8.39438 7.61342 9.02755 7.61342 9.41807 8.00395L12.0057 10.5916L14.5907 8.00657C14.9813 7.61605 15.6144 7.61605 16.0049 8.00657C16.3955 8.3971 16.3955 9.03026 16.0049 9.42079L13.4199 12.0058L16.0039 14.5897C16.3944 14.9803 16.3944 15.6134 16.0039 16.0039C15.6133 16.3945 14.9802 16.3945 14.5896 16.0039L12.0057 13.42L9.42097 16.0048C9.03045 16.3953 8.39728 16.3953 8.00676 16.0048C7.61624 15.6142 7.61624 14.9811 8.00676 14.5905L10.5915 12.0058L8.00386 9.41816Z" fill="#F9D62B"></path> <path fillRule="evenodd" clipRule="evenodd" d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z" fill="#F9D62B"></path> </g></svg>
        </button>
      </div>
    </div>
  );
};

const AddItem = () => {
  const [files, setFiles] = useState(null);
  const [nameItem, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [found, setFound] = useState('');
  const [submitter, setSubmitter] = useState('');
  const [cloudName, setCloudName] = useState('');
  const [uploadedImageUrls, setUploadedImageUrls] = useState([]);

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    const fetchCloudName = async () => {
      try {
        const response = await axiosFetchCName.get();
        setCloudName(response.data); // Assuming the response contains a property "cloudName"
      } catch (error) {
        console.error('Error fetching cloud name:', error);
      }
    };

    fetchCloudName();
  }, []);

  const handleUpload = async () => {
    try {
      const imageUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

      const formData = new FormData();

      if (files && files.length === 2) {
        const newUploadedImageUrls = [];

        for (let i = 0; i < 2; i++) {
          let currentFile = files[i];
          formData.append('file', currentFile);
          formData.append('upload_preset', 'images_preset');

          // Upload the image to Cloudinary
          const responseCloudinary = await fetch(imageUrl, {
            method: 'POST',
            body: formData,
          });

          if (!responseCloudinary.ok) {
            throw new Error('Image upload to Cloudinary failed');
          }

          const cloudinaryData = await responseCloudinary.json();
          console.log('data', cloudinaryData);
          const uploadedImageUrl = cloudinaryData.secure_url;
          newUploadedImageUrls.push(uploadedImageUrl);
        }

        setUploadedImageUrls(newUploadedImageUrls);

        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().split('T')[0];  
        console.log('hello', formattedDate)
        const responseBackend = await axiosSendImage.post('', {
          imageUrl: newUploadedImageUrls,
          nameItem,
          desc,
          found,
          submitter,
          timestamp: formattedDate,
        });

        // Handle the response from the backend (if needed)
        console.log('Backend response:', responseBackend.data);
      } else {
        console.log('2 image lang be');
      }
    } catch (error) {
      console.error('Error uploading images:', error.message);
    }
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="bg-[#F9D62B] font-poppins mt-[0.8rem] text-black font-bold py-2 px-4 mb-[2rem] rounded-full text-[1rem] w-[15rem] hover:bg-blue-700"
      >
        ADD ITEM
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <form className='flex flex-col items-center space-y-[2rem]'>
          <div className='h-[17rem] w-[17rem] border-[0.3rem] border-[#F9D62B] rounded-xl p-[1rem] flex flex-col justify-center'>
            <input
              type="file"
              className='text-white text-[1.1rem]'
              accept="image/*"
              multiple
              onChange={(e) => setFiles(e.target.files)}
            />
          </div>
          <div className='flex flex-col items-center space-y-[2rem] text-white'>
            <input
              type="text"
              className='bg-[#17394C] border-[0.3rem] border-[#F9D62B] rounded-md w-[21rem] h-[3rem] text-[1.3rem]'
              placeholder="Name of item"
              value={nameItem}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              className='bg-[#17394C] border-[0.3rem] border-[#F9D62B] rounded-md w-[21rem] h-[3rem] text-[1.3rem]'
              placeholder="Description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <input
              type="text"
              className='bg-[#17394C] border-[0.3rem] border-[#F9D62B] rounded-md w-[21rem] h-[3rem] text-[1.3rem]'
              placeholder="Found at"
              value={found}
              onChange={(e) => setFound(e.target.value)}
            />
            <input
              type="text"
              className='bg-[#17394C] border-[0.3rem] border-[#F9D62B] rounded-md w-[21rem] h-[3rem] text-[1.3rem]'
              placeholder="Submitter's name"
              value={submitter}
              onChange={(e) => setSubmitter(e.target.value)}
            />
            <button type="button" className='text-black text-[1.5rem] bg-[#F9D62B] w-[15rem] h-[3rem] rounded-full' onClick={handleUpload}>
              ADD
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddItem;
