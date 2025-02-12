"use client"


import {  useCall, VideoPreview } from '@stream-io/video-react-sdk'
import React, { useEffect, useState } from 'react'

const MeetingSetup = () => {
    const [isMicCamToogleOn, setIsMicCamToogleOn] = useState(false)
    const call = useCall();
    // if(!call){
    //     throw new Error("use call must be used within StreamCall component")
    // }
    useEffect(() => {
       if(isMicCamToogleOn) {
        call?.camera.disable();
        call?.microphone.disable()
       }else{
        call?.camera.enable();
        call?.microphone.enable();
       }
    }, [isMicCamToogleOn, call?.camera, call?.microphone])
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center gap-3 text-white '>
        <h1 className='text-2xl font-bold'>Setup</h1>
      <VideoPreview/>
    </div>
  )
}

export default MeetingSetup
