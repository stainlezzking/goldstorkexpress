import SubTitle from "./title.component";

export default function Bannersection({ subtitle, src, topic }) {
  return (
    <div className="relative before:h-full before:block before:absolute before:top-0 before:left-0 before:bg-gradient-to-r before:from-secondary before:to-secondary/10 before:w-full ">
      <img src={src} alt="" className="w-full" />
      <div className="container space-y-3 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        <SubTitle> {subtitle} </SubTitle>
        <h1 className="text-6xl font-bold text-white"> {topic} </h1>
      </div>
    </div>
  );
}
