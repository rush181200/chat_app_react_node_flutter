import React from 'react'

const Message = () => {
  return (
    <>
    <div className='chat chat-start'>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img src={
                    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                } alt="" />
            </div>
        </div>
        
        <div className="chat-header">
    Obi-Wan Kenobi
    <time className="text-xs opacity-50">12:45</time>
  </div>
  <div className="chat-bubble">You were the Chosen One!</div>
  <div className="chat-footer opacity-50">
    Delivered
  </div>
    </div>
    <div className='chat chat-end'>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img src={
                    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                } alt="" />
            </div>
        </div>
        
        <div className="chat-bubble text-white bg-blue-500">I hate you!</div>
        <div className="chat-footer opacity-50">
            Seen at 12:46
        </div>
    </div>
    </>
    
  )
}

export default Message
