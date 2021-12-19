import React from 'react'

export default function About(props) {
    let modeStyle;

    if(!props.mode.currentMode) {
        modeStyle = {
            css :{
                color : "white",
                backgroundColor : "#042743",
                padding : "30px",
            },
            btn : "btn btn-outline-light mx-1"
        }
    }
    else {
        modeStyle = {
            css :{
                color : "black",
                backgroundColor : "white",
                padding : "30px",
            },
            btn : "btn btn-outline-dark mx-1"
        }
    }

    return (
        <div style={modeStyle.css}> 
            <div style={modeStyle.css}>
                <h3>About Us</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti sit distinctio inventore ea nam ducimus veritatis soluta, veniam beatae tempore, praesentium fugit reiciendis iure hic similique laudantium voluptatibus, alias in?
                Nihil voluptas dignissimos saepe omnis earum accusamus fugit laudantium rerum, voluptate sunt assumenda tenetur placeat voluptates, delectus ab inventore iste doloremque ad. Sit neque exercitationem ullam, maiores ipsa et velit.
                Ratione vero ullam autem! Aliquid iure libero ratione porro atque est repudiandae distinctio mollitia eos! Rerum harum iste ad doloremque et quae ducimus earum, explicabo dolores tempore voluptatibus totam impedit?
                Consectetur at velit doloribus vitae magnam veniam, excepturi beatae aliquam numquam quidem possimus ipsa odit delectus voluptatem, ab sed sint error accusantium consequatur illum! Omnis earum tempora consectetur expedita corrupti.
                Veritatis, reprehenderit eos eligendi itaque iure consequuntur nesciunt officiis ab similique sed necessitatibus quasi nisi corporis nobis quibusdam esse illum ipsum neque et eum velit tenetur assumenda fugiat unde. Porro!</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti sit distinctio inventore ea nam ducimus veritatis soluta, veniam beatae tempore, praesentium fugit reiciendis iure hic similique laudantium voluptatibus, alias in?
                Nihil voluptas dignissimos saepe omnis earum accusamus fugit laudantium rerum, voluptate sunt assumenda tenetur placeat voluptates, delectus ab inventore iste doloremque ad. Sit neque exercitationem ullam, maiores ipsa et velit.
                Ratione vero ullam autem! Aliquid iure libero ratione porro atque est repudiandae distinctio mollitia eos! Rerum harum iste ad doloremque et quae ducimus earum, explicabo dolores tempore voluptatibus totam impedit?
                Consectetur at velit doloribus vitae magnam veniam, excepturi beatae aliquam numquam quidem possimus ipsa odit delectus voluptatem, ab sed sint error accusantium consequatur illum! Omnis earum tempora consectetur expedita corrupti.
                Veritatis, reprehenderit eos eligendi itaque iure consequuntur nesciunt officiis ab similique sed necessitatibus quasi nisi corporis nobis quibusdam esse illum ipsum neque et eum velit tenetur assumenda fugiat unde. Porro!</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti sit distinctio inventore ea nam ducimus veritatis soluta, veniam beatae tempore, praesentium fugit reiciendis iure hic similique laudantium voluptatibus, alias in?
                Nihil voluptas dignissimos saepe omnis earum accusamus fugit laudantium rerum, voluptate sunt assumenda tenetur placeat voluptates, delectus ab inventore iste doloremque ad. Sit neque exercitationem ullam, maiores ipsa et velit.
                Ratione vero ullam autem! Aliquid iure libero ratione porro atque est repudiandae distinctio mollitia eos! Rerum harum iste ad doloremque et quae ducimus earum, explicabo dolores tempore voluptatibus totam impedit?
                Consectetur at velit doloribus vitae magnam veniam, excepturi beatae aliquam numquam quidem possimus ipsa odit delectus voluptatem, ab sed sint error accusantium consequatur illum! Omnis earum tempora consectetur expedita corrupti.
                Veritatis, reprehenderit eos eligendi itaque iure consequuntur nesciunt officiis ab similique sed necessitatibus quasi nisi corporis nobis quibusdam esse illum ipsum neque et eum velit tenetur assumenda fugiat unde. Porro!</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti sit distinctio inventore ea nam ducimus veritatis soluta, veniam beatae tempore, praesentium fugit reiciendis iure hic similique laudantium voluptatibus, alias in?
                Nihil voluptas dignissimos saepe omnis earum accusamus fugit laudantium rerum, voluptate sunt assumenda tenetur placeat voluptates, delectus ab inventore iste doloremque ad. Sit neque exercitationem ullam, maiores ipsa et velit.
                Ratione vero ullam autem! Aliquid iure libero ratione porro atque est repudiandae distinctio mollitia eos! Rerum harum iste ad doloremque et quae ducimus earum, explicabo dolores tempore voluptatibus totam impedit?
                Consectetur at velit doloribus vitae magnam veniam, excepturi beatae aliquam numquam quidem possimus ipsa odit delectus voluptatem, ab sed sint error accusantium consequatur illum! Omnis earum tempora consectetur expedita corrupti.
                Veritatis, reprehenderit eos eligendi itaque iure consequuntur nesciunt officiis ab similique sed necessitatibus quasi nisi corporis nobis quibusdam esse illum ipsum neque et eum velit tenetur assumenda fugiat unde. Porro!</p>
            </div>
        </div>
    )
}
