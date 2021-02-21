import React from 'react'
import styled from 'styled-components'
import Pin from './Pin'
function Mainboard(props) {

    let {pins} = props;
    return (
        <Wrapper>
            <Container>
                {pins.map((pin, index) => {
                    let {urls} = pin;
                    return <Pin key={index} urls={urls}/>//react tract changes index to attract changes
                })}
                
            </Container>
        </Wrapper>
    )
}

export default Mainboard
const Wrapper = styled.div`
    background-color : white;
    display:flex;
    width :100%;
    margin-top:15px;
    height:100%;
    justify-content:center;
`

const Container = styled.div`
    background-color : white;
    column-count: 5;
    column-gap: 10px;
    margin: 0 auto;
    height: 100%;
    max-width : 1260px
    

`
