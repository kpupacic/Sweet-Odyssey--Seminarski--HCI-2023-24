import Link from 'next/link'
import '../components/style.css'
 
export default function NotFound() {
  return (
    <div id='notFoundError'>
      <img src="/images/error.png" alt="sad muffin error" />
      <h2>Uh-oh!</h2>
      <p>This page is not availabe - maybe it's missing an essential ingredient.<br/>Please click the link below to return to the homepage.</p>
      <div><Link href="/">Return Home</Link></div>
    </div>
  )
}