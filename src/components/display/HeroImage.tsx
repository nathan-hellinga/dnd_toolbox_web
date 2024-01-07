import style from "./HeroImage.module.css";


export default function({ image, alt }: { image: string, alt: string }) {


  return (
    <img className={style.image} src={image} alt={alt} />
  );
}