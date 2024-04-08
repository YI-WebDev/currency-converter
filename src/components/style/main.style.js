export const mainStyle = {
    Box: {
        display: 'flex',
        gap: "20px",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
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
    }
};