type LoaderProp = {
  width: string,
  height: string,
  color: string;
};

export default function Loader({ width, height, color }: LoaderProp) {
  return (
    <div className="flex justify-center items-center my-5">
      <div
        className="animate-spin rounded-full border-t-4"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          borderColor: `${color}`,
        }}
      ></div>
    </div>
  );
}
