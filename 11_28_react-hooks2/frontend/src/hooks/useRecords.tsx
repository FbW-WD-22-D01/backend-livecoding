import axios, {AxiosResponse} from 'axios'
import * as React from 'react'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:3001'


type Record = {
    _id: string
    title: string
    band: string
    price: number
}

type RecordHook= {
    list: Record[]
    min: number
    max: number
    band: string
    setMin: (min: number) => void 
    setMax: (max:number) => void
    setBand: (band: string) => void
}

export default function useRecords():RecordHook{

    const [list, setList]   = React.useState<Record[]>([])
    const [min, setMin]     = React.useState(0)
    const [max, setMax]     = React.useState(30)
    const [band, setBand]   = React.useState('')

    const [save, setSave]   = React.useState<Record[]>([]) // Sicherung für später
    
    React.useEffect(() => {
        axios.get('/records')
            .then((res) => {setList(res.data); setSave(res.data) })
            .catch(() => console.log('Fehler'))
    }, [])



    React.useEffect(() => {
        const filteredItems = save.filter(el => {
            return(
                el.price >= min  &&
                el.price <= max  &&
                el.band.startsWith(band) 
                )  
        })
        setList(filteredItems)
        
    
    },[min, max, band])


    React.useEffect(() => {
        if (!band) setList(save)
        findMinMax()
    },[list])
    

    function findMinMax(){
     
        const lowest = list.reduce((acc:number, curr:Record, index:number) => {
            if(index !== 0) return curr.price < acc ? curr.price : acc
            return curr.price
            },0)
        
        const highest = list.reduce((acc:number, curr:Record, index:number) => {
            return curr.price > acc ? curr.price : acc
        },0)
        console.log('findMinMax: ', lowest, highest, band)
        setMin(lowest)
        setMax(highest)

        // setMin(minResult)
    }


    


    return {list, min, max, band, setMin, setMax, setBand}
}

