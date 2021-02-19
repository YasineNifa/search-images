import React from 'react'
import styled from 'styled-components'
import PinterestIcon from '@material-ui/icons/Pinterest';
import IconButton from "@material-ui/core/IconButton";// buble button
import SearchIcon from '@material-ui/icons/Search';
import  FaceIcon from "@material-ui/icons/Face";
import  TextsmsIcon from "@material-ui/icons/Textsms";
import  KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import NotificationsIcon from "@material-ui/icons/Notifications"


function Header() {
    return (
        <div>
            <Wrapper>
                <LogoWrapper>
                    <IconButton>
                        <PinterestIcon/>
                    </IconButton>
                </LogoWrapper>


                
                <HomePageButton>
                    <a href="/">HomePage</a>
                </HomePageButton>

                

                <FollowingButton>
                    <a href="/">Following</a>
                </FollowingButton>
                


                <SearchWrapper>
                    <SearchBarWrapper>
                        <IconButton>
                            <SearchIcon/>
                        </IconButton>
                        <form>
                            <input type='text'/>
                            <button type='submit'></button>
                        </form>
                    </SearchBarWrapper>
                </SearchWrapper>



                

                <IconWrapper>
                    <IconButton>
                        <NotificationsIcon/>
                    </IconButton>
                    
                    <IconButton>
                        <TextsmsIcon/>
                    </IconButton>

                    <IconButton>
                        <FaceIcon/>
                    </IconButton>

                    <IconButton>
                        <KeyboardArrowDownIcon/>
                    </IconButton>
                </IconWrapper>
                

                
            </Wrapper>
        </div>
    )
}

export default Header

const Wrapper = styled.div`
    display:flex;
    align-items:center;
    height : 56px;
    padding: 12px 4px 4px 16px; 
    background-color : white;
    color : black

`
const LogoWrapper = styled.div`
    .MuiSvgIcon-root{
        color: #e60023;
        font-size:32px;
        cursor:pointer;
    }
`
const HomeButton = styled.div`
    display : flex;
    align-items:center;
    height : 48px;
    min-width:123px;
    justify-content:center;
    border-radius:24px;
    cursor:pointer;
`
const HomePageButton = styled(HomeButton)`
    background-color : rgb(17,17,17);
    a{
        text-decoration: none;
        color : white;
        font-weight:700;
    }
`

const FollowingButton = styled(HomeButton)`
    
    background-color : white;
    a {
        text-decoration: none;
        color : black;
        font-weight:700;
    }
    : hover{
        background-color:#e1e1e1;
    }

`

const SearchWrapper = styled.div`
    flex:1;
`
const SearchBarWrapper = styled.div`
    background-color:#efefef;
    display:flex;
    height:48px;
    width:100%;
    border-radius : 50px;
    border:none;
    padding-left:10px;

    form{
        display :flex;
        flex:1;
    }
    form > input{
        background-color:transparent;
        border:none;
        width:100%;
        margin-left:5px;
        font-size:16px;
    }
    form > button{
        display:none;
    }
    input:focus{
        outline:none;
    }
`
const IconWrapper = styled.div``