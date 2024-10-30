import styled from "styled-components";

import { BaseButton, GoogleSignInButton } from "../button/button.styles";


export const SignInContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;

    h2{
        margin: 10px 0;
    }
    
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;


// export const ButtonContainer = styled.div`
//     display: flex;
//     justify-content: space-between;

//     ${BaseButton},
//     ${GoogleSignInButton}
    
// ` 


// .sign-up-container{
//     display: flex;
//     flex-direction: column;
//     width: 380px;

    // h2{
    //     margin: 10px 0;
    // }


//     .buttons-container{
//         display: flex;
//         justify-content: space-between;
//     }
// }