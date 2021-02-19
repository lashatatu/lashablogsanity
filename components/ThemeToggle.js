import Toggle from 'react-toggle';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const ThemeToggle = ({onChange}) =>
	 <label >
		 <Toggle
				className={'day-night-toggle'}
				icons={{
					checked: <FontAwesomeIcon inverse icon={'moon'}/>,
					unchecked: <FontAwesomeIcon inverse icon={'sun'}/>
				}}
				onChange={onChange} />
	 </label >;
export default ThemeToggle;