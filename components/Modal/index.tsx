import { db } from '@firebase'
import { collection, addDoc } from 'firebase/firestore';
import toast, { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import { FaTimes } from "react-icons/fa";
import Image from 'next/image'
import { useState } from 'react'
import styles from './Modal.module.css'

export const Modal: React.FC<{
    hideModal: () => void;
  }> = ({ hideModal }) => {
    
    const [blogEmail, setBlogEmail] = useState("");
    
    // collection ref
   const colRef = collection(db, 'blogMails');

    const handleForm = (e: { preventDefault: () => void; })=> {
      e.preventDefault();
      if(!blogEmail){
        return false;
      } 
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(blogEmail)){
        toast.error('Invalid email format')
        return false;
      }
      if (blogEmail){
        addDoc(colRef, {
          email: blogEmail
         })
         .then(() => {
          toast.success('Email received')
          setBlogEmail('');
         })
      }
      
    }
   
  
      
  
    return (
      <div className={styles.container}>
        <form className={styles.form}>
        <Toaster />
          <div className='text-center mb-1'>
            <picture>
            <Image
              src="data:image/png;base64,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"
              alt="mail"
              width={100}
               height={100}
            />
            </picture>
          </div>
          <div>
            <p style={{color: "#f8646c"}} className="text-xl mb-2 text-center">Stay up to date with the latest</p>
            <p style={{color: "#f8646c"}} className="text-xl mb-2 text-center">from the blog</p>
            <p className="text-center mb-4">Give us your email, we'll do the rest</p>
          </div>
          <input type="email" placeholder="Your email" onChange={(e)=> setBlogEmail(e.target.value)} name="email" value={blogEmail} className={styles.input}/>
          <button className="py-3 px-0 w-full rounded mb-4 text-white" style={{background: "#f8646c", border: "1px solid #f8646c"}} type="submit" onClick={handleForm}>SIGN UP</button>
          <p className="text-center text-sm">We'll only send you awesome contents, never spam </p>
          <button className="top-0 right-0 absolute mr-4 mt-4 text-2xl" onClick={hideModal}>
            <FaTimes />
          </button>
        </form>
      </div>
    );
  };
  