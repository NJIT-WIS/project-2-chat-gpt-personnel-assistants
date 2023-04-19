
import PortableTextComponent from './PortableText';

export default function AllContent({ Pagecontent }) {
  return (
    <section className='heroComp'>
   
      <div className="container mx-auto px-5">
        {Pagecontent.map((contentItem, index) => (
          <div key={index}>
            <PortableTextComponent content={contentItem.portableText} />
          </div>
        ))}
      </div>
    </section>
  )
}
