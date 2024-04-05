import { photoList } from "@/data/photoList";

function Page() {
  return (
    <div className="mx-6">
      <h1 className="text-center my-9 text-4xl">Photo Galery</h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {photoList.map(item =>
          <div>
            ...
          </div>
        )}
      </div>
    </div>
  );
}

export default Page;