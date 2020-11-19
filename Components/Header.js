import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

const Image = styled.div`
display: flex;
align-items: center;
justify-content: center;
img{
    height: 140px;
    width: 387px;
}
`



export default function Header() {
    return (
        <div>
            <Wrapper>
                <Image>
                    <img scr={"../Public/Pokedex.png"} />
                </Image>
            </Wrapper>
        </div>
    )
}
