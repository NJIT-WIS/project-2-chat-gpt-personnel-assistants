// components/Hero.js
export default function Hero({ data }) {
    console.log(data);
    return (
      <div className="bg-cover bg-center mb-8" style={{ backgroundImage: `url(${data.backgroundImage})` }}>
        <div className="text-white p-8">
          <h2 className="text-3xl font-bold mb-4">{data.title}</h2>
          <p className="mb-4">{data.subtitle}</p>
          <a href={data.ctaLink} className="bg-blue-500 px-4 py-2 text-white font-bold">
            {data.ctaText}
          </a>
        </div>
      </div>
    );
  }
  