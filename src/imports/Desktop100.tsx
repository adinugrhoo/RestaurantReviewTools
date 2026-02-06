import imgBasemapImage from "figma:asset/0ec32a3836e43167d80bb15d48845caefce38d1c.png";

export default function Desktop() {
  return (
    <div className="bg-white relative size-full" data-name="Desktop - 100">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[1024px] left-[calc(50%-0.5px)] top-1/2 w-[1575px]" data-name="Basemap image">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgBasemapImage} />
      </div>
    </div>
  );
}