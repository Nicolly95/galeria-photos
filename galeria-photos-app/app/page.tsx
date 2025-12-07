"use client";

import { useState } from "react";
import { PhotoItem } from "./components/PhotoItem";
import { photoList } from "./data/photoList";
import { Modal } from "./components/Modal";


const Page = () => {

    const [showModal, setShowmodal] = useState(false);                      //inicia 'showModal' com false
    const [imageModal, setImageModal] = useState("");                  //inicia 'imageModal' como vazio ""

    const openModal = (id: number) => {
        const photoModal = photoList.find(item => item.id === id);

        if(photoModal) {
            setImageModal(photoModal.url);
            setShowmodal(true);
        }
    }
    
    const closeModal = () => {
        setShowmodal(false);
    }

    return(
        <div className="mx-2">
            <h1 className="text-center text-3xl font-bold my-10"> Fotos Intergalácticas </h1>

            <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {photoList.map(item => (
                    <PhotoItem 
                        key={item.id}
                        photo={item}
                        onClick={() => openModal(item.id)}
                    />
                ))}
            </section>

            {showModal &&
                <Modal image={imageModal} closeModal={closeModal}/>
            }


        </div>
    );
}

export default Page;





















