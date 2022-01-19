import React from 'react';
import './script.js';
import './VenueInfo.css';

export default function YourComponentName() {
  return (<div>

<div className="wrapper">
        <div className="card">
            <img src={require("../images/lusail.jpg")}/>
            <div className="info">
                <h1>Lusail Stadium</h1>
                <p>Located in Lusail City</p>
                <a href="#" className="btn" onClick="myFunction('myPopup2')">Read More</a>
                <p className="popuptext" id="myPopup2">
                The Lusail Iconic Stadium is located in Lusail city 
                and it is the biggest stadium amongst all arenas in Qatar. 
                It was built in April 2021 and will seat 80,000 spectators. 
                The stadium will host the opening and final games of the 2022 
                FIFA World Cup. Lusail city is being developed as part of Qatar 
                2030 vision, but it is expected to accommodate 450,000 people.  </p>
            </div>
        </div>
        
        <div className="card">
            <img src={require("../images/al_bayt.jpg")}/>
            <div className="info">
                <h1>Al Bayt Stadium</h1>
                <p>Located in Al Khor city</p>
                <a href="#" className="btn" onClick="myFunction('myPopup3')">Read More</a>
                <p className="popuptext" id="myPopup3">
                    The Al Bayt Stadium is a retractable roof 
                    football stadium located in Al Khor city 
                    and it is the second largest stadium after Lusail. 
                    It is confirmed to host the first match scheduled for 
                    November 21st with 60,000 spectators. The municipality 
                    lies in the northeast coast of Qatar and it is considered 
                    to be one of the major cities.

                </p>

            </div>
        </div>

        <div className="card">
            <img src={require("../images/alwakrah.jpg")}/>
            <div className="info">
                <h1>Al Janoub Stadium</h1>
                <p>located in the town of Al Wakrah</p>
                <a href="#" className="btn" onClick="myFunction('myPopup4')">Read More</a>
                <p className="popuptext" id="myPopup4"> 
                    Al Janoub Stadium is located in the town of Al Wakrah. 
                    It was opened on May 16, 2019, and has a capacity of 40,000. 
                    The planning for Al Janoub stadium started in 2013 as part of Qatar's 
                    bid to host the World Cup. The design of the stadium was inspired by the 
                    hulls of the traditional dhow pearl fishing boats.

                </p>

            </div>
        </div>
        
        <div className="card">
            <img src={require("../images/ahmad.jpg")}/>
            <div className="info">
                <h1>Ahmad Bin Ali Stadium</h1>
                <p>Located in Al Rayyan</p>
                <a href="#" className="btn" onClick="myFunction('myPopup5')">Read More</a>
                <p className="popuptext" id="myPopup5">
                    The construction of the new stadium started in early 2016. 
                    Al Rayyan, where Ahmad Bin Ali Stadium is located, is known 
                    for its love of traditions and local culture, as well as its hugely 
                    popular football team, Al Rayyan Sports Club. The close-knit community 
                    here is deeply committed to the team, whose new arena will host up to 
                    40,000 fans at FIFA World Cup 2022™ matches through to the quarter-final 
                    stage.</p>

            </div>
        </div>

        <div className="card">
            <img src={require("../images/khalifa_stadium.jpg")}/>
            <div className="info">
                <h1>Khalifa International Stadium</h1>
                <p>located in Doha, Qatar</p>
                <a href="#" className="btn" onClick="myFunction('myPopup6')">Read More</a>
                <p className="popuptext" id="myPopup6">
                    Khalifa International Stadium located in Doha, has a total capacity of 
                    40,000 seats. Qatar was awarded the 2022 World Cup back in 2010 and has 
                    provided extensive upgrades to the stadium, making it the first of the 
                    venues to be completed with a 4-start sustainability rating.
                </p>

            </div>
        </div>

        <div className="card">
            <img src={require("../images/education_city.jpg")}/>
            <div className="info">
                <h1>Education City Stadium</h1>
                <p>located on the outskirts <br/>of Doha</p>
                <a href="#" className="btn" onClick="myFunction('myPopup7')">Read More</a>
                <p className="popuptext" id="myPopup7">
                    The stadium is located on the outskirts of the capital Doha and has a 
                    capacity of 40,000 seats. It has been given the nickname "Diamond in 
                    the Desert". With 20 percent of its building materials identified as green, 
                    the stadium is among the world's most environmentally sustainable stadiums. 
                    It officially opened on 15 June 2020. 
                </p>

            </div>
        </div>

        <div className="card">
            <img src={require("../images/ras_abu.jpg")}/>
            <div className="info">
                <h1>Ras Abu Aboud Stadium</h1>
                <p>located in Doha, Qatar.</p>
                <a href="#" className="btn" onClick="myFunction('myPopup8')">Read More</a>
                <p className="popuptext" id="myPopup8">
                    Recently opened on November 30th, 2021, its capacity holds 40,000, 
                    located in Doha, Qatar. This stadium was designed to contain 974 
                    recycled shipping containers in honor to the site’s industrial history. 
                    It is also the first temporary venue in FIFA World Cup history that will 
                    later be dismantled to provide assistance to under-developed countries in 
                    Africa. 
                </p>

            </div>
        </div>

        <div className="card">
            <img src={require("../images/al_thumama4.jpg")}/>
            <div className="info">
                <h1>Al Thumama Stadium</h1>
                <p>located in Al Thumama Bus Stop 7</p>
                <a href="#" className="btn" onClick="myFunction('myPopup1')">Read More</a>
                <p className="popuptext" id="myPopup1">
                    This stadium can hold up to 40,000, located in Al Thumama Bus Stop 7, Qatar. 
                    Because of the 49th Amir Cup Final on October 22, 2021, Al Thumama Stadium was 
                    opened as an inauguration. The stadium’s design reflects that of gahfiya- a traditional 
                    woven cap, worn by all men.

                </p>
            </div>
        </div>
    </div>



    
    <div className="container">
      <div className="popup" onClick="mypopFunction('myPop1')">
          <img src={require('../images/Germany.png')} alt="Germany" id="Germany"/>
          <p className="popuptext" id="myPop1">
            <strong>Date of qualification:</strong> 11 Oct,2021
                <br/><br/>
                <strong>Best previous result:</strong>Germany has won a total of 4 World Cup in 1954, 1974, 1990, and 2014
                <br/><br/>
                <strong>Method of qualification: </strong>German defeated North Macedonia 4 - 0 at SKOPJE
            </p>
        </div>
      
    
    
      <div className="popup" onClick="mypopFunction('myPop2')">
        <img src={require('../images/Argentina.png')} alt="Germany" />
        <p className="popuptext" id="myPop2">
          <strong>Date of qualification:</strong> 16 November, 2021
          <br/><br/>
          <strong>Best previous result:</strong>Argentina won 1978 and 1986 World Cups.
          <br/><br/>
          <strong>Method of qualification: </strong>Argentina Secured a place in the 2022 after draw agains br/azil
        </p>
      </div>
    
    
      <div className="popup" onClick="mypopFunction('myPop3')">
        <img src={require('../images/switzerland.jpeg')} alt="Germany"/>
      <p className="popuptext" id="myPop3">
        <strong>Date of qualification:</strong> 15 November, 2021
        <br/><br/>
        <strong>Best previous result:</strong>Quarter-finals 1934, 1938, 1954
        <br/><br/>
        <strong>Method of qualification: </strong> UEFA Group C winners
        </p>
      </div>
    
      <div className="popup" onClick="mypopFunction('myPop4')">
        <img src={require('../images/Spain.png')} alt="Germany"/>
      <p className="popuptext" id="myPop4">
        <strong>Date of qualification:</strong> 14 November, 2021
        <br/><br/>
        <strong>Best previous result:</strong>Spain won 2010 FIFA World Cup
        <br/><br/>
        <strong>Method of qualification: </strong>Spain defeated Sweden 2-1 at Friends Arena in Stockholm
        </p>
      </div>
    
      <div className="popup" onClick="mypopFunction('myPop5')">
        <img src={require('../images/Croatia.png')} alt="Germany"  />
      <p className="popuptext" id="myPop5">
        <strong>Date of qualification:</strong> 14 November, 2021.
        <br/><br/>
        <strong>Best previous result:</strong>Runner Up 2018 World Cups.
        <br/><br/>
        <strong>Method of qualification: </strong>Croatia has secured its place at the 2022 FIFA World Cup, following a 1-0 match against Russia.
        </p>
      </div>
    
      <div className="popup" onClick="mypopFunction('myPop6')">
        <img src={require('../images/Kingdom_of_Serbia.jpeg')} alt="Germany"  />
      <p className="popuptext" id="myPop6">
        <strong>Date of qualification:</strong> 14 November, 2021
        <br/><br/>
        <strong>Best previous result:</strong>Fourth place 1930 and 1962 World Cup
        <br/><br/>
        <strong>Method of qualification: </strong>The group winner, Serbia, qualified directly for the World Cup.

        </p>
      </div>
    
      <div className="popup" onClick="mypopFunction('myPop7')">
        <img src={require('../images/Brazil.png')} alt="Germany"  />
      <p className="popuptext" id="myPop7">
        <strong>Date of qualification:</strong>11 November, 2021
        <br/><br/>
        <strong>Best previous result:</strong>Champions of 1958, 1962, 1970, 1994, 2002 World Cup
        <br/><br/>
        <strong>Method of qualification: </strong>One of CONMEBOL top four teams
        </p>
      </div>
    
      <div className="popup" onClick="mypopFunction('myPop8')">
        <img src={require('../images/belgium.jpeg')} alt="Germany"  />
      <p className="popuptext" id="myPop8">
        <strong>Date of qualification:</strong> 13 November, 2021
        <br/><br/>
        <strong>Best previous result:</strong>Third place on 2018 World Cup
        <br/><br/>
        <strong>Method of qualification: </strong>UEFA Group E winners
        </p>
      </div>
    
      <div className="popup" onClick="mypopFunction('myPop9')">
        <img src={require('../images/Denmark.png')} alt="Germany"  />
      <p className="popuptext" id="myPop9">
        <strong>Date of qualification:</strong> 12 Oct, 2021
        <br/><br/>
        <strong>Best previous result:</strong>Quater finals on 1998
        <br/><br/>
        <strong>Method of qualification: </strong>Denmark, qualified directly for the World Cup finals,
        </p>
      </div>
    
      <div className="popup" onClick="mypopFunction('myPop10')">
        <img src={require('../images/France.png')} alt="Germany"  />
      <p className="popuptext" id="myPop10">
        <strong>Date of qualification:</strong> 13 November, 2021
        <br/><br/>
        <strong>Best previous result:</strong>Champions 1998, 2018
        <br/><br/>
        <strong>Method of qualification: </strong>UEFA Group D winners
        </p>
      </div>
    
      <div className="popup" onClick="mypopFunction('myPop11')">
        <img src={require('../images/qatar.png')}alt="Germany"  />
      <p className="popuptext" id="myPop11">
        <strong>Date of qualification:</strong> 2 December, 2010
        <br/><br/>
        <strong>Best previous result:</strong>Qatar has never entered the FIFA World Cup
                <br/><br/>
        <strong>Method of qualification: </strong>HOST
        </p>
      </div>
    
      <div className="popup" onClick="mypopFunction('myPop12')">
        <img src={require('../images/Netherlands.png')} alt="Germany" />
      <p className="popuptext" id="myPop12">
        <strong>Date of qualification:</strong> 16 November, 2021
        <br/><br/>
        <strong>Best previous result:</strong>Runners Up of 1974, 1978, 22010 World Cup
        <br/><br/>
        <strong>Method of qualification: </strong>UEFA Group G winners
        </p>
      </div>
    
      <div className="popup" onClick="mypopFunction('myPop13')">
        <img src={require('../images/England.jpg')} alt="Germany"  />
      <p className="popuptext" id="myPop13">
        <strong>Date of qualification:</strong> 15 November, 2021
        <br/><br/>
        <strong>Best previous result:</strong> Winners of 1966 World Cup
        <br/><br/>
        <strong>Method of qualification: </strong>UEFA Group I winners
        </p>
      </div>
    </div>
    
    <div className="name-container">
    
      <div className="name">
        <div className="name-content">
          <p>GRE</p>
        </div>
      </div>
    
      <div className="name">
        <div className="name-content">
          <p>ARG</p>
        </div>
      </div>
    
      <div className="name">
        <div className="name-content">
          <p>SWI</p>
        </div>
      </div>
    
      <div className="name">
        <div className="name-content">
          <p>SPA</p>
        </div>
      </div>
    
      <div className="name">
        <div className="name-content">
          <p>CRO</p>
        </div>
      </div>
    
      <div className="name">
        <div className="name-content">
          <p>SER</p>
        </div>
      </div>
    
      <div className="name">
        <div className="name-content">
          <p>br/A</p>
        </div>
      </div>
    
      <div className="name">
        <div className="name-content">
          <p>BEL</p>
        </div>
      </div>
    
      <div className="name">
        <div className="name-content">
          <p>DEN</p>
        </div>
      </div>
    
      <div className="name">
        <div className="name-content">
          <p>FRA</p>
        </div>
      </div>
    
      <div className="name">
        <div className="name-content">
          <p>QAT</p>
        </div>
      </div>
    
      <div className="name">
        <div className="name-content">
          <p>NET</p>
        </div>
      </div>
    
      <div className="name">
        <div className="name-content">
          <p>ENG</p>
        </div>
      </div>
    
    </div>
    
    <div className="btn-container">
    
      <div className="heart-btn">
          <div className="content">
              <img
              className="likeBtn"
              src={require("../images/heartregular.png")}
              alt="heart-icon"
              onClick="" />
              <p className="display">0</p>
          </div>
      </div>
    
      <div className="heart-btn">
          <div className="content">
              <img
              className="likeBtn"
              src={require("../images/heartregular.png")}
              alt="heart-icon"
              onClick="" />
              <p className="display">0</p>
          </div>
      </div>
    
      <div className="heart-btn">
          <div className="content">
              <img
              className="likeBtn"
              src={require("../images/heartregular.png")}
              alt="heart-icon"
              onClick="" />
              <p className="display">0</p>
          </div>
      </div>
    
      <div className="heart-btn">
          <div className="content">
              <img
              className="likeBtn"
              src={require("../images/heartregular.png")}
              alt="heart-icon"
              onClick="" />
              <p className="display">0</p>
          </div>
      </div>
    
      <div className="heart-btn">
          <div className="content">
              <img
              className="likeBtn"
              src={require("../images/heartregular.png")}
              alt="heart-icon"
              onClick="" />
              <p className="display">0</p>
          </div>
      </div>
    
      <div className="heart-btn">
          <div className="content">
              <img
              className="likeBtn"
              src={require("../images/heartregular.png")}
              alt="heart-icon"
              onClick="" />
              <p className="display">0</p>
          </div>
      </div>
    
      <div className="heart-btn">
          <div className="content">
              <img
              className="likeBtn"
              src={require("../images/heartregular.png")}
              alt="heart-icon"
              onClick="" />
              <p className="display">0</p>
          </div>
      </div>
    
      <div className="heart-btn">
          <div className="content">
              <img
              className="likeBtn"
              src={require("../images/heartregular.png")}
              alt="heart-icon"
              onClick="" />
              <p className="display">0</p>
          </div>
      </div>
    
      <div className="heart-btn">
          <div className="content">
              <img
              className="likeBtn"
              src={require("../images/heartregular.png")}
              alt="heart-icon"
              onClick="" />
              <p className="display">0</p>
          </div>
      </div>
    
      <div className="heart-btn">
          <div className="content">
              <img
              className="likeBtn"
              src={require("../images/heartregular.png")}
              alt="heart-icon"
              onClick="" />
              <p className="display">0</p>
          </div>
      </div>
    
      <div className="heart-btn">
          <div className="content">
              <img
              className="likeBtn"
              src={require("../images/heartregular.png")}
              alt="heart-icon"
              onClick="" />
              <p className="display">0</p>
          </div>
      </div>
    
      <div className="heart-btn">
          <div className="content">
              <img
              className="likeBtn"
              src={require("../images/heartregular.png")}
              alt="heart-icon"
              onClick="" />
              <p className="display">0</p>
          </div>
      </div>
    
      <div className="heart-btn">
          <div className="content">
              <img
              className="likeBtn"
              src={require("../images/heartregular.png")}
              alt="heart-icon"
              onClick="" />
              <p className="display">0</p>
          </div>
      </div>
    
    </div>


</div>

  )}