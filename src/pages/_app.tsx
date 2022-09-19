import '../styles/globals.css'
import Header from "../components/molecules/Header";

function MyApp({ Component, pageProps }) {
  return <>
    <Header />
    <div className={"grid place-items-center"}>
      <Component {...pageProps} />
    </div>

  </>
}

export default MyApp
