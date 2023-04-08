export default function HeroContainer({ children }) {
    return (
      <div
        className="container mx-auto px-5"
        style={{
          maxWidth: '3000px',
          '@media (max-width: 767px)': { maxWidth: '100%' },
          '@media (min-width: 768px) and (max-width: 1023px)': { maxWidth: '90%' },
          '@media (min-width: 1024px)': { maxWidth: '3000px' },
        }}
      >
        {children}
      </div>
    );
  }
  