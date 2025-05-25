export default function Game({ title, src, description, href }) {
    const handleMouseOver = (e) => {
      e.currentTarget.style.transform = 'scale(1.2)';
    };
  
    const handleMouseOut = (e) => {
      e.currentTarget.style.transform = 'scale(1)';
    };
  
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <h2>{title}</h2>
        <img
          src={src}
          alt={title}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
        <p>{description}</p>
      </a>
    );
  }
  