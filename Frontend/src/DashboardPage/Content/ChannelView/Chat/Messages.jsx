import React from 'react'

const Message = ({ author, content }) => {
    return (
        <span>
            <span>{author}</span>
            {content}
        </span>
    )
}

const Messages = ({ messages }) => {
  return (
    <div>
        {messages.map((message) => (
            <Message 
                key={`${message.author}-${message.content}-${message.date}`}
                author={message.author}
                content={message.content}
            />
        ))}
    </div>
  )
}

export default Messages