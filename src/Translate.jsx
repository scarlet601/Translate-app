import {React,useEffect,useState,useRef} from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import axios from 'axios';
import { MdOutlineClose } from "react-icons/md";
import { MdContentCopy } from "react-icons/md";
import { MdOutlineSyncAlt } from "react-icons/md";
import { data } from './data';
export const Translate = () => {
   const [languages,setLanguages] = useState(data) 
   const [error,setError] = useState(false)
   const [needTranslate,setNeedTranslate] = useState('')
   const [translatedTo,setTranslatedTo] = useState('')
   const [translateFrom,setTranslatedFrom] = useState('en')
   const [toNewLang,setToNewLang] = useState('')
   {/*useEffect(()=>{
       axios.get(`https://google-translate1.p.rapidapi.com/language/translate/v2/languages?target=en`,
            {
                headers: {
                    'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
                    'x-rapidapi-key': '469720f55fmshcd5ba0185008a87p1555d4jsn1d185c894179'
                }
            })
        .then(res => setLanguages(res.data.data.languages))

   },[])
   const handleSubmit =(e)=>{
    e.preventDefault()

    const encodedParams = new URLSearchParams();
    encodedParams.append("q", needTranslate);
    encodedParams.append("target", toNewLang);
    encodedParams.append("source", translateFrom);
    
    axios.request({
        method: 'POST',
        url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': '469720f55fmshcd5ba0185008a87p1555d4jsn1d185c894179',
          'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        data: encodedParams
    })
   .then(res => setTranslatedTo(res.data.data.translations[0].translatedText))
}
*/}
    const inputRef = useRef(null)
    useEffect(()=>{
      inputRef.current.focus()
    },[])
/* this is to make focused input */
    const handleClick = () =>{
      setTranslatedFrom(toNewLang)
      setToNewLang(translateFrom)
    }
/* this is to flip from language to another */
    return (
    <div className='text-center my-40 mx-auto md:w-[700px] sm:w-[550px] w-96'>
      <h1 className='text-3xl mb-10 tracking-wider font-medium'>TRANSLATOR</h1>
          <form>
            <div className='flex justify-between items-center gap-6'>
              <select value={translateFrom} onChange={(e)=>setTranslatedFrom(e.target.value)} className='rounded-lg w-1/2 h-12 border-x-8 border-white bg-white text-lg font-medium cursor-pointer outline-none'>
                {languages && languages.map((lang)=>(
                  <option value={lang.language} key={lang.language}>{lang.name}</option>
                ))}
              </select>
              {/*map throught the languages came from api to show them inside the select field or dropdown menu*/}
              <MdOutlineSyncAlt className='w-7 h-7 cursor-pointer' onClick={handleClick}/>
              <select value={toNewLang} onChange={(e)=>setToNewLang(e.target.value)} className='w-1/2 rounded-lg h-12 border-x-8 border-white bg-white text-lg font-medium cursor-pointer outline-none'>
                {languages && languages.map((lang)=>(
                  <option value={lang.language} key={lang.language}>{lang.name}</option>
                ))}
              </select>   
            </div>

            <div className='flex flex-col w-full relative'> 
              <textarea className='mt-10 h-32 rounded-lg pt-4 pl-4 font-sans text-2xl resize-none outline-none border-2 border-pink-300' type='text' value={needTranslate} onChange={(e)=>setNeedTranslate(e.target.value)} ref={inputRef}></textarea>
              <textarea className='mt-10 h-32 rounded-lg pt-4 pl-4 font-sans text-2xl resize-none outline-none border-2 border-pink-300 placeholder:text-slate-500' type='text' defaultValue={translatedTo} onChange={(e)=>setTranslatedTo(e.target.value)} readOnly placeholder='Translation'></textarea>
              <MdOutlineClose className='absolute w-6 h-6 top-11 right-1 text-slate-700 cursor-pointer hover:rounded-full closebtn' onClick={()=>setNeedTranslate('')}/>
              <CopyToClipboard text={translatedTo}><MdContentCopy className='absolute w-6 h-6 bottom-3 right-1 text-slate-500 cursor-pointer z-10 hover:scale-125'/></CopyToClipboard>
            </div>

            <div className='w-full'>
              <button type='submit' className='bg-white rounded-lg p-3 mt-10 w-full font-medium translatebtn'>TRANSLATE</button>
            </div>
          </form>
    </div>
  )
}

