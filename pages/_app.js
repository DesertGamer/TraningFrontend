import '/assets/css/modal.css';
import '/assets/css/styles.css';
import 'react-image-crop/dist/ReactCrop.css'

export default function MyApp({
  Component,
  pageProps: { ...pageProps },
}) {
  return(
    <Component {...pageProps} />
  )
}