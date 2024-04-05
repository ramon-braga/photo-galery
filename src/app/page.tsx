"use client"

import { Modal } from "@/components/Modal";
import { PhotoItem } from "@/components/PhotoItem";
import { photoList } from "@/data/photoList";
import { useState } from "react";

function Page() {
  const [showModal, setShowModal] = useState(false);
  const [imageOfModal, setImageOfModal] = useState('');

  function openModal(id: number) {
    const photo = photoList.find(item => item.id === id);

    if (photo) {
      setImageOfModal(photo.url);
      setShowModal(true);
    }
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <div className="mx-6">
      <h1 className="text-center my-9 text-4xl">Photo Galery</h1>
      <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photoList.map(item =>

          <PhotoItem
            key={item.id}
            photo={item}
            onClick={() => openModal(item.id)}
          />

        )}
      </section>

      {showModal &&
        <Modal
          image={imageOfModal}
          closeModal={closeModal}
        />
      }

    </div>
  );
}

export default Page;