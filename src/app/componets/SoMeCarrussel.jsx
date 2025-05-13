"use client";

export default function SoMeCarousel() {
  const items = [
    { type: "image", src: "https://picsum.photos/300/500?grayscale&random=1" },
    { type: "image", src: "https://picsum.photos/300/300?grayscale&random=2" },
    { type: "box" },
    { type: "image", src: "https://picsum.photos/300/400?grayscale&random=3" },
    { type: "image", src: "https://picsum.photos/300/400?grayscale&random=4" },
    { type: "image", src: "https://picsum.photos/300/400?grayscale&random=5" },
  ];

  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="overflow-hidden w-full pt-20 bg-white">
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>

      <div
        className="flex animate-[scroll_20s_linear_infinite] w-[200%]"
        style={{ willChange: "transform" }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[350px] px-2"
          >
            {item.type === "box" ? (
              <div className="w-full h-[250px] bg-[#4D6A4E] flex flex-col items-center justify-center text-white text-center p-4">
                <h2 className="text-3xl font-bold leading-tight">JOIN THE<br />FAMILY</h2>
                <div className="mt-6 border border-white px-6 py-2">
                  <p className="text-lg italic font-semibold">@ Spotter</p>
                </div>
              </div>
            ) : (
              <img
                src={item.src}
                alt={`carousel-${index}`}
                className="w-full object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}