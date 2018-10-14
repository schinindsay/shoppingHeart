import React from "react";
import ReactDOM from "react-dom";
import ReactMapboxGl, {
  Layer,
  GeoJSONLayer,
  ZoomControl
} from "react-mapbox-gl";


const geoData = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitynyeri",
        title: "Nyeri"
      },
      geometry: {
        type: "Point",
        coordinates: [0, 36, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitybukitmerah",
        title: "Bukit Merah"
      },
      geometry: {
        type: "Point",
        coordinates: [1, 103, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitynairobi",
        title: "Nairobi"
      },
      geometry: {
        type: "Point",
        coordinates: [1, 36, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitycaracas",
        title: "Caracas"
      },
      geometry: {
        type: "Point",
        coordinates: [10, 66, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitytiruchirappalli",
        title: "Tiruchirappalli"
      },
      geometry: {
        type: "Point",
        coordinates: [10, 78, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityndola",
        title: "Ndola"
      },
      geometry: {
        type: "Point",
        coordinates: [12, 28, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitybangalore",
        title: "Bangalore"
      },
      geometry: {
        type: "Point",
        coordinates: [12, 77, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitybridgetown",
        title: "Bridgetown"
      },
      geometry: {
        type: "Point",
        coordinates: [13, 59, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitycastries",
        title: "Castries"
      },
      geometry: {
        type: "Point",
        coordinates: [14, 60, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityguatemalacity",
        title: "Guatemala City"
      },
      geometry: {
        type: "Point",
        coordinates: [14, 90, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityarequipa",
        title: "Arequipa"
      },
      geometry: {
        type: "Point",
        coordinates: [16, 71, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitymexicocity",
        title: "Mexico City"
      },
      geometry: {
        type: "Point",
        coordinates: [19, 99, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitybulawayo",
        title: "Bulawayo"
      },
      geometry: {
        type: "Point",
        coordinates: [20, 28, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityhanoi",
        title: "Hanoi"
      },
      geometry: {
        type: "Point",
        coordinates: [21, 105, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityraipur",
        title: "Raipur"
      },
      geometry: {
        type: "Point",
        coordinates: [21.25, 81.63, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityriodejaneiro",
        title: "Rio de Janeiro"
      },
      geometry: {
        type: "Point",
        coordinates: [22, 43, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitychittagong",
        title: "Chittagong"
      },
      geometry: {
        type: "Point",
        coordinates: [22, 91, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitydhaka",
        title: "Dhaka"
      },
      geometry: {
        type: "Point",
        coordinates: [23, 90, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityvidisha",
        title: "Vidisha"
      },
      geometry: {
        type: "Point",
        coordinates: [23.523, 77.811, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitysantiniketan",
        title: "Santiniketan"
      },
      geometry: {
        type: "Point",
        coordinates: [23.68, 87.68, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityhsinchu",
        title: "Hsinchu"
      },
      geometry: {
        type: "Point",
        coordinates: [24, 120, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityganzhou",
        title: "Ganzhou"
      },
      geometry: {
        type: "Point",
        coordinates: [25, 114, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitypretoria",
        title: "Pretoria"
      },
      geometry: {
        type: "Point",
        coordinates: [25, 28, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityklerksdorp",
        title: "Klerksdorp"
      },
      geometry: {
        type: "Point",
        coordinates: [26, 26, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitygermiston",
        title: "Germiston"
      },
      geometry: {
        type: "Point",
        coordinates: [26, 28, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityjohannesburg",
        title: "Johannesburg"
      },
      geometry: {
        type: "Point",
        coordinates: [26, 28, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitybrisbane",
        title: "Brisbane"
      },
      geometry: {
        type: "Point",
        coordinates: [27, 153, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityalmora",
        title: "Almora"
      },
      geometry: {
        type: "Point",
        coordinates: [29.62, 79.67, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitykalgoorlie",
        title: "Kalgoorlie"
      },
      geometry: {
        type: "Point",
        coordinates: [30, 121, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitycairo",
        title: "Cairo"
      },
      geometry: {
        type: "Point",
        coordinates: [30, 31, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityperth",
        title: "Perth"
      },
      geometry: {
        type: "Point",
        coordinates: [31, 115, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityshanghai",
        title: "Shanghai"
      },
      geometry: {
        type: "Point",
        coordinates: [31, 121, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityqunu",
        title: "Qunu"
      },
      geometry: {
        type: "Point",
        coordinates: [31, 28, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitydamanhur",
        title: "Damanhur"
      },
      geometry: {
        type: "Point",
        coordinates: [31, 30, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityrehovot",
        title: "Rehovot"
      },
      geometry: {
        type: "Point",
        coordinates: [31, 34, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityjerusalem",
        title: "Jerusalem"
      },
      geometry: {
        type: "Point",
        coordinates: [31, 35, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitylahore",
        title: "Lahore"
      },
      geometry: {
        type: "Point",
        coordinates: [31, 74, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityfremantle",
        title: "Fremantle"
      },
      geometry: {
        type: "Point",
        coordinates: [32, 115, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityhaifa",
        title: "Haifa"
      },
      geometry: {
        type: "Point",
        coordinates: [32, 34, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitytelaviv",
        title: "Tel Aviv"
      },
      geometry: {
        type: "Point",
        coordinates: [32, 34, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityfukuoka",
        title: "Fukuoka"
      },
      geometry: {
        type: "Point",
        coordinates: [33, 130, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitysydney",
        title: "Sydney"
      },
      geometry: {
        type: "Point",
        coordinates: [33, 151, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitycapetown",
        title: "Cape Town"
      },
      geometry: {
        type: "Point",
        coordinates: [33, 18, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitycasablanca",
        title: "Casablanca"
      },
      geometry: {
        type: "Point",
        coordinates: [33, 7, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitysantiago",
        title: "Santiago"
      },
      geometry: {
        type: "Point",
        coordinates: [33, 70, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityhenan",
        title: "Henan"
      },
      geometry: {
        type: "Point",
        coordinates: [33.9, 113.5, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitykobe",
        title: "Kobe"
      },
      geometry: {
        type: "Point",
        coordinates: [34, 135, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityosaka",
        title: "Osaka"
      },
      geometry: {
        type: "Point",
        coordinates: [34, 135, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityhamamatsu",
        title: "Hamamatsu"
      },
      geometry: {
        type: "Point",
        coordinates: [34, 137, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitytoyohashi",
        title: "Toyohashi"
      },
      geometry: {
        type: "Point",
        coordinates: [34, 137, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityadelaide",
        title: "Adelaide"
      },
      geometry: {
        type: "Point",
        coordinates: [34, 138, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitykermanshah",
        title: "Kermanshah"
      },
      geometry: {
        type: "Point",
        coordinates: [34, 47, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityhamadan",
        title: "Hamadan"
      },
      geometry: {
        type: "Point",
        coordinates: [34, 48, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitybuenosaires",
        title: "Buenos Aires"
      },
      geometry: {
        type: "Point",
        coordinates: [34, 58, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitymingora",
        title: "Mingora"
      },
      geometry: {
        type: "Point",
        coordinates: [34.47, 72.22, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitymokpo",
        title: "Mokpo"
      },
      geometry: {
        type: "Point",
        coordinates: [34.7589, 126.38, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitykyoto",
        title: "Kyoto"
      },
      geometry: {
        type: "Point",
        coordinates: [35, 135, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitynagoya",
        title: "Nagoya"
      },
      geometry: {
        type: "Point",
        coordinates: [35, 136, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitykashiwa",
        title: "Kashiwa"
      },
      geometry: {
        type: "Point",
        coordinates: [35, 139, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitytokyo",
        title: "Tokyo"
      },
      geometry: {
        type: "Point",
        coordinates: [35, 139, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitycanberra",
        title: "Canberra"
      },
      geometry: {
        type: "Point",
        coordinates: [35, 149, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitynicosia",
        title: "Nicosia"
      },
      geometry: {
        type: "Point",
        coordinates: [35, 33, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitytehran",
        title: "Tehran"
      },
      geometry: {
        type: "Point",
        coordinates: [35, 51, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitytunis",
        title: "Tunis"
      },
      geometry: {
        type: "Point",
        coordinates: [36, 10, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitytaktser",
        title: "Taktser"
      },
      geometry: {
        type: "Point",
        coordinates: [36, 101, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitygaomi",
        title: "Gaomi"
      },
      geometry: {
        type: "Point",
        coordinates: [36, 119, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitymodica",
        title: "Modica"
      },
      geometry: {
        type: "Point",
        coordinates: [36, 14, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitymelbourne",
        title: "Melbourne"
      },
      geometry: {
        type: "Point",
        coordinates: [37, 144, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitysavur",
        title: "Savur"
      },
      geometry: {
        type: "Point",
        coordinates: [37, 40, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitychiran",
        title: "Chiran"
      },
      geometry: {
        type: "Point",
        coordinates: [37, 49, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitymoguer",
        title: "Moguer"
      },
      geometry: {
        type: "Point",
        coordinates: [37, 6, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitytraralgon",
        title: "Traralgon"
      },
      geometry: {
        type: "Point",
        coordinates: [38, 146, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitycatanzaro",
        title: "Catanzaro"
      },
      geometry: {
        type: "Point",
        coordinates: [38, 16, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitysmyrna",
        title: "Smyrna"
      },
      geometry: {
        type: "Point",
        coordinates: [38, 27, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitybeijing",
        title: "Beijing"
      },
      geometry: {
        type: "Point",
        coordinates: [39, 116, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityazinhaga",
        title: "Azinhaga"
      },
      geometry: {
        type: "Point",
        coordinates: [39.347, -8.532, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitynaples",
        title: "Naples"
      },
      geometry: {
        type: "Point",
        coordinates: [40, 14, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitymadrid",
        title: "Madrid"
      },
      geometry: {
        type: "Point",
        coordinates: [40, 3, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitybaku",
        title: "Baku"
      },
      geometry: {
        type: "Point",
        coordinates: [40, 49, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitysalamanca",
        title: "Salamanca"
      },
      geometry: {
        type: "Point",
        coordinates: [40, 5, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityavanca",
        title: "Avanca"
      },
      geometry: {
        type: "Point",
        coordinates: [40.807, -8.573, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityrome",
        title: "Rome"
      },
      geometry: {
        type: "Point",
        coordinates: [41, 12, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityistanbul",
        title: "Istanbul"
      },
      geometry: {
        type: "Point",
        coordinates: [41, 28, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityshenyang",
        title: "Shenyang"
      },
      geometry: {
        type: "Point",
        coordinates: [41.8, 123.4, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityskopje",
        title: "Skopje"
      },
      geometry: {
        type: "Point",
        coordinates: [42, 21, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitychangchun",
        title: "Changchun"
      },
      geometry: {
        type: "Point",
        coordinates: [43, 125, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityvladivostok",
        title: "Vladivostok"
      },
      geometry: {
        type: "Point",
        coordinates: [43, 131, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitysarajevo",
        title: "Sarajevo"
      },
      geometry: {
        type: "Point",
        coordinates: [43, 18, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitysochi",
        title: "Sochi"
      },
      geometry: {
        type: "Point",
        coordinates: [43, 39, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitykislovodsk",
        title: "Kislovodsk"
      },
      geometry: {
        type: "Point",
        coordinates: [43, 42, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityluarca",
        title: "Luarca"
      },
      geometry: {
        type: "Point",
        coordinates: [43, 6, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitytoronto",
        title: "Toronto"
      },
      geometry: {
        type: "Point",
        coordinates: [43, 79, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityimperia",
        title: "Imperia"
      },
      geometry: {
        type: "Point",
        coordinates: [43, 8, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitybologna",
        title: "Bologna"
      },
      geometry: {
        type: "Point",
        coordinates: [44, 11, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitytravnik",
        title: "Travnik"
      },
      geometry: {
        type: "Point",
        coordinates: [44, 17, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitybelgrade",
        title: "Belgrade"
      },
      geometry: {
        type: "Point",
        coordinates: [44, 20, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitybucharest",
        title: "Bucharest"
      },
      geometry: {
        type: "Point",
        coordinates: [44, 26, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitygenoa",
        title: "Genoa"
      },
      geometry: {
        type: "Point",
        coordinates: [44, 8, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityverona",
        title: "Verona"
      },
      geometry: {
        type: "Point",
        coordinates: [45, 10, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitygorizia",
        title: "Gorizia"
      },
      geometry: {
        type: "Point",
        coordinates: [45, 13, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitytrieste",
        title: "Trieste"
      },
      geometry: {
        type: "Point",
        coordinates: [45, 13, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityvukovar",
        title: "Vukovar"
      },
      geometry: {
        type: "Point",
        coordinates: [45, 19, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitywolfville",
        title: "Wolfville"
      },
      geometry: {
        type: "Point",
        coordinates: [45, 64, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityturin",
        title: "Turin"
      },
      geometry: {
        type: "Point",
        coordinates: [45, 7, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitymontreal",
        title: "Montreal"
      },
      geometry: {
        type: "Point",
        coordinates: [45, 73, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityottawa",
        title: "Ottawa"
      },
      geometry: {
        type: "Point",
        coordinates: [45, 75, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitybergamo",
        title: "Bergamo"
      },
      geometry: {
        type: "Point",
        coordinates: [45, 9, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitymilan",
        title: "Milan"
      },
      geometry: {
        type: "Point",
        coordinates: [45, 9, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitypavia",
        title: "Pavia"
      },
      geometry: {
        type: "Point",
        coordinates: [45, 9, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityszeged",
        title: "Szeged"
      },
      geometry: {
        type: "Point",
        coordinates: [46.255, 20.145, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitybudapest",
        title: "Budapest"
      },
      geometry: {
        type: "Point",
        coordinates: [47, 19, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityvienna",
        title: "Vienna"
      },
      geometry: {
        type: "Point",
        coordinates: [48, 16, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityivanofrankivsk",
        title: "Ivano-Frankivsk"
      },
      geometry: {
        type: "Point",
        coordinates: [48, 24, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityvancouver",
        title: "Vancouver"
      },
      geometry: {
        type: "Point",
        coordinates: [49, 123, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityprague",
        title: "Prague"
      },
      geometry: {
        type: "Point",
        coordinates: [50, 14, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitybrussels",
        title: "Brussels"
      },
      geometry: {
        type: "Point",
        coordinates: [50, 4, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitymaastricht",
        title: "Maastricht"
      },
      geometry: {
        type: "Point",
        coordinates: [50, 5, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitywestgermany",
        title: "West Germany"
      },
      geometry: {
        type: "Point",
        coordinates: [50, 7, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityeastbourne",
        title: "Eastbourne"
      },
      geometry: {
        type: "Point",
        coordinates: [50.77, 0.28, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitybrighton",
        title: "Brighton"
      },
      geometry: {
        type: "Point",
        coordinates: [50.842941, -0.131312, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitylondon",
        title: "London"
      },
      geometry: {
        type: "Point",
        coordinates: [51, 0, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityoxford",
        title: "Oxford"
      },
      geometry: {
        type: "Point",
        coordinates: [51, 1, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitykobielewielkie",
        title: "Kobiele Wielkie"
      },
      geometry: {
        type: "Point",
        coordinates: [51, 19, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitybristol",
        title: "Bristol"
      },
      geometry: {
        type: "Point",
        coordinates: [51, 2, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitywolaokrzejska",
        title: "Wola Okrzejska"
      },
      geometry: {
        type: "Point",
        coordinates: [51, 22, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitycardiff",
        title: "Cardiff"
      },
      geometry: {
        type: "Point",
        coordinates: [51, 3, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityzonnemaire",
        title: "Zonnemaire"
      },
      geometry: {
        type: "Point",
        coordinates: [51, 3, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityvoronezh",
        title: "Voronezh"
      },
      geometry: {
        type: "Point",
        coordinates: [51, 39, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitydordrecht",
        title: "Dordrecht"
      },
      geometry: {
        type: "Point",
        coordinates: [51, 4, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityrotterdam",
        title: "Rotterdam"
      },
      geometry: {
        type: "Point",
        coordinates: [51, 4, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitysaratov",
        title: "Saratov"
      },
      geometry: {
        type: "Point",
        coordinates: [51, 46, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityarnhem",
        title: "Arnhem"
      },
      geometry: {
        type: "Point",
        coordinates: [51, 5, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitywaalwijk",
        title: "Waalwijk"
      },
      geometry: {
        type: "Point",
        coordinates: [51, 5, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitybirmingham",
        title: "Birmingham"
      },
      geometry: {
        type: "Point",
        coordinates: [52, 1, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityderby",
        title: "Derby"
      },
      geometry: {
        type: "Point",
        coordinates: [52, 1, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityipswich",
        title: "Ipswich"
      },
      geometry: {
        type: "Point",
        coordinates: [52, 1, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityleicester",
        title: "Leicester"
      },
      geometry: {
        type: "Point",
        coordinates: [52, 1, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitynottingham",
        title: "Nottingham"
      },
      geometry: {
        type: "Point",
        coordinates: [52, 1, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitysaskatoon",
        title: "Saskatoon"
      },
      geometry: {
        type: "Point",
        coordinates: [52, 106, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityberlin",
        title: "Berlin"
      },
      geometry: {
        type: "Point",
        coordinates: [52, 13, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitypopowo",
        title: "Popowo"
      },
      geometry: {
        type: "Point",
        coordinates: [52, 19, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityleoncin",
        title: "Leoncin"
      },
      geometry: {
        type: "Point",
        coordinates: [52, 20, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityradzymin",
        title: "Radzymin"
      },
      geometry: {
        type: "Point",
        coordinates: [52, 21, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitywarsaw",
        title: "Warsaw"
      },
      geometry: {
        type: "Point",
        coordinates: [52, 21, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitypinsk",
        title: "Pinsk"
      },
      geometry: {
        type: "Point",
        coordinates: [52, 26, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityamsterdam",
        title: "Amsterdam"
      },
      geometry: {
        type: "Point",
        coordinates: [52, 4, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitydenhelder",
        title: "Den Helder"
      },
      geometry: {
        type: "Point",
        coordinates: [52, 4, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityleiden",
        title: "Leiden"
      },
      geometry: {
        type: "Point",
        coordinates: [52, 4, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitybilthoven",
        title: "Bilthoven"
      },
      geometry: {
        type: "Point",
        coordinates: [52, 5, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitynijkerk",
        title: "Nijkerk"
      },
      geometry: {
        type: "Point",
        coordinates: [52, 5, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityutrecht",
        title: "Utrecht"
      },
      geometry: {
        type: "Point",
        coordinates: [52, 5, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitybargercompascuum",
        title: "Barger-Compascuum"
      },
      geometry: {
        type: "Point",
        coordinates: [52, 7, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitydungarvan",
        title: "Dungarvan"
      },
      geometry: {
        type: "Point",
        coordinates: [52.0845, -7.6397, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitycambridge",
        title: "Cambridge"
      },
      geometry: {
        type: "Point",
        coordinates: [52.205, 0.119, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitynorthampton",
        title: "Northampton"
      },
      geometry: {
        type: "Point",
        coordinates: [52.2303748, -0.8937527, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitymunster",
        title: "Munster"
      },
      geometry: {
        type: "Point",
        coordinates: [52.25, 9, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityleeds",
        title: "Leeds"
      },
      geometry: {
        type: "Point",
        coordinates: [53, 1, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitysheffield",
        title: "Sheffield"
      },
      geometry: {
        type: "Point",
        coordinates: [53, 1, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityhamburg",
        title: "Hamburg"
      },
      geometry: {
        type: "Point",
        coordinates: [53, 10, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityliverpool",
        title: "Liverpool"
      },
      geometry: {
        type: "Point",
        coordinates: [53, 2, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitymanchester",
        title: "Manchester"
      },
      geometry: {
        type: "Point",
        coordinates: [53, 2, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityminsk",
        title: "Minsk"
      },
      geometry: {
        type: "Point",
        coordinates: [53, 27, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityblackpool",
        title: "Blackpool"
      },
      geometry: {
        type: "Point",
        coordinates: [53, 3, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitydublin",
        title: "Dublin"
      },
      geometry: {
        type: "Point",
        coordinates: [53, 6, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitygroningen",
        title: "Groningen"
      },
      geometry: {
        type: "Point",
        coordinates: [53, 6, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitynewcastleupontyne",
        title: "Newcastle upon Tyne"
      },
      geometry: {
        type: "Point",
        coordinates: [54, 1, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityryazan",
        title: "Ryazan"
      },
      geometry: {
        type: "Point",
        coordinates: [54, 39, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitycopenhagen",
        title: "Copenhagen"
      },
      geometry: {
        type: "Point",
        coordinates: [55, 12, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitylandskrona",
        title: "Landskrona"
      },
      geometry: {
        type: "Point",
        coordinates: [55, 12, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityroholte",
        title: "Roholte"
      },
      geometry: {
        type: "Point",
        coordinates: [55, 12, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitylund",
        title: "Lund"
      },
      geometry: {
        type: "Point",
        coordinates: [55, 13, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityedinburgh",
        title: "Edinburgh"
      },
      geometry: {
        type: "Point",
        coordinates: [55, 3, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitymoscow",
        title: "Moscow"
      },
      geometry: {
        type: "Point",
        coordinates: [55, 37, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityramelton",
        title: "Ramelton"
      },
      geometry: {
        type: "Point",
        coordinates: [55.03562, -7.64555, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityaarhus",
        title: "Aarhus"
      },
      geometry: {
        type: "Point",
        coordinates: [56, 10, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityhalmstad",
        title: "Halmstad"
      },
      geometry: {
        type: "Point",
        coordinates: [56, 12, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityriga",
        title: "Riga"
      },
      geometry: {
        type: "Point",
        coordinates: [56, 24, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitysilkeborg",
        title: "Silkeborg"
      },
      geometry: {
        type: "Point",
        coordinates: [56, 9, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitydundee",
        title: "Dundee"
      },
      geometry: {
        type: "Point",
        coordinates: [56.462, -2.9707, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitygothenburg",
        title: "Gothenburg"
      },
      geometry: {
        type: "Point",
        coordinates: [57, 11, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitynizhnytagil",
        title: "Nizhny Tagil"
      },
      geometry: {
        type: "Point",
        coordinates: [57, 59, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityaberdeen",
        title: "Aberdeen"
      },
      geometry: {
        type: "Point",
        coordinates: [57.1526, -2.11, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitystenstorp",
        title: "Stenstorp"
      },
      geometry: {
        type: "Point",
        coordinates: [58, 13, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityolshammar",
        title: "Olshammar"
      },
      geometry: {
        type: "Point",
        coordinates: [58, 14, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitystavanger",
        title: "Stavanger"
      },
      geometry: {
        type: "Point",
        coordinates: [58, 5, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitygjesdal",
        title: "Gjesdal"
      },
      geometry: {
        type: "Point",
        coordinates: [58, 6, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitygrimstad",
        title: "Grimstad"
      },
      geometry: {
        type: "Point",
        coordinates: [58, 8, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityoslo",
        title: "Oslo"
      },
      geometry: {
        type: "Point",
        coordinates: [59, 10, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityskedsmo",
        title: "Skedsmo"
      },
      geometry: {
        type: "Point",
        coordinates: [59, 11, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityuppsala",
        title: "Uppsala"
      },
      geometry: {
        type: "Point",
        coordinates: [59, 17, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitydjursholm",
        title: "Djursholm"
      },
      geometry: {
        type: "Point",
        coordinates: [59, 18, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitystockholm",
        title: "Stockholm"
      },
      geometry: {
        type: "Point",
        coordinates: [59, 18, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitykumasi",
        title: "Kumasi"
      },
      geometry: {
        type: "Point",
        coordinates: [6, 1, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitymonrovia",
        title: "Monrovia"
      },
      geometry: {
        type: "Point",
        coordinates: [6, 10, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitysemarang",
        title: "Semarang"
      },
      geometry: {
        type: "Point",
        coordinates: [6, 110, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityhelsinki",
        title: "Helsinki"
      },
      geometry: {
        type: "Point",
        coordinates: [60, 24, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitybergen",
        title: "Bergen"
      },
      geometry: {
        type: "Point",
        coordinates: [60, 5, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitylillehammer",
        title: "Lillehammer"
      },
      geometry: {
        type: "Point",
        coordinates: [61, 10, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityskattungbyn",
        title: "Skattungbyn"
      },
      geometry: {
        type: "Point",
        coordinates: [61, 14, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityvik",
        title: "Vik"
      },
      geometry: {
        type: "Point",
        coordinates: [61, 6, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitytrondheim",
        title: "Trondheim"
      },
      geometry: {
        type: "Point",
        coordinates: [63, 10, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitytasiilaq",
        title: "Tasiilaq"
      },
      geometry: {
        type: "Point",
        coordinates: [65, 37, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecityabeokuta",
        title: "Abeokuta"
      },
      geometry: {
        type: "Point",
        coordinates: [7, 3, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitymichelena",
        title: "Michelena"
      },
      geometry: {
        type: "Point",
        coordinates: [7, 72, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "httpdatanobelprizeorgresourcecitydili",
        title: "Dili"
      },
      geometry: {
        type: "Point",
        coordinates: [8, 125, 0]
      }
    }
  ]
};

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoibWFyaWVkZXN0YW5kYXUiLCJhIjoiY2ppb2E2Y3hlMG5xMzNrbzI3Ynk0MDlmaSJ9.XmflFu2QUBjFDVVWAKFBKQ"
});

function Map4() {
  return (
    <div className="App">
      <Map
        style="mapbox://styles/mapbox/light-v9"
        containerStyle={{
          height: "100%",
          width: "100%",
          position: "absolute"
        }}
        center={[0, 40]}
        zoom={[1.2]}
      >
        <GeoJSONLayer
          id="source_id"
          data={geoData}
          sourceOptions={{
            cluster: true,
            clusterMaxZoom: 14,
            clusterRadius: 50
          }}
          symbolLayout={{
            "text-field": "{title}",
            "text-offset": [0, 0.6],
            "text-anchor": "top"
          }}
          circlePaint={{
            "circle-color": "green",
            "circle-radius": 6
          }}
          circleOnMouseEnter={() => console.log("di")}
          circleOnMouseLeave={() => console.log("dd")}
          circleOnClick={() => console.log("hy")}
        />
        <Layer
          id="cluster_layer"
          sourceId="source_id"
          layerOptions={{
            filter: ["has", "point_count"]
          }}
          paint={{
            "circle-color": {
              property: "point_count",
              type: "interval",
              stops: [[0, "#51bbd6"], [10, "#f1f075"], [750, "#f28cb1"]]
            },
            "circle-radius": {
              property: "point_count",
              type: "interval",
              stops: [[0, 20], [10, 30], [750, 40]]
            }
          }}
          type="circle"
          onMouseEnter={() => console.log("do")}
          circleOnMouseLeave={() => console.log("dp")}
        />
        <Layer
          id="cluster_count"
          sourceId="source_id"
          layerOptions={{
            filter: ["has", "point_count"]
          }}
          layout={{
            "text-field": "{point_count_abbreviated}",
            "text-size": 12
          }}
          type="symbol"
        />
      </Map>
    </div>
  );
}

export default Map4


