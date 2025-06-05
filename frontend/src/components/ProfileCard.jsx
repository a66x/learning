import pfp1 from '../assets/pfp1.jpg'
import './style/profilecard.css'

function ProfileCard() {
   return <div className="container">
      <div className="profile">
         <div className="profile-pics  w-40 h-40 ">
         <img src={pfp1} alt="hehe~.." style={{width: '160px', height: '160px', objectFit: 'cover'}} />
         </div>
         <div className="profile-text text-center">
         <h1 className='font-black text-3xl'>Flare</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A porro illo officia numquam? Delectus aut error ut iusto sed pariatur? Pariatur, dolores qui fuga excepturi repellendus recusandae quis aspernatur voluptatem.</p>
         </div>
         <div className="profile-buttons flex gap-x-5">
         <a href="http://instagram.com/test/">
            <button type="button" className="focus:outline-none focus:ring-0">Instagram</button>
         </a>
         <a href="http://facebook.com/test/">
            <button type="button">Facebook</button>
         </a>
         </div>
      </div>
   </div>
}

export default ProfileCard