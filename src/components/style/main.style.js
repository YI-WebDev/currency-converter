import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';


export const mainStyle = {
    Box: {
        display: 'flex',
        gap: "20px",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1e1e1e',
        paddingBottom: { xs: "50px", sm: "150px" },
        color: "white",
        fontSize: "20px",
    },
    button: {
        backgroundColor: '#007bff',
        color: 'white',
        padding: '10px 10px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '10px',
        transition: 'background-color 0.3s ease',
        '&:hover': {
            backgroundColor: 'darkblue',
        },
    },
};

export const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    & fieldset {
      border-color: white;
    }
    &:hover fieldset {
      border-color: yellow;
    }
    &.Mui-focused fieldset {
      border-color: yellow;
    }
    & .MuiOutlinedInput-input {
        color: white;
      }
  }
  .MuiFormLabel-root {
    color: white;
    &.Mui-focused {
      color: white;
    }
  }

  .MuiFormHelperText-root {
    color: white;
    font-family: 'Arial', sans-serif;
    font-size: 14px;
    justify-content: left;
  }
`;
