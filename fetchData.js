let data =[];
const serverWander =  'http://35.240.201.155:3000/';
axios .get (`${serverWander}api/v1/wanderlink/show/idn/destination`)
    .then (response => {
        console.log(response);
        const listHTML = document.getElementById("list")
        data = response.data;

        response.data.forEach(item => {
            const {images,destinationName, address, city}=item;
            const itemHTML = ` <div class = "col-sm-4">
            <img width="100%" height = "200px" src="${serverWander}${images && images[0]}"/>
            <li>
            Destination : ${destinationName}</li>
            <li>Address : ${address}</li>
            <li>City : ${city}</li>
            </div>`;
            listHTML.innerHTML += itemHTML;
        })
    })
    .catch ((pesanError)=> {
        console.error(pesanError);
    })
    axios.post (`${serverWander}api/v1/wanderlink/show/idn/destination`,{
        images,
        destinationName,
        address,
        city
    })
    .then(data=> {
        console.log(data);
        dataWanderlink = data;
        next();
        
    })

// const show = (noIndex =0) =>{
//     const max = 20 + noIndex;
//     document.getElementById('wanderlink').innerHTML= "";
//     for (noIndex;noIndex<max;noIndex++){
//         item(dataWanderlink[noIndex],noIndex);
//     }
//     currentpages = max;
// }
// const previous = ()=> {
//     show10(currentPages - 20);
// }
// const next = () => {
//     show10(currentPages);
// }