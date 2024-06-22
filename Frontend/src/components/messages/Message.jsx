import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation';
import { extractTime } from '../../utils/extractTime';

const Message = ({message}) => {
    const {authUser} = useAuthContext();
    const {selectedConversation} = useConversation()
    const fromMe = message.senderId ===authUser._id
    const formattedTime = extractTime(message.createdAt);
    const chatClassName = fromMe?"chat-end":"chat-start";
    const profile = fromMe ? authUser.profilePic : selectedConversation?.profilePic
    const bubbleBgColor = fromMe?'bg-blue-500':"";
    const shake = message.shouldShake ? "shake" : ""
    
  return (
   
    <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img src=
                    {profile}
                 alt="" />
            </div>
        </div>
        
        <div className="chat-header">
    
    </div>
    <div className={`chat-bubble ${bubbleBgColor} ${shake} pb-2`}>{message.message}</div>
    <div className="chat-footer opacity-50">
        {formattedTime}
    </div>
    </div>
    
    
  )
}

export default Message
