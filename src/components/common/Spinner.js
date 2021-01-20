import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const Spinner = ({ height, width, color } = { height: 100, width: 100, color: '#6EBC61' }) => (
    <div style={ { display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' } }>
        <Loader type="ThreeDots" color={color} height={height} width={width}/>
    </div>
);

export default Spinner;
