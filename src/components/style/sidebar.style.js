import { keyframes } from '@mui/system';

const lightAnimation = keyframes`
  100% {
    outline-color: silver;
    outline-offset: 12px;
  }
`;

export const style = {
    text: {
        textDecoration: 'none',
        fontSize: '20px',
        color: 'white',
        transition: '.3s',
        outline: '0.5px solid',
        outlineColor: '#1e1e1e',
        outlineOffset: '0px',
        ":hover": {
            animation: `${lightAnimation} .5s infinite alternate`,
        },
    }
};