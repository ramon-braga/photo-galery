"use client"

import { PhotoItem } from "@/components/PhotoItem";
import { photoList } from "@/data/photoList";

function Page() {
  

  return (
    <div className="mx-6">
      <h1 className="text-center my-9 text-4xl">Photo Galery</h1>
      <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photoList.map(item =>

          <PhotoItem
            key={item.id}
            photo={item}
            onClick={() => {}}
          />

        )}
      </section>
    </div>
  );
}

export default Page;