
import PortableTextComponent from './PortableText';



export default function AllContent({ Pagecontent }) {
    return (
      <section className=' heroComp '> 
        <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
         Page Content
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
      {Pagecontent.map((contentItem, index) => (
        <div key={index}>
          < PortableTextComponent  content={contentItem.portableText} />
        </div>
      ))}
       </div>
      </section>
    )
  }
  