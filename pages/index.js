import React,{useContext, useEffect, useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Carusel from '../components/carusel/carusel'
import Fuculy from '../components/fuclities/fuculy'
import Loading from '../components/loading/loading'
import News from '../components/news/news'
import Partner from '../components/partners/partner'
import Score from '../components/score/score'
import styles from '../styles/Home.module.css'
import HeroWidget from '../components/widjed/widjed'

import { context } from '../components/context/context'

export default function Home() {

  const {loading,setLoading} = useContext(context)

  useEffect(()=>{
    window.addEventListener('load',() =>{
      setLoading(true)
    })
  },[])
  
  

  setTimeout(() =>{
    setLoading(false)
  },5000)

  return (
    <div>
    <Head>
        <title >Tdtu ilmiy-tadqiqot</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Loading state={loading}/>
        <div className={'flex w-full justify-center'}>
               <Carusel  />
        </div>
               {/* { loading ? <Loading /> : ''} */}
        <News />
        <Fuculy />
        <Score fakul={300} students ={25000} teachers={990} forwork={50}  />
        <Partner />
        <HeroWidget />
      </main>
    </div>
  )
}
