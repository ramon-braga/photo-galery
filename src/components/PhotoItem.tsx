import { Photo } from "@/types/Photo";

type Props = {
    photo: Photo;
    onClick: () => void;
}

export function PhotoItem({ photo, onClick }: Props) {
    return (
        <div className="cursor-pointer hover:opacity-80">
            <img onClick={onClick} src={`/photos/${photo.url}`} alt="Photo" className="w-full" />
        </div>
    );
}