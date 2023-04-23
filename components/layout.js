import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'
import Menu from "./menu";
import ModalPrivacy from './ModalPrivacy';

export default function Layout({ preview, children,menuData,metaData }) {
  return (
    <>
      <Meta metaData={metaData } />
      <div className="min-h-screen ">
      {menuData&& <Menu data={menuData} />}
   
        <main>{children}</main>
      </div>
      <ModalPrivacy />
      <Footer />
    </>
  )
}
