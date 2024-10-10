export default function BlogTitleText(htitle, htext) {
  //   console.log(title);
  //   console.log("----------------");
  //   console.log(text);
  return (
    <div className="space-y-2">
      <h1 className="font-bold">{htitle}</h1>
      <p className="text-[#666C89] font-medium">{htext}</p>
    </div>
  );
}
