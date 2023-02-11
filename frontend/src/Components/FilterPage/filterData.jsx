import { AddIcon } from "@chakra-ui/icons"
import { Box, Heading, Select } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Footer from "../Footer/Footer"
import Navbar from "../Navar/Navbar"
import { ShowAllBooks } from "../ShowBooks/ShowAllBooks"
import { Sidebar } from "./Sidebar"




export const FilterDataPage=()=>{
  const BookData=useSelector(s=>s.list.BookData)
  const [AllData,setAllData]=useState(BookData)
  const navigate=useNavigate()
  const [st,setSt] = useState(false)
  const [data,setData]=useState([])
  const [text,setText]=useState()



// handle the   Sort -----------------------------------------------------------------------------------------------------------
  const handleSort=(e)=>{
      let res=(e.target.value)
      if(res=="htl"){
          AllData.sort((a,b)=>{
                 return b.price-a.price
           })
      }
     else{
        AllData.sort((a,b)=>{
            return a.price-b.price
        })
    }
    setSt(!st)
}


// handle the filter  -----------------------------------------------------------------------------------------------------------

  const FilterData=(el)=>{
      let filterdata=BookData.filter((i)=>{
         if(el.includes(i.language)){
               return i
           }
       })
       console.log(filterdata)
       
      if(filterdata.length==0){
          setAllData(BookData)
      }
      else{
        setAllData(filterdata)
      }
      setSt(!st)
  }





useEffect(()=>{
       if(BookData.length==0){
           navigate("/")
       }


},[st])


 

// handle the search -----------------------------------------------------------------------------------------------------------
const handleSearch=(el)=>{
    setText(el.target.value)
}

// handle the search -----------------------------------------------------------------------------------------------------------
const SearchFilter=()=>{
// console.log(text)
 let res=BookData.filter((el)=>
      el.title==text || el.author==text || el.publisher==text
 )
 console.log(res)
 setData(res)
}


console.log(data,AllData)

    return(
        <> 
        {/* Navbar-------------------search={handleSearch} sFilter={SearchFilter} */}
               <Navbar search={handleSearch} sFilter={SearchFilter} />


            <Box className="filterMainbox">

                 <Box className="sidebar">
                        <Sidebar  FilterData={FilterData}/>
                 </Box>

                <Box className="displaybox">
                        <Box ml="20px" mb="30px" h="50px" display="flex" width="50%" >
                            <Heading mt="1.5%" size="md" mr="10px">Sort by Price:</Heading>
                           <Select onChange={handleSort}  w="150px" placeholder='Relevance'>
                                <option value='lth'>Low to High</option>
                                <option value='htl'>High to Low</option>
                           </Select>
                        </Box>
                        <Box>
                            
                        {data && data.length>0 ? <ShowAllBooks bookdata={data}/> : <ShowAllBooks bookdata={AllData}/>}  
                           {/* {AllData && <ShowAllBooks bookdata={AllData}/> }  */}
                        </Box>
                </Box>
            </Box>


            {/* Footer */}
            <Footer />
         
        </>
    )
}