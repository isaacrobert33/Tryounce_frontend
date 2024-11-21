import { GreenDividerVideo } from "../../assets/videos/index";

export default function VideoDivider() {
  return (
    <section className="relative container h-[23px] overflow-hidden">
      <video
        src={GreenDividerVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover object-bottom"
      />
    </section>
    // <section className="w-full max-w-[1536px] mx-auto h-[23px] overflow-hidden">
    //   <video
    //     src={GreenDividerVideo}
    //     autoPlay
    //     loop
    //     muted
    //     playsInline
    //     className="w-full object-cover"
    //   />
    // </section>
  );
}
