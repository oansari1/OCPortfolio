// import Marker from '../images/marker.png';
// export default function Entry(props) {
//     return (
//         <article className="journal-entry">
//             <div className="main-image-container">
//                 <img 
//                     className="main-image"
//                     src={props.img.src}
//                     alt={props.img.alt}
//                 />
//             </div>
//             <div className="info-container">
//                 <img 
//                     className="marker"
//                     src= {Marker} 
//                     alt="map marker icon"
//                 />
//                 <span className="country">{props.country}</span>
//                 <a href={props.googleMapsLink} target="_blank">View on Google Maps</a>
//                 <h2 className="entry-title">{props.title}</h2>
//                 <p className="trip-dates">{props.dates}</p>
//                 <p className="entry-text">{props.text}</p>
//             </div>
            
//         </article>
//     )
// }

// import Marker from '../images/marker.png';

// export default function Entry(props) {
//     return (
//         <article className="flex mb-9">
//             <div className="w-32 h-42 overflow-hidden rounded-lg flex-shrink-0 mr-5">
//                 <img
//                     className="w-full h-full object-cover"
//                     src={props.img.src}
//                     alt={props.img.alt}
//                 />
//             </div>
//             <div className="flex flex-col">
//                 <div className="flex items-center mb-2">
//                     <img src={Marker} alt="map marker icon" className="w-2 mr-1" />
//                     <span className="uppercase text-xs mr-3">{props.country}</span>
//                     <a href={props.googleMapsLink} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-800 visited:text-gray-500">
//                         View on Google Maps
//                     </a>
//                 </div>
//                 <h2 className="text-xl font-semibold mb-4">{props.title}</h2>
//                 <p className="font-bold text-sm mb-2">{props.dates}</p>
//                 <p className="text-sm leading-relaxed line-clamp-3">
//                     {props.text}
//                 </p>
//             </div>
//         </article>
//     );
// }
import Marker from '../images/marker.png';

export default function Entry(props) {
    return (
        <article className="flex mb-9">
            <div className="w-32 h-42 overflow-hidden rounded-lg flex-shrink-0 mr-5">
                <img 
                    className="h-full w-full object-cover"
                    src={props.img.src}
                    alt={props.img.alt}
                />
            </div>
            <div className="text-black px-5">
                <div className="flex items-center mb-2">
                    <img className="w-2 mr-1" src={Marker} alt="map marker icon" />
                    <span className="uppercase text-xs mr-3">{props.country}</span>
                    <a href={props.googleMapsLink} target="_blank" className="text-xs text-[#2B283A] underline hover:text-red-400">View on Google Maps</a>
                </div>
                <h2 className="flex justify-start text-lg font-bold mb-4">{props.title}</h2>
                <p className="flex justify-start font-bold mb-1">{props.dates}</p>
                <p className="flex text-left text-sm">{props.text}</p>
            </div>
        </article>
    )
}
