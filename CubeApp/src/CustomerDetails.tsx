
import React, { useEffect, useState } from 'react';
import { CustomerInterface } from './Interfaces';

interface CustomerDetailsProps {
  customer: CustomerInterface;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  const [imagesUrls, setImagesUrls] = useState<string[]>([]);

 
    

    useEffect(()=>{
      // fetchImages();

      const fetchImages = async () => {
        try {
          const arr=['book','animal','brid','technology','nature','who','city','mountain','water']
          let urls = [];
          let count = 9;
          while (count > 0) {
            const response = await fetch(`https://source.unsplash.com/random/500x350?${arr[count-1]}`);
            urls.push(response.url);
            count--;
          }
          setImagesUrls(urls);
        } catch (error) {
          console.error("Error fetching images:", error);
        }
      };
      fetchImages();

      const interval = setInterval(() => {
        fetchImages()
    }, 10000);

    //Clearing the interval
    return () => clearInterval(interval);


    },[imagesUrls])

    // Fetch images initially

    // setInterval(fetchImages, 10000);

    
  return (
    <>
    <div style={{ position: "fixed" }}>
      <div>
      <h2 style={{marginLeft:"30rem"}}>{customer.name} Details</h2>
      <p>Title: {customer.title}</p>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione est, ullam nemo quo ipsum explicabo, ipsam excepturi alias accusamus mollitia suscipit iusto, fugit blanditiis tempore animi sint. Quas, sit expedita!</p>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap",justifyContent:"space-around" , marginTop:"20px"}}>
       
          {imagesUrls.map((url, index) => (
              <div key={index} style={{ width: '25%', marginBottom: '12px', marginRight: '12px' }}>
                <img src={url} alt="Random" style={{ width: '100%', height: '22vh' }} />
              </div>
            ))}
       </div>
      </div>
    
    
     
    </>
  );
};

export default CustomerDetails;
