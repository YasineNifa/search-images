import axios from "axios";
// we can create our own axios server for whome we can send request to and we can export this to our app

export default axios.create({
    baseURL:"https://api/*.unsplash.com/",
    headers:{
        Authorization:"Client-ID wpL6OR_M7McjqJCCH1ILiBV0FtLIpudXmIPlg4mcj08",
    
    }
})
