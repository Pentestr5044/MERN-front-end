import React from 'react';
import './Home.css';
import Header from '../components/Header';


function Home() {
    return (
        <div>
          <Header />
          <div className="home-container">
          <img className="img-1" src={require('./sara-julie-9Gz5bMWdGYE-unsplash.jpg').default} alt="blizzard" height={300} width={200} />
            <p className="img-1-txt">hello, this is the text area where we can type out all of the wonderful things. On our application you can choose blizzards you have had before or find new ones to make in your very own home. please sign up 
            and sign up for our mailing list too!!! you can do that here</p>
            <img className="img-2" src={require('./clarissa-carbungco-uy9DJw9e_vs-unsplash.jpg').default} alt="Jumping" width={100} height={200} />
            <p className="img-2-txt">
            Here we explain where you can go with our cupons and what places you can get dicount berry prices with our membership. Member ship is only 3 cents a day and we provide killer deals on everything you would need to make 
            homemade blizzards...yes even the blenders.  Sign up now and see what deals you could get. 
            </p>
            <img className="img-3" src={require('./dmitry-shamis-uaufwPBhbio-unsplash.jpg').default} alt="" width={200} height={400} />
          </div>
            
        </div>
    )
}

export default Home
