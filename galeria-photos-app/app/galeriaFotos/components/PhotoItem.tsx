import { Photo } from "../types/Photo";

type Props = {
    photo: Photo;
    onClick: () => void;
}

//'photoItem' é o componente contendo a estrutura para exibição das fotos no page.tsx
export const PhotoItem = ({photo, onClick}: Props) => {
    return(
        <div className="cursor-pointer hover:opacity-80" onClick={onClick}>
            <img src={`/img-galeria/${photo.url}`} alt="" className="w-full"/>
        </div>
    );
}