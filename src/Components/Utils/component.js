import React from "react";
import L from 'leaflet';
import numeral from "numeral";
import { Circle, Popup ,Marker , CircleMarker,Rectangle} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { red } from "@material-ui/core/colors";
import image from '../../images/marker-icon.png'
import LocationOnIcon from '@material-ui/icons/LocationOn';

// delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require('../../images/marker-icon.png'),
//   iconUrl: require('../../images/marker-icon.png'),
//   shadowUrl: require('../../images/marker-icon.png')
// });

const casesTypeColors = {
  cases: {
    multiplier: 400,
    option: { color:"#cc1034", fillColor: "#cc1034"},
  },
  recovered: {
    multiplier: 500,
    option: { color:"#7dd71d", fillColor: "#7dd71d"},
  },
  deaths: {
    multiplier: 3000,
    option: { color:"#ff6c47", fillColor: "#ff6c47"}
  },
};

export const sortData = (data) => {
  let sortedData = [...data];
  sortedData.sort((a, b) => {
    if (a.cases > b.cases) {
      return -1;
    } else {
      return 1;
    }
  });
  return sortedData;
};

export const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat)?.format("0.0a")}` : "+0";

  function showVal(val) {
    console.log("aaaas")
    // var div = document.getElementById('tow');
    // div.display = "block";
}

const newicon = new L.icon({
   iconUrl:'data:image/png;base64,a73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=',
   //  require("../../images/marker-icon.png"),
   iconSize: [15, 15]
});
console.log("newIcon",newicon);
export const showDataOnMap = (data, casesType = "cases") =>
       data?.map((country,index) => ( <> 
          {/* <div onClick={(event)=>showVal(event)}> */}

           <Circle
            center={[country?.countryInfo?.lat, country?.countryInfo?.long]}
            fillOpacity={0.4}
            pathOptions={casesTypeColors[casesType]?.option}
            radius={Math?.sqrt(country[casesType]) * casesTypeColors[casesType]?.multiplier}

            // radius={100} onClick="javascript:showVal();"
              // Icon={image}
            // onClick={showVal}
         >


          {/* <Marker
            // data="customdata"
            position={[country.countryInfo.lat, country.countryInfo.long]}
            icon={image}
            // onClick={e => {
            //   console.log(e.target);
            // }}
          >                    */}

      {/* <Rectangle key={index} bounds={[country.countryInfo.lat, country.countryInfo.long]} color="red"> */}

      {/* <div id="tow"> */}
      {/* <Marker
        // icon={<><img src={image}></img></>}
        icon={newicon}
        // color="red"
        position={[country.countryInfo.lat, country.countryInfo.long]}> */}


        <Popup>
         <div className="info-container">
          <div
            className="info-flag"
            style={{ backgroundImage: `url(${country?.countryInfo?.flag})` }}
          ></div>
          <div className="info-name">{country?.country}</div>
          <div className="info-confirmed">
            Cases: {numeral(country?.cases)?.format("0,0")}
          </div>
          <div className="info-recovered">
            Recovered: {numeral(country?.recovered)?.format("0,0")}
          </div>
          <div className="info-deaths">
            Deaths: {numeral(country?.deaths)?.format("0,0")}
          </div>
        </div>
      </Popup>
      {/* </Marker> */}

{/* </div> */}
      {/* </Rectangle> */}
      {/* </Marker> */}

    </Circle>
    {/* </div> */}
    </>
  ));